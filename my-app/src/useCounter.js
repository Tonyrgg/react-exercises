import { useCallback, useState } from "react";

export function useCounter({initialValue = 0}) {
    const [counter, setCounter] = useState(initialValue)

    const piu = useCallback( function piu() {
        setCounter((c) => c + 1)
    }, [])

    const meno = useCallback(function meno() {
        setCounter((c) => c - 1)
    }, [])

    const reset = useCallback(function reset() {
        setCounter((c) => c = initialValue)
    },[initialValue])

    return {piu, meno, reset, counter}
}
