import CompD from "./CompD";
import { MyContext } from "../contexts/MyContext";
import { useContext } from "react";

export default function CompC() {
    const { number } = useContext(MyContext)
    
    return (
        <section>
            <h1>Componente C: {number}</h1>
            <CompD />
        </section>
    )
}