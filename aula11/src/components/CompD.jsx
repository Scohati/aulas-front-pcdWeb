import { useState } from "react"
import { MyContext } from "../contexts/MyContext"
import { useContext } from "react"

export default function CompD() {
    const { setText, setNumber } = useContext(MyContext)
    const [inputText, setInputText] = useState()
    const [inputNumber, setInputNumber] = useState()
    
    return (
        <section>
            <input type="text" onInput={(e) => setInputText(e.target.value)}/>
            <button onClick={() => setText(inputText)}>Mudar texto</button>
            <br />
            <input type="number" onInput={(e) => setInputNumber(e.target.value)}/>
            <button onClick={() => setNumber(inputNumber)}>Mudar número</button>
        </section>
    )
}