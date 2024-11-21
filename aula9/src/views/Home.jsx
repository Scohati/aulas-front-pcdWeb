import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Container from "../components/Container/Container";
import Pokemon from "../components/Pokemon/Pokemon";
import Footer from "../components/Footer/Footer";

import { getPoke } from "../services/apiService";

import '../App.css'

function Home() {
    const [ pokemons, setPokemons ] = useState([])
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        handleGetPoke()
    }, [])

    const handleGetPoke = async () => {
        try {
            const respGetPoke = await getPoke()
            setPokemons(respGetPoke)   
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }
    
    return (
        <section className="home">
            <Header />
            <Container>
                {
                    loading
                    ? <h1>Carregando</h1>
                    : pokemons.map((poke, index) => <Pokemon key={index} img={poke.img} name={poke.name}/>)
                }
            </Container>
            <Footer />
        </section>
    )
}

export default Home;