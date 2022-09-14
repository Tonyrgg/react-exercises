import React, { useState } from "react";

export function Todolist() {

    const [list, setList] = useState([])

    function addString(event) {
        event.preventDefault()  

        const stringa = event.target.elements.string.value

        setList(data => ([
            ...data, stringa
        ]))

        event.target.elements.string.value = ''
    }

    return (
        <div>
            <form onSubmit={addString}>
            <input name="string" />
            <button type="submit">Add</button>
            </form>
            <ul>{list.map((testo, index) => <li key={testo + index}>{testo}</li>)}</ul>
        </div>
    )
}

// export class Todolist extends React.Component {
//     state = {
//         items: [],
//     }

//     addString = (event) => {
//         event.preventDefault()

//         const stringa = event.target.elements.string.value

//         this.setState({
//             items: [...this.state.items, stringa],
//         })

//     }

//     render() {
//         return(
//             <div>
//                 <form onSubmit={this.addString}>
//                 <input name="string" />
//                 <button type="submit">Add</button>
//                 </form>
//                 <ul>{this.state.items.map(testo => <li>{testo}</li>)}</ul>
//             </div>
//         )
//     }
// }