import { useState, useEffect } from "react";


export function useGitHubUser(proto) {
    const [utente, setData] = useState(proto)

        useEffect(() => {
            (async () => {
                const result = await fetch(`https://api.github.com/users/${proto}`)
                const dati = await result.json()
                setData(dati)
            })()}, [proto]);
    
    return {
        utente: utente
    }
}

