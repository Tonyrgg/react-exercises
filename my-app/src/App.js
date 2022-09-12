import React from "react";
import { Login, UncontrolledLogin } from "./Login";
import { Todolist } from "./Mylist";
import { Welcome } from "./welcome";

const supercolori = [
    {name: "red", id: 1, color:"rosso"},
    {name: "green", id: 2, color: "verde"},
    {name: "yellow", id: 3, color: "giallo"},
]

export class App extends React.Component {
    render() {
        return (
            <div>
                <Welcome name="John" />
            </div>
        )
    }
}