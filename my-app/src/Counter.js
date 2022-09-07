import React from "react";

export class Counter extends React.Component {
    state = {
        count: this.props.initialValue
    }

    Increment = (a) => {
        this.setState({
                count: a
        })
    }

    render() {
        return (
            <div>
                <h3>Count: {this.state.count}</h3>
                <button onClick={() => this.Increment}>Increment1</button>
                <button onClick={() => this.Increment}>Increment2</button>
                <button onClick={() => this.Increment}>Increment3</button>
            </div>
            )
    }
}

Counter.defaultProps = {
    initialValue: 0,
    incrementBy: 1,
}

