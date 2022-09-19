import React, { useMemo } from "react";


export function Filteredlist ({lista}) {

function filtralista(lista) {
    return lista.map(el => el.age >= 18 && <li key={el.id}>Nome: {el.name}, età: {el.age}</li>)
}

const memorizza = useMemo(() => filtralista(lista), [lista])

return(
    <div>
        {memorizza}
    </div>
)

}