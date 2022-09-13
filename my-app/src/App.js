import React from "react";
import { Container } from "./Container";
import { DisplayLanguage } from "./DisplayLanguage";
import { LanguageContext } from "./LanguageContext";



export class App extends React.Component {

    state = {
        language: "en"
    }

    cambioLingua = (event) => {
        this.setState({
            language: event.target.value
        })
    }

    render() {
        return (
            <div>
                <LanguageContext.Provider value="">
                    <Container title="titolo">
                        <DisplayLanguage />
                    </Container>
                </LanguageContext.Provider>
            </div>
        )
    }
}