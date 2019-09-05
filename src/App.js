// Functional Component
import React, {useState} from 'react';
import './App.css';

import Person from './Person/Person'

/*
// class component
// hanya bisa state biasa
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
  ...
*/

// functional component bisa state or useState()
const app = (props) => {

  // Important!
  // useState() bisa digunakan berulang kali
  // useState() bisa berisi: object, string, number, etc

  const [
    personState, // sebagai getters dari persons: []
    setPersonState, // sebagai setters dari persons: []
  ] = useState({
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
    ],

    otherState: "some other value, aku hanyalah data untuk memastikan setPersonState tidak mengupdate aku"
  });

  const [otherState, setOtherState] = useState("some other useState")

  console.log(personState, otherState);

  const switchNameHandler = () => {
    console.log('Was clicked!');

    // DON'T DO THIS: this.state.persons[0].name = "Tony";
    // dilarang langsung merubah state

    // SOLUSI
    // replace state menggunakan setters
    setPersonState({
      persons: [
        {
          name: "Tiara",
          age: 26
        }, {
          name: "Iris",
          age: 22
        }, {
          name: "Angel",
          age: 24
        }
      ],
      // contoh ikut melampirkan otherState
      otherState: personState.otherState
    });
    
    setOtherState("update other useState")
  }

  /*
  Important!
    ...  
    render() {
      return (
        <DOM>
      )
    }
    ...
    digunakan pada class component
  */

  // render() {

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

        {/* 
          Info!
          ... onClick={this.switchNameHandler()} ...
          digunakan pada non var/const function

          ... onClick={this.switchNameHandler()} ...
          digunakan pada var/const function
        */}

        <button onClick={switchNameHandler}>Switch Name</button>

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
        <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
        <Person name={personState.persons[1].name} age={personState.persons[1].age}>My Hobbies: Slicing</Person>
        <Person name={personState.persons[2].name} age={personState.persons[2].age}/>

      </div>
    );

  // }
}

export default app;

/*
// Class Component
import React, {Component} from 'react'
import './App.css';
import Person from './Person/Person'

export default class App extends Component {
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
    ],
    otherState: "some other value, aku hanyalah data untuk memastikan setPersonState tidak mengup" +
        "date aku"
  };

  switchNameHandler = () => {
    console.log('Was clicked!');

    // DON'T DO THIS: this.state.persons[0].name = "Tony"; dilarang langsung merubah
    // state

    this.setState({
      persons: [
        {
          name: "Tiara",
          age: 26
        }, {
          name: "Iris",
          age: 22
        }, {
          name: "Angel",
          age: 24
        }
      ]

    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>

        <button onClick={this.switchNameHandler}>Switch Name</button>

        <p>
          <span>only 1 root element in component</span>
          <br/>
          <span>naming element attribute cannot same as built-in served word</span>
        </p>

        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Slicing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>

      </div>
    );
  }
}
*/