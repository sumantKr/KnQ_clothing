import './App.scss';
import { Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage/Homepage.component.jsx'
import ShopPage from './pages/shop/shop.component.jsx'

function App() {
  return (<div className="App">
    <Route  exact path='/' component={HomePage} />
    <Route  exact path='/shop' component={ShopPage} />
  </div>
  );
}
export default App;
