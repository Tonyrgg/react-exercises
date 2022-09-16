import React from "react";

export function Sum(props) {

    let numero = 0
    props.numbers.map((prev)=> numero += prev)

    return (
        <h1>{numero}</h1>
    )
}