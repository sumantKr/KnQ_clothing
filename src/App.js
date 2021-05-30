import './App.scss';
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.action'
import { auth, createUserProfileDoc } from './firebase/firebase.utils.js'
import { Route, Switch,Redirect } from 'react-router-dom';
import { HomePage } from './pages/HomePage/Homepage.component.jsx'
import ShopPage from './pages/shop/shop.component.jsx'
import Header from './components/header/header.component.jsx'
import { SignInAndSignUp } from './pages/signInAndSignUp/signInAndSignUp.component.jsx'
import React from 'react';
class App extends React.Component {

  unsubscribeFromAuth = null;
  componentDidMount() {
    // console.log(this.props.theCurrentUser);
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth)
        userRef.onSnapshot(snapshot => {
          this.props.theCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        })
      }
      this.props.theCurrentUser(userAuth)      
    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }
  render() {
    return <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route  path='/shop' component={ShopPage} />
        <Route exact path='/signin' 
        render={()=>
          this.props.currentUser ?
            <Redirect to="/"/>
            :
            <SignInAndSignUp/>
          }/>

      </Switch>
    </div>
  };
}
const mapStateToProps=({user})=>({
  currentUser:user.currentUser   // maps the store state to component props
})
const mapDispatchToProps = dispatch => ({
  theCurrentUser: user => dispatch(setCurrentUser(user)) //dispatches the action setCurrentUser when the current user called
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
