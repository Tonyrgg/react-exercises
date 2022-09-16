import { useForm } from "./UseForm";

export function Form() {
    const {username, password, handleChange} = useForm()

    function onLogin() {
        console.log(username, password);
    }

    return (
        <>
            <input type="text" onChange={handleChange} name="username" value={username}/>
            <input type="password" onChange={handleChange} name="password" value={password}/>
            <button onClick={onLogin}>Login</button>
        </>
    )
}