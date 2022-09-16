import { useState } from "react";


export function useForm(a = {
    username: '', password: ''
}) {
    const [data, setData] = useState(a)

    function handleChange(e) {
        setData(data =>({
            ...data, [e.target.name]: [e.target.value]
        }))
    }

    return {
        username: data.username,
        password: data.password,   
        handleChange
    }
}