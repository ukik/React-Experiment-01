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

  switchNameHandler = () => {
    console.log('Was clicked!');
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>

        {/* 
          Important!
          - jangan melakukan: 
            ... onClick={this.switchNameHandler()} ...
            karena method Handler akan dipanggil segera setelah DOM selesai di render 
            # kecuali memang kita membutuhkan method Handler tersebut digunakan segera
            # tidak cocok untuk method Handler
            # cocok untuk method init data
          - solusinya:
            ... onClick={this.switchNameHandler} ...
          - hipotesis: berlaku juga di vue/angular
        */}
        <button onClick={this.switchNameHandler}>Switch Name</button>

        <p>
          <span>only 1 root element in component</span>
          <br/>
          <span>naming element attribute cannot same as built-in served word</span>
        </p>

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