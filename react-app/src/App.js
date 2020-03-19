import React, { Component } from 'react';
import Ninjas from "./ninjas";
import './App.css';
import Addninja from "./AddNinja";
//=========================================//
class App extends Component {
  state={
    ninjas:[
        {name:'John',age:30,belt:'black',id:1},
        {name:"yon",age:25,belt:'green',id:2},
        {name:"Crystal",age:25,belt:'white',id:3}

    ]
}// new object TO ADD IN STATE
addNinja = (ninja) =>{
  ninja.id = Math.random();
  //SPREAd operator 
  let ninj= [...this.state.ninjas, ninja] //copy of 
  this.setState({
      ninjas : ninj
    })
}
deleteNinja = (id) => {
  // filter is not disruptive, create an new array based on the condition.
  // this will array contain non deleted id// element
  let  ninjas = this.state.ninjas.filter(ninja => {
    return ninja.id !== id
  });
  this.setState({
    ninjas: ninjas
  })
}
//==========================================//
componentDidMount(){
 console.log("Component mounted !")
}
//==========================================//
componentDidUpdate(prevProps,prevState){
  console.log("Component updated ");
  console.log(prevProps, prevState);
}
//==========================================//
  render() {
    //=============================================/
    const { ninjas } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {/* To get started, edit <code>src/App.js</code> and save to reload. <br></br>
          <code>this.state </code> */}
           Ninjas 
        </p>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />

        <Addninja addNinja={this.addNinja}></Addninja>
      </div>
    );
  }
  //=================================================//
}

export default App;
