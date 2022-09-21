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
            <h1>{data.name}</h1>
            { data.bio ? <p>{data.bio}</p> : "no bio" }
        </div>}
        <Link to="/counter">Go counter</Link>
        <Link to="/welcome">Go welcome</Link>
        <Link to="/">Go home</Link>
        </div>
}