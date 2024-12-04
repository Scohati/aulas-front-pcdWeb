import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Container from "../components/Container/Container";
import Pokemon from "../components/Pokemon/Pokemon";
import Footer from "../components/Footer/Footer";
import Pagination from "../components/Pagination/Pagination";

import { getPoke } from "../services/apiService";

import '../App.css'

function Home() {
    const [ pokemons, setPokemons ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const [ next, setNext ] = useState(null)
    const [ prev, setPrev ] = useState(null)

    useEffect(() => {
        handleGetPoke()
    }, [])

    const handleGetPoke = async (path) => {
        try {
            const respGetPoke = await getPoke(path)
            const { pokemonsDetails, count, next, prev } = respGetPoke
            setNext(next)
            setPrev(prev)
            setPokemons(pokemonsDetails)
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    const movePage = (value) => {
        if (value == 'next') {
            setLoading(true)
            handleGetPoke(next)
            return
        }
        setLoading(true)
        handleGetPoke(prev)
    }

    return (
        <section className="home">
            <Header />
            <Pagination movePageProp={movePage}/>
            <Container>
                {
                    loading
                    ? <h1>Carregando</h1>
                    : pokemons.map((poke, index) => <Pokemon key={index} img={poke.img} name={poke.name}/>)
                }
            </Container>
            <Pagination movePageProp={movePage}/>
            <Footer />
        </section>
    )
}

export default Home;