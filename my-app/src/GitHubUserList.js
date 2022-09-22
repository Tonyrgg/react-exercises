import { useState } from "react"
import { GitHubUser } from "./GitHubUser"
import { Link } from "react-router-dom"

export function GitHubUserList({ lista }) {

    const [utenti, setUtenti] = useState(lista)
    
    function handleSubmit(event) {
        event.preventDefault()
        
        setUtenti( people => ([
            ...people, event.target.elements.username.value
        ]))
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input name="username"/>
                <button type="submit">Aggiungi utente</button>
                <ul>{utenti.map(item => <Link to={item}>Go {item}</Link>)}</ul>
            </form>
        </div>
    )
}