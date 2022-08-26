import React from "react";
import { Welcome } from "./welcome";

export class App extends React.Component {
    render() {
        return (
            <div>
                <Welcome name={<b>Tony</b>} age="66"/>
            </div>
        )
    }
}