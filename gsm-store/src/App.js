import './App.css';
import React, { Component } from 'react'
import NavBar from "./Components/Auth/Navbar";
import {Switch,Route} from "react-router-dom";
import Product from "./Components/Product";
import Cart from "./Components/Cart";
import Details from "./Components/Details"
import Default from "./Components/Default";
import ProductList from "./Components/ProductList";


class App extends Component {
  render() {
    return (
      <div className="app container">
        <Switch>
          <Route exact path="/" component={ProductList}></Route>
          <Route exact path="/product" component={Product}></Route>
          <Route exact path="/mycart" component={Cart}></Route>
          <Route exact path="/details" component={Details}></Route>
          <Route  component={Default}></Route>
        </Switch>
        
        

      </div>
    )
  }
}

export default App;