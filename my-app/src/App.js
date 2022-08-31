import React from "react";
import { Clock } from "./Clock"
import { Counter } from "./Counter";
import { Welcome } from "./welcome";

export class App extends React.Component {
    render() {
        return (
            <div>
                <Welcome name="John" age="25"/>
                <Clock />
                <Counter />
            </div>
        )
    }
}