import React from "react";

export function Sum(props) {
    return (
        <h1>{(props.numbers.reduce((prev, next)=> prev + next))}</h1>
    )
}