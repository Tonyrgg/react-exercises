import { useState, useEffect } from "react";


export function useGitHubUser(proto) {
    const [utente, setData] = useState(proto)
    const [loading, setLoading] = useState(false)
    const [errore, setError] = useState(null)

    async function fetchUser(proto) {
        setLoading(true)
        setError(null)

        try {
            const response = await fetch(`https://api.github.com/users/${proto}`)
            const json = await response.json()

            if (response.status !== 200) {
                setError(new Error())
            }

            setData(json)
        } catch (errore) {
            setError(errore)
            setData(null)
        } finally {
            setLoading(false)
        }
    }

    return { utente, loading, errore, FetchThis: fetchUser }
}

