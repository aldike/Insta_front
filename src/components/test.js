'use client'
import { useState } from "react";

export default function Test(){
    const name = "Aldy"
    const [counter, setCounter] = useState(10);
    const plusFunc = () =>{
        setCounter(counter + 1)
    }
    const minusFunc = () =>{
        setCounter(counter - 1)
    }
    const defaultFunc = () =>{
        setCounter(counter - counter)
    }
    return (<div>
        <h1>My test Component {name}</h1>
        <p>My test Parag ...</p>
        <a>test link</a>

        <p>Counter: {counter}</p>

        <button onClick={plusFunc}>Increase</button>
        <button onClick={minusFunc}>Decrease</button>
        <button onClick={defaultFunc}>Default</button>
    </div>)
}