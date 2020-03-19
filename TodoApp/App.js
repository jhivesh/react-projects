import React, { Component } from 'react';
import Todo from "./ToDo";
import "./App.css"
class App extends Component {
  state = {
    todos: [
      { id: 1, task: "Play games and fuck nigga", }, { id: 2, task: "Learn React" }
    ]
  }
  render() {
    
    return (
      <div className="container">
          <h1 className="jumbotron purple-text"> Todo's </h1>
          <p class="lead"></p>
          <Todo todo={this.state.todos} />
        
      </div>

    )
  }
}
export default App; 