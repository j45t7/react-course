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
  nameChangeHandler = (e) => {
    // console.log('was clicked');
    // DONT'T DO THIS this.state.persons[0].name = "Maniek";
    this.setState({persons: [
      {name: 'Mami', age: 20},
      {name: e.target.value, age: 26},
      {name: 'Maciek', age: 25},
    ]})
  }

  render(){
    return (
      <div className="App">
       <h1>Hi, I'm a React App</h1>
       <button onClick={this.switchNameHandler}>Switch Name</button>
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
       <Person name={this.state.persons[1].name} changed={this.nameChangeHandler} age={this.state.persons[1].age}>My hobbies: racing</Person>
       <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );

  }
}

export default App;
 