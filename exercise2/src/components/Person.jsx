import React from 'react'

// export const Person = (props) => {
//   return (
//     <span>Your name is {props.name}, your surname is {props.surname} and your age is {props.age}</span>
//   )
// }

export class Person extends React.Component {
  render() {
    return (
        <span>Your name is {this.props.name}, your surname is {this.props.surname} and your age is {this.props.age}</span>
    )
  }
}
