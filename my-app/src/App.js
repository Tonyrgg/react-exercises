import { useState } from "react";
import { GitHubUser } from "./GitHubUser";


export function App() {
    const [user, setUser] = useState('')
    
        return (
            <div>
                <input value={user} onChange={(e) => setUser(e.target.value)} />
                <GitHubUser user={user} />
            </div>
        )
}