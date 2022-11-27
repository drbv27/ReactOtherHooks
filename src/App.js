import React from 'react';
import UsoHookState from './components/usoHookState'
import CambiarTitulo from './components/CambiarTitulo'

// let isLogoedIn = true;




function App() {
    return (
        <React.Fragment >
            <UsoHookState/>
            <hr />
            <CambiarTitulo/>
        </React.Fragment >
    )
}

export default App;