import React from "react";

export class Welcome extends React.Component {
    render() {
        return (
            <div>
                <p>Hello, {this.props.name}</p>
                <Age age={this.props.age}/>
            </div>
        )
    }
}

export class Age extends React.Component {
    render() {
        return <p>Your age is {this.props.age}</p>
    }
}