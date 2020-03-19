import React, { Component } from 'react';
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";

//================================================//

class App extends Component {
  render() {
    const num = [1, 2, 3, 4, 5];
    const double = num.map((number) => number * 2)
    console.log(double)
    return (
      

      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <p> {double}</p>
        </div>
      </BrowserRouter>
  
    )
  }
}

//==================================================//
export default App;