import React from 'react';
import logo from './logo.svg';
import './App.scss';
import NavBar from './component/NavBar';
import ProductList from './component/ProductList';
import Product from './component/Product';
import Cart from './component/Cart';
import Default from './component/Default';
import {Route, Switch} from 'react-router-dom';

class App extends React.Component {
  render() {
    return(
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/product/:id" component={Product} />
          <Route path="/cart/" component={Cart} />
          <Route component={Default} />
        </Switch>
      </React.Fragment>
    )
  }
}
export default App;
