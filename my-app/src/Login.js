import React from "react";

export class Login extends React.Component {
state = {
    name: '',
    password: '',
    remember: false,
}

    changeinput = (event) =>  {
        const valore = event.target.value
        const name = event.target.name
        const type = event.target.type
        const checked = event.target.checked
        
        this.setState({
            [name]: type === "checkbox" ? checked : valore,
        })
    }

    render() {
        return (
                <div>
                    <input
                        name="name"
                        value={this.state.name}
                        onChange={this.changeinput}
                    />
                    <input 
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.changeinput}
                    />
                    <input 
                        name="remember"
                        type="checkbox"
                        checked={this.state.remember}
                        onChange={this.changeinput}
                    />
                </div>
        )
    }
}