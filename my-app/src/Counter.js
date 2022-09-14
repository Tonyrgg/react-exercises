import React, { useState } from "react";

export function Counter({initialValue, increment}) {
    const [counter, setCounter] = useState(initialValue)

    function CounterIt() {
        setCounter(counter => counter + increment)
    }

    return( 
        <div>
            <h2>Counter: {counter}</h2>
            <button onClick={CounterIt}>ADD</button>
        </div>
    )
}
