import React, {Component} from 'react';
import './App.css';

import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <span>only 1 root element in component</span>
        <br/>
        <span>naming element attribute cannot same as built-in served word</span>

        <Person name="Joni" age="30"/>
        <Person name="Zero" age="25">My Hobbies: Slicing</Person>
        <Person name="Megaman" age="24"/>

      </div>
    );
    // return React.createElement('div', {className: 'App'},
    // React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;