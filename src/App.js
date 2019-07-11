import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './component/NavBar';
import ProductList from './component/ProductList';
import Product from './component/Product';
import {Route, Switch} from 'react-router-dom';

class App extends React.Component {
  render() {
    return(
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/product/" component={Product} />
        </Switch>
      </React.Fragment>
    )
  }
}
export default App;
