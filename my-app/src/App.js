import React from "react";
import { Container } from "./Container";
import { DisplayLanguage } from "./DisplayLanguage";
import { LanguageContext } from "./LanguageContext";
import { Welcome } from "./welcome";
import { Sum } from "./Sum";



export class App extends React.Component {

    render() {
        return (
            <div>
                <Sum numbers={[2, 5, 8, 10]} />
            </div>
        )
    }
}