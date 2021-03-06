import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Maniek', age: 26},
      {name: 'Maciek', age: 25},
     ], 
    
    showPerson: false,
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

  togglePersonHandler =() => {
    const showed = this.state.showPerson;
    this.setState({
      showPerson: !showed
    });
  }

  render(){
    const styles = {
      backgroundColor: 'white',
      font: 'inherit',
      border:'1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }; 

    return (
      <div className="App">
       <h1>Hi, I'm a React App</h1>
       <button style={styles} onClick={this.togglePersonHandler}>Switch Name</button>
       {
         this.state.showPerson ? 
          <div >
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
            <Person name={this.state.persons[1].name} changed={this.nameChangeHandler} age={this.state.persons[1].age}>My hobbies: racing</Person>
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        </div> : null
       }
      </div>
    );

  }
}

export default App;
 