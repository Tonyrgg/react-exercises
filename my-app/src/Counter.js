import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"


export function Counter({initialValue, increment}) {
    const [counter, setCounter] = useState(initialValue)

    useEffect(() => {        
        let rocco = setInterval(() => {
                        setCounter(counter => counter + increment)
                    }, 1000);

        return function cleanup() {
            clearInterval(rocco)
        }

    }, []);

    return( 
        <div>
            <h2>Counter: {counter}</h2>
            <Link to="/">Go home</Link>
            <Link to="/welcome">Go welcome</Link>
            <Link to="/githubuser:username">Go githubuser</Link>
        </div>
    )
}
