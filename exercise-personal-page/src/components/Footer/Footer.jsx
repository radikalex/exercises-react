/* -------------       Function Component       --------------*/

// import React from 'react'
// import './Footer.css'

// const Footer = () => {
//   return (
//     <footer>
//         <div className="contenedor-copyright">
//             <span className="copyright">Todos los derechos reservados por Alex Jimenez.</span><span className="copyright"> Copyright © 2022</span>
//         </div>
//     </footer>
//   )
// }

// export default Footer






/* -------------       Class Component       --------------*/
import React, { Component } from 'react'
import './Footer.css'

export class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="contenedor-copyright">
            <span className="copyright">Todos los derechos reservados por Alex Jimenez.</span><span className="copyright"> Copyright © 2022</span>
        </div>
      </footer>
    )
  }
}

export default Footer