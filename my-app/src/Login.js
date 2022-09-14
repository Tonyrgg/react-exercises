import React, { useState } from "react";

export function Login() {
    const [data, usedata] = useState({
        username: '',
        password: '',
        login: false
    })

    function changeInput(event) {
        const {name, value, type, checked} = event.target

        usedata(oldDati => ({
            ...oldDati, [name]: type === "checkbox" ? checked : value
        }))
    }

    function sendLogin() {
        console.log(data);
    }

    return(
        <div>
            <input onChange={changeInput} name="username" value={data.username}/>
            <input onChange={changeInput} name="password" value={data.password}/>
            <input onChange={changeInput} type="checkbox" checked={data.remember} name="login" />
            {data.username && data.password ? <button onClick={sendLogin}>Login</button> : <button disabled>Login</button>} 
        </div>
    )
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