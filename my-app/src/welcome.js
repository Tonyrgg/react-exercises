import React from "react";
import { Link } from "react-router-dom"


export class Welcome extends React.Component {
    render() {
        return (
            <div>
                {this.props.name == "John"
                    ? <p>Hello, <b>{this.props.name}</b></p>
                    : false
                }
                <Age age={this.props.age}/>
            </div>
        )
    }
}

export class Age extends React.Component {
    render() {
        return (
            <div>
                {this.props.age >= 18 
                    ? <p>Your age is {this.props.age}</p>
                    : <p>You are very young!</p>
                }
                <Link to="/counter">Go counter</Link>
                <Link to="/">Go home</Link>
                <Link to="/githubuser:username">Go githubuser</Link>
            </div>
        )
    }
}