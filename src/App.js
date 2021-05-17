import './App.scss';
import { Route, Switch } from 'react-router-dom';
import { HomePage } from './pages/HomePage/Homepage.component.jsx'
import ShopPage from './pages/shop/shop.component.jsx'
import { Header } from './components/header/header.component.jsx'
import {signInAndSignUp} from './pages/signInAndSignUp/signInAndSignUp.component.jsx'
function App() {
  return (<div className="App">
    <Header />
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop' component={ShopPage} />
      <Route exact path='/signin' component={signInAndSignUp} />
    </Switch>
  </div>
  );
}
export default App;
