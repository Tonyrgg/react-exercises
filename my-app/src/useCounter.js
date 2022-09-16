import { useState } from "react";

export function useCounter({initialValue = 0}) {
    const [counter, setCounter] = useState(initialValue)

    function piu() {
        setCounter((c) => c + 1)
    }

    function meno() {
        setCounter((c) => c - 1)
    }

    function reset() {
        setCounter((c) => c = initialValue)
    }

    return {piu, meno, reset, counter}
}
