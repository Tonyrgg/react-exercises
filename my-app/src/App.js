import { Route, Routes } from "react-router-dom"
import { Clock } from "./Clock";
import { GitHubUser } from "./GitHubUser";
import { Counter } from "./Counter";
import { Welcome } from "./welcome";


export function App() {
        return (
            <Routes>
                <Route path="/" element={<Clock/>} />
                <Route path="/:username" element={<GitHubUser username={"Tonyrgg"}/>}/>
                <Route path="counter" element={<Counter />} />
                <Route path="welcome" element={<Welcome />} />
            </Routes>
        )
}