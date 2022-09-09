import React from "react";

// export class Colors extends React.Component {

//     render() {
//         const colors = this.props.colori.map(color => <li key={color.id}>Nome: {color.name}, {color.color}</li>)

//         return (
//             <div>
//                 <ul>{colors}</ul>
//             </div>
//         )
//     }
// }

export class Todolist extends React.Component {
    state = {
        items: [],
    }

    addString = (event) => {
        event.preventDefault()

        const stringa = event.target.elements.string.value

        this.setState({
            items: [...this.state.items, stringa],
        })

    }

    render() {
        return(
            <div>
                <form onSubmit={this.addString}>
                <input name="string" />
                <button type="submit">Add</button>
                </form>
                <ul>{this.state.items.map(testo => <li>{testo}</li>)}</ul>
            </div>
        )
    }
}