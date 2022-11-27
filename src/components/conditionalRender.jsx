import React, { Component } from 'react'

/* Componente con funciones */

function ConditionalRender(props) {
        const isLogoedIn = props.isLogoedIn
    if(isLogoedIn) {
        return (
            <p>Bienvenido Usuario</p>
        )
    }
    return (
        <a href="/login">Iniciar sesion</a>
    )
}

/* Mismo componente con clases */


// class ConditionalRender extends Component {

//     render() {
//         if (this.props.isLogoedIn) {
//             return (
//                 <p>Bienvenido Usuario</p>
//             )
//         }
//         return (
//             <a href="/login">Iniciar sesion</a>
//         )
//     }
// }

export default ConditionalRender