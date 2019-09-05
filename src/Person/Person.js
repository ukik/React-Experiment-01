import './Person.css'

// functional component
// stateless
import React from 'react'

const Person = (props) => {
  return (
      <div className="Person">
        <p onClick={props.click}>I'am a {props.name} and I am {props.age} years old!</p>
        <p>{props.children}</p>
        {/* event handler of data binding */}
        <input type="text" onChange={props.changed} defaultValue={props.name}/>
      </div>
  )
}

export default Person

// class component
// statefull
/*
import React, { Component } from 'react'

export default class Person extends Component {
    render() {
        return (
            <div className="Person">
                <p onClick={this.props.click}>I'am a {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} defaultValue={this.props.name}/>
            </div>
        )
    }
}
*/