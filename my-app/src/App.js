import React from "react";
import { Login, UncontrolledLogin } from "./Login";
import { Colors } from "./Mylist";


export class App extends React.Component {
    render() {
        return (
            <div>
                <UncontrolledLogin />
                <Colors colori={["Rosso", "Verde", "Giallo"]}/>
            </div>
        )
    }
}