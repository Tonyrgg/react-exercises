import React from "react";
import { Container } from "./Container";
import { DisplayLanguage } from "./DisplayLanguage";
import { LanguageContext } from "./LanguageContext";
import { Welcome } from "./welcome";



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
                <Welcome name="Piero"/>
            </div>
        )
    }
}