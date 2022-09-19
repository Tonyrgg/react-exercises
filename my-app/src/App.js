import { CarDetails } from "./CarDetails"

export function App() {
        return (
            <div>
                <CarDetails initialData={{model: 'Bmw', year: '2010', color: 'yellow'}}/>
            </div>
        )
}