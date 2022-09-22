import { Route, Routes, Outlet } from "react-router-dom"
import { GitHubUser } from "./GitHubUser";
import { GitHubUserList } from "./GitHubUserList";
import { ShowGithubUser } from "./ShowGitHubUser";



export function App() {
        return (
            <Routes>
                <Route path="/users" element={<div><GitHubUserList lista={['Tonyrgg', 'Riccardo1091','MarcoSpicuzza']}/><hr/><Outlet /></div>}>
                    <Route path=":username" element={<ShowGithubUser />} />
                </Route>
            </Routes>
        )
}


// Aggiungi una route al percorso degli utenti che mostra il componente GihubUserList da useEffect 04.
// Modificalo in modo che invece di mostrare il componente GithubUser per ogni nome utente immesso,
// mostri un collegamento a una route nidificata che mostra il componente ShowGithubUser. In tal modo,
// rimuovere la route /users/:username dal componente App e aggiungere una nuova route nidificata all'interno della route /users.