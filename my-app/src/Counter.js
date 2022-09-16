import { useCounter } from "./useCounter"

export function Counter() {
    const {piu, meno, reset, counter} = useCounter(0)

    return (
        <div>
            <h2>{counter}</h2>
            <button onClick={piu}>Piu</button>
            <button onClick={meno}>meno</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}