/* -------------       Function Component       --------------*/

// import React from 'react'
// import './Header.css'

// export const Header = () => {
//   return (
//     <nav>
//         <span>Home</span>
//     </nav>
//   )
// }








/* -------------       Class Component       --------------*/
import React, { Component } from 'react'
import './Header.css'

export class Header extends Component {
  render() {
    return (
      <nav>
        <span>Home</span>
      </nav>
    )
  }
}

export default Header

