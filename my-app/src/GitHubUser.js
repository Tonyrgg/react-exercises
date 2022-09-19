import { useGitHubUser } from "./useGitHubUser";


export function GitHubUser({user}) {

    const { utente, loading, errore, FetchThis } = useGitHubUser(user)

    function handleGetData() {
        FetchThis(user)
    }

    return (
        <div>
            <button onClick={handleGetData}>Load data</button>
            {loading && <h1>Loading...</h1>}
            {errore && <h1>C'è un errore</h1>}
            {utente && <div><h1>{utente.login}</h1><p>{utente.bio}</p></div>}
        </div>
    )
}