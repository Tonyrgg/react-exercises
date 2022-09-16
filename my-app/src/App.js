import { useState } from "react";
import { Counter } from "./Counter";


export function App() {

    const [stato, cambiastato] = useState(true)

    function ginostato() {
        cambiastato(
            interruttore => !interruttore 
        ) 
    }

        return (
            <div>
                {stato && <Counter initialValue={16} increment={3}/>}
                <button onClick={ginostato}>ON/OFF</button>
            </div>
        )
}