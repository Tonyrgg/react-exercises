import { useEffect, useState } from "react";
import { Link } from "react-router-dom"



export function GitHubUser({username}) {
const [data, setdata] = useState(null)

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
        .then(response => {
            return response.json()
        })
        .then(json => {
            console.log(json);
            setdata(json)
        })
    }, [username]);

    return <div>{data && <div>
            <h1>{data.login}</h1>
            { data.bio ? <p>{data.bio}</p> : "no bio" }
        </div>}
        <Link to="/users">Back to users</Link> </div>
}