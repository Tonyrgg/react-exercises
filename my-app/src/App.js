import { useState } from "react";
import { GitHubUser } from "./GitHubUser";
import { GitHubUserList } from "./GitHubUserList";


export function App() {
        return (
            <div>
                <GitHubUserList lista={['Tonyrgg', 'Riccardo1091','MarcoSpicuzza']}/>
            </div>
        )
}