import React from "react";
import { Counter } from "./Counter";


export class App extends React.Component {
    render() {
        return (
            <div>
                <Counter start={16} increment={3} interval={100}/>
            </div>
        )
    }
}