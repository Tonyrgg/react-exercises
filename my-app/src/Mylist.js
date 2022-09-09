import React from "react";

export class Colors extends React.Component {

    render() {
        const colors = this.props.colori.map(color => <li>{color}</li>)

        return (
            <div>
                <ul>{colors}</ul>
            </div>
        )
    }
}