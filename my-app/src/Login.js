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

    onLogin = () => {
    console.log(this.state.name, this.state.password, this.state.remember);
    }

    resetAll = () => {
        this.setState({
            name: '',
            password: '',
            remember: false,
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
                    {this.state.name && this.state.password ? <button onClick={this.onLogin}>Login</button> : <button disabled>Login</button>}
                    <button onClick={this.resetAll}>Reset</button> 
                </div>
        )
    }
}