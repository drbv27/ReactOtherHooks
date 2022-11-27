import React, { useState } from 'react';
import './css/usoHookState.css'

/* Uso de estado por medio de hooks */
function Contador(props) {
    const [count, setCount] = useState(0)
    const [clase, setClase] = useState('')
    return (
        <div>
            <p className={clase}> Has dado click {count} veces </p>
            <button onClick={() => setCount(count + 1)}> Dame click </button>
            <button onClick={ () => setClase('p-red') }> Cambiar color de parrafo</button>
        </div>
    )
}

/* Uso de estado por medio de clases */


// class Contador extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             count: 0
//         }
//     }

//     handleClick = () => {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }
        

//     render() {
//         return (
//             <div>
//                 <p> Has dado click {this.state.count} veces </p>
//                 <button onClick={this.handleClick} > Dame click!</button>
//             </div>
//         )
//     }
// }

export default Contador