import './App.css';
import { useEffect, useState } from 'react'
import { getPokemons } from './services/api.js'

function App() {
  const [pokemons, setPokemons] = useState()

  useEffect(() => {
    get()
  }, [])

  async function get() {
    const resp = await getPokemons()
    const { results } = resp
    setPokemons(results)
    console.log(results)
  }

  return (
    <div className="App">
      {
        pokemons &&
        pokemons.map((pokemon, index) => (
          <div key={index}>
            <h2>{index} - {pokemon.name}</h2>
            <p> Descrição </p>
            <span>{pokemon.url}</span>
          </div>
        ))
      }
    </div>
  );
}

export default App;
