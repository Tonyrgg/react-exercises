import { Filteredlist } from "./FilteredList"

let lista = [
    {id:1, name: "paolo", age: 20},
    {id:2, name: "luca", age: 83},
    {id:3, name: "carlo", age: 14},
    {id:4, name: "claudio", age: 12},
    {id:5, name: "lucia", age: 23}
]

export function App() {
        return (
            <div>
                <Filteredlist lista={lista}/>
            </div>
        )
}