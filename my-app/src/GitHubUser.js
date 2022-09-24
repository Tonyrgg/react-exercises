import { useGitHubUser } from "./useGitHubUser";


export function GitHubUser({username}) {

    const { utente, feccialo } = useGitHubUser(username)


    return (
    <div>
            <button onClick={feccialo}>Fetch</button>
            <h1>{utente.login}</h1>
            <h1>{utente.bio}</h1>
        </div> )
}