import React, { useEffect, useState } from 'react'

function CambiarTitulo() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `Has dado click ${count} veces`
    }
    )

    return (
        <div>
            <div>
                <p> Has dado click {count} veces </p>
                <button onClick={() => setCount(count + 1)}> Dame click </button>
            </div>
        </div>
    )
}

export default CambiarTitulo