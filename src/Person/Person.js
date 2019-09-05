// functional component
// stateless
import React from 'react'

const Person = (props) => {
  return (
      <div>
        <p>I'am a {props.name} and I am {props.age} years old!</p>
        <p>{props.children}</p>
      </div>
  )
}

export default Person

/*
// class component
// statefull
import React, { Component } from 'react'

export default class Person extends Component {
    render() {
        return (
            <div>
                <p>I'am a {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
            </div>
        )
    }
}
*/