import React from "react";

export class ClickTracker extends React.Component {
    state = {
        target: '',
    }

    HandleTracker = (event) => {
        this.setState({
            target: event.target.innerText
        })
    }

    render() {
        return (
            <div>
                <h1>target: {this.state.target}</h1>
                <button onClick={this.HandleTracker}>Bottone 1</button>
                <button onClick={this.HandleTracker}>Bottone 2</button>
                <button onClick={this.HandleTracker}>Bottone 3</button>
            </div>
            )
    }
}