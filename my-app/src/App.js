import React from "react";
import { Container } from "./Container";
import { Message } from "./Message";
import { Todolist } from "./Todolist";


export class App extends React.Component {
    render() {
        return (
            <div>
                <Container title="titolo">
                    <Message />
                </Container>
                <Todolist
                render= {() => {

                    return (
                        this.state.items.map(testo => <div><li>{testo}</li> <button onClick={() => this.removeli(testo)}>Remove</button></div>)
                    )
                }}
                ></Todolist>
            </div>
        )
    }
}