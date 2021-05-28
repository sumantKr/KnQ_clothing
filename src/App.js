import './App.scss';
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.action'
import { auth, createUserProfileDoc } from './firebase/firebase.utils.js'
import { Route, Switch } from 'react-router-dom';
import { HomePage } from './pages/HomePage/Homepage.component.jsx'
import ShopPage from './pages/shop/shop.component.jsx'
import Header from './components/header/header.component.jsx'
import { signInAndSignUp } from './pages/signInAndSignUp/signInAndSignUp.component.jsx'
import React from 'react';
class App extends React.Component {

  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth)
        userRef.onSnapshot(snapshot => {
          this.props.setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        })
      }
      setCurrentUser(userAuth)      // console.log(user);
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
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={signInAndSignUp} />
      </Switch>
    </div>
  };
}
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(null, mapDispatchToProps)(App);
