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

    render() {
        let stile = {
            backgroundColor: this.state.password.length < 8 ? "red" : "green" 
        }
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
                    {this.state.name && this.state.password ? <button style={stile} onClick={this.onLogin}>Login</button> : <button disabled>Login</button>} 
                </div>
        )
    }
}