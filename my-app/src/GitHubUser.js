import { useGitHubUser } from "./useGitHubUser";


export function GitHubUser({user}) {

    const { utente } = useGitHubUser(user)

    return <div>{utente.login && <div>
            <h1>{utente.login}</h1>
            { utente.bio ? <p>{utente.bio}</p> : "no bio" }
        </div>}</div>
}