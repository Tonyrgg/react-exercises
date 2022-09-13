import React from "react";

// export class Welcome extends React.Component {
//     render() {
//         return (
//             <div>
//                 {this.props.name == "John"
//                     ? <p>Hello, <b>{this.props.name}</b></p>
//                     : false
//                 }
//                 <Age age={this.props.age}/>
//             </div>
//         )
//     }
// }

// export class Age extends React.Component {
//     render() {
//         return (
//             <div>
//                 {this.props.age >= 18 
//                     ? <p>Your age is {this.props.age}</p>
//                     : <p>You are very young!</p>
//                 }
//             </div>
//         )
//     }
// }

export function Welcome(props) {
    return(
        <div>
            <h1>Hello, {props.name}</h1>
        </div>
    )
}