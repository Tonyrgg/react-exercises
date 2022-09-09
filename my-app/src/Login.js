import React from "react";

export class UncontrolledLogin extends React.Component {
    loginfn = (event) => {
        event.preventDefault()

        const username = event.target.elements.username.value
        const password = event.target.elements.password.value
        const remember = event.target.elements.remember.checked

        console.log(username, password,remember);
    }

    render() {
        return(
            <div>
        <form onSubmit={this.loginfn}>

            <input name="username" autoFocus />
            <input name="password" />
            <input name="remember" type="checkbox" />

            <button type="submit">login</button>
        </form>
            </div>
        )
    }
}

// export class Login extends React.Component {
// state = {
//     name: '',
//     password: '',
//     remember: false,
// }

//     changeinput = (event) =>  {
//         const valore = event.target.value
//         const name = event.target.name
//         const type = event.target.type
//         const checked = event.target.checked
        
//         this.setState({
//             [name]: type === "checkbox" ? checked : valore,

//         })
//     }

//     onLogin = () => {
//     console.log(this.state.name, this.state.password, this.state.remember);
//     }

//     render() {
//         return (
//                 <div>
//                     <input
//                         name="name"
//                         value={this.state.name}
//                         onChange={this.changeinput}
//                     />
//                     <input 
//                         name="password"
//                         type="password"
//                         value={this.state.password}
//                         onChange={this.changeinput}
//                     />
//                     <input 
//                         name="remember"
//                         type="checkbox"
//                         checked={this.state.remember}
//                         onChange={this.changeinput}
//                     />
//                     {this.state.name && this.state.password ? <button onClick={this.onLogin}>Login</button> : <button disabled>Login</button>} 
//                 </div>
//         )
//     }
// }