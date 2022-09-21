import React from "react";
import { Link } from "react-router-dom"

export class Clock extends React.Component {
    state = {
        date: new Date()
    }

    constructor(props) {
        super(props)

        setInterval(() => {
            this.setState({
                date: new Date()
            })
        }, 1000)
    }

    render() {
        return <div>{this.state.date.toLocaleTimeString()}
        <Link to="/counter">Go counter</Link>
        <Link to="/welcome">Go welcome</Link>
        <Link to="/githubuser:username">Go githubuser</Link>
        </div>
    }
}