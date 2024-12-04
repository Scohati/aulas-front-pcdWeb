export async function getPoke(path) {
    const basePath = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'
    const resp = await fetch(path ? path : basePath)
    const respJson = await resp.json()
    const { results, count, next, previous } = respJson
    const pokemonsDetails = await getPokeDetails(results)
    return {
        pokemonsDetails,
        count,
        next,
        previous
    }
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
