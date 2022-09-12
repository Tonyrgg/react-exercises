import React from "react";
import { Container } from "./Container";
import { Message } from "./Message";


export class App extends React.Component {
    render() {
        return (
            <div>
                <Container title="titolo">
                    <Message />
                </Container>
            </div>
        )
    }
}