import { useState } from "react"
import { MyContext } from "./contexts/MyContext"
import CompA from "./components/CompA"

function App() {
  const [ text, setText ] = useState('Texto')
  const [ number, setNumber ] = useState(50)
  
  return (
    <MyContext.Provider value={{ text, setText, number, setNumber }}>
      <CompA />
    </MyContext.Provider>
  )
}

export default App
