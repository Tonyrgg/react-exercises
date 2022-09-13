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

        let stringa = event.target.elements.string.value

        this.setState({
            items: [...this.state.items, stringa],
        })
        
        event.target.elements.string.value = ''
    }

    resetState = () => {
        this.setState({
            items: [],
        })
    }

    removeli = (item) => {
          this.setState(back => ({
              items: back.items.filter(elem => elem !== item)
          }))
    }

    render() {
        return(
            <div>
                <form onSubmit={this.addString}>
                <input name="string" />
                <button type="submit">Add</button>
                </form>
                <ul>{this.props.render(this.state.items, this.removeli)}</ul>
                <button onClick={this.resetState}>Reset</button>
            </div>
        )
    }
}

// Modificare il componente TodoList in modo che, invece di eseguire il rendering dell'array items all'interno del tag ul,
// chiami la funzione passata al suo render prop, passandogli l'array items come parametro, così come la funzione richiesta per eliminare l'elemento.
// Passa un prop di rendering al componente TodoList per eseguire correttamente il rendering e interagire con l'array di elementi.
