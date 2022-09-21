import { Route, Routes } from "react-router-dom"
import { GitHubUser } from "./GitHubUser";


export function App() {
        return (
            <Routes>
                <Route path="/:username" element={<GitHubUser username={"Tonyrgg"}/>}/>
            </Routes>
        )
}