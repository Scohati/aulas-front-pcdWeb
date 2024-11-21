// https://pokeapi.co/api/v2/
// pokemon?limit=100&offset=0


export async function getPoke() {
    const resp = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
    const respJson = await resp.json()
    const { results } = respJson
    const pokemonsDetails = await getPokeDetails(results)
    return pokemonsDetails
}

async function getPokeDetails(pokemons) {
    const pokemonsPromises = pokemons.map(async poke => {
        const resp = await fetch(poke.url)
        const respJson = await resp.json()
        const { name, sprites } = respJson
        const { front_default } = sprites
        return { name, img: front_default }
    })

    return Promise.all(pokemonsPromises)
}