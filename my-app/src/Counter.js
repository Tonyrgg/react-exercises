import React, { useEffect, useState } from "react";

export function Counter({initialValue, increment}) {
    const [counter, setCounter] = useState(initialValue)

    function CounterIt() {
        setCounter(asd => asd + increment)
    }

    useEffect(() => {
        console.log(`Il counter è: ${counter}` );
    }, [counter]);

    return( 
        <div>
            <h2>Counter: {counter}</h2>
            <button onClick={CounterIt}>ADD</button>
        </div>
    )
}
