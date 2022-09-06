import React from "react";
import { ClickCounter } from "./ClickCounter";

export class Counter extends React.Component {
    state = {
        count: this.props.initialValue
    }

    Increment = () => {
        this.setState(state => {
            return {
                count: state.count + this.props.incrementBy
            }
        })
    }

    render() {
        return (
            <div>
                <h3>Count: {this.state.count}</h3>
                <button onClick={this.Increment}>Increment</button>
            </div>
            )
    }
}

Counter.defaultProps = {
    initialValue: 0,
    incrementBy: 1,
}

