import React from "react";
import { ClickTracker } from "./ClickTracker";
import { Counter } from "./Counter";


export class App extends React.Component {
    render() {
        return (
            <div>
                <ClickTracker />
                <Counter />
            </div>
        )
    }
}