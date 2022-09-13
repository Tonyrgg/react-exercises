import React from "react";


export class DisplayLanguage extends React.Component {

    render() {
        return (
            <div>
                <select value={this.state.language} onChange={this.cambioLingua}>
                    <option value="en">English</option>
                    <option value="it">Italiano</option>
                </select>
            </div>
        )}
}

// Creare un LanguageContext e racchiudere un componente DisplayLanguage all'interno del relativo provider. 
// Aggiungi un tag select al componente contenente il componente DisplayLanguage che consente all'utente di 
// selezionare la lingua e passalo come valore al Provider.
