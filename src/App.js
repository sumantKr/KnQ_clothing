import './App.scss';
import { auth } from './firebase/firebase.utils.js'
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
    this.unsubscribeFromAuth=auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user})
      console.log(this.state.currentUser)
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
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
