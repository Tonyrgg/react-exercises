import React, { useEffect, useState } from "react";

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
        </div>
    )
}
