import CompC from "./CompC";
import { MyContext } from "../contexts/MyContext";
import { useContext } from "react";

export default function CompB() {
    const { text } = useContext(MyContext)
    
    return (
        <section>
            <h1>CompB: {text}</h1>
            <CompC />
        </section>
    )
}