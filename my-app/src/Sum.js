import React from "react";

export function Sum({ numbers = [1, 2, 3, 4]}) {
    
    let numero=0

    numbers.map((prev)=> numero += prev)

    return (
        <h1>{numero}</h1>
    )
}