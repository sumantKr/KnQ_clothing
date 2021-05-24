import './App.scss';
import { auth,createUserProfileDoc } from './firebase/firebase.utils.js'
import { Route, Switch } from 'react-router-dom';
import { HomePage } from './pages/HomePage/Homepage.component.jsx'
import ShopPage from './pages/shop/shop.component.jsx'
import { Header } from './components/header/header.component.jsx'
import { signInAndSignUp } from './pages/signInAndSignUp/signInAndSignUp.component.jsx'
import React from 'react';
class App extends React.Component {
  constructor(){
    super()
    this.state={
      currentUser:null
    }
  }
  unsubscribeFromAuth=null;
  componentDidMount(){
    this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
        const userRef=await createUserProfileDoc(userAuth)
        userRef.onSnapshot(snapshot=>{
          this.setState({
            currentUser:{
              id:snapshot.id,
              ...snapshot.data()
            }
          },()=>{
            console.log(this.state)
          })
        })
      }
      this.setState({currentUser:userAuth})
      // console.log(user);
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }
  render() {
    return <div className="App">
    <Header currentUser={this.state.currentUser} />
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop' component={ShopPage} />
      <Route exact path='/signin' component={signInAndSignUp} />
    </Switch>
  </div>
};
}
export default App;
