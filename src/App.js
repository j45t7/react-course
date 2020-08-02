import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Maniek', age: 26},
      {name: 'Maciek', age: 25},

    ]
  }

  switchNameHandler = () => {
    console.log('was clicked');
  }

  render(){
    return (
      <div className="App">
       <h1>Hi, I'm a React App</h1>
       <button onClick={this.switchNameHandler}>Switch Name</button>
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
       <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: racing</Person>
       <Person ame={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );

  }
}

export default App;
 