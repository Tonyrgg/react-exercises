import React from "react";

export function Sum({ numbers = [1, 2, 3, 4]}) {
    return (
        <h1>{(numbers.reduce((prev, next)=> prev + next))}</h1>
    )
}