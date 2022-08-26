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
        return (
            <div>
                {this.props.age >= 18 && this.props.age <= 65
                    ? <p>Your age is {this.props.age}</p>
                    : false
                }
            </div>
        )
    }
}