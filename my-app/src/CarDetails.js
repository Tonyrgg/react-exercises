import { useRef, useEffect } from "react"


export function CarDetails ({initialData}) {
    
    const carRef = useRef()
    
    useEffect(() => {
        carRef.current.elements.model.value = initialData.model
        carRef.current.elements.year.value = initialData.year
        carRef.current.elements.color.value = initialData.color
    }, [initialData]);

    return (
        <div>
            <form ref={carRef}>
            <input name="model" />
            <input name="year" />
            <input name="color" />
            </form>
        </div>
    )
}