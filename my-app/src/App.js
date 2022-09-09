import React from "react";
import { Login, UncontrolledLogin } from "./Login";


export class App extends React.Component {
    render() {
        return (
            <div>
                <UncontrolledLogin />
            </div>
        )
    }
}