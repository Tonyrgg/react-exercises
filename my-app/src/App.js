import React from "react";
import { Counter } from "./Counter";
import { Welcome } from "./welcome";
import { Route, Routes } from "react-router-dom"


export function App() {
    return (
        <Routes>
            <Route path="/" element={<Welcome name={"Paolo"}/>} />
            <Route path="counter" element={<Counter initialValue={0} increment={3}/>} />
        </Routes>
    )
}