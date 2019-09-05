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

  const switchNameHandler = (newValue) => {
    console.log('Was clicked!');

    // DON'T DO THIS: this.state.persons[0].name = "Tony";
    // dilarang langsung merubah state

    // SOLUSI
    // replace state menggunakan setters
    setPersonState({
      persons: [
        {
          name: newValue,
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

  // two-way data binding
  const nameChangedHandler = (event) => {
    setPersonState({
      persons: [
        {
          name: 'Udin',
          age: 30
        }, {
          name: event.target.value, // data binding from Person component
          age: 42
        }, {
          name: "Angel",
          age: 34
        }
      ],      
    })
  }

  // inline-style
  // agak sulit karena ini menggunakan js syntax 
  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
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
            ... onClick={() => this.switchNameHandler()} ...
          - hipotesis: berlaku juga di vue/angular
        */}

        {/* 
          Info! Non Argument
          ... onClick={this.switchNameHandler} ...
          digunakan pada non var/const function

          ... onClick={switchNameHandler} ...
          digunakan pada var/const function      
          
          Info! With Argument
          ... onClick={this.switchNameHandler.bind(this, arg)} ...
          digunakan pada non var/const function

          ... onClick={() => switchNameHandler(arg)} ...
          digunakan pada var/const function      
          
        */}

        <button 
          style={style}
          onClick={switchNameHandler.bind(this, "Hurricane")}>Switch Name Option 1</button>

        {/* not call immediately */}
        <button 
          style={style}
          onClick={() => switchNameHandler('Thunderbolt')}>Switch Name Option 2</button>

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
        <Person 
          name={personState.persons[0].name} 
          age={personState.persons[0].age}/>
        <Person 
          name={personState.persons[1].name} 
          age={personState.persons[1].age}
          click={switchNameHandler.bind(this, "Super Nova")}
          changed={nameChangedHandler}>My Hobbies: Slicing</Person>
        <Person 
          name={personState.persons[2].name} 
          age={personState.persons[2].age}/>

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

  switchNameHandler = (newValue) => {
    console.log('Was clicked!');

    // DON'T DO THIS: this.state.persons[0].name = "Tony"; dilarang langsung merubah
    // state

    this.setState({
      persons: [
        {
          name: newValue,
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

  // two-way data binding
  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {
          name: 'Udin',
          age: 30
        }, {
          name: event.target.value, // data binding from Person component
          age: 42
        }, {
          name: "Angel",
          age: 34
        }
      ],      
    })
  }  

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    }
  
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>

        <button 
          style={style}
          onClick={this.switchNameHandler.bind(this, "Hurricane")}>Switch Name Option 1</button>

        <button 
          style={style}
          onClick={() => this.switchNameHandler('Thunderbolt')}>Switch Name Option 2</button>

        <p>
          <span>only 1 root element in component</span>
          <br/>
          <span>naming element attribute cannot same as built-in served word</span>
        </p>

        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Super Nova")}
          changed={this.nameChangedHandler}>My Hobbies: Slicing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>

      </div>
    );
  }
}
*/