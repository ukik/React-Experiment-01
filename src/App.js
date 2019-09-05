import React, {Component} from 'react';
import './App.css';

import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {
        name: "Joni",
        age: 28
      }, {
        name: "Zero",
        age: 25
      }, {
        name: "Megaman",
        age: 26
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <span>only 1 root element in component</span>
        <br/>
        <span>naming element attribute cannot same as built-in served word</span>

        {/* manually, inline */}
        {/*
          <Person name="Joni" age="30"/>
          <Person name="Zero" age="25">My Hobbies: Slicing</Person>
          <Person name="Megaman" age="24"/>
        */}

        {/* dynamically, use state */}
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[0].age}>My Hobbies: Slicing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[0].age}/>
       
      </div>
    );
  }
}

export default App;