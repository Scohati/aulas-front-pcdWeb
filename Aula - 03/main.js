const baseUrl = 'https://pokeapi.co/api/v2/pokemon'
const container = document.getElementById('container');

async function getPoke(slug) {
    try {
        const response = await fetch(`${baseUrl}${slug || '?limit=20'}`)
        const responseJson = await response.json()
        const results = responseJson?.results ||  responseJson //Interrogação para validar se há o "results" no responseJson

        if (results[0]) {
            results?.forEach(async (item) => {
                let resp = await getPoke(`/${item.name}`);
                appendPoke(resp)
            })
        }
        return results
    } catch (error) {
        throw new Error(`Erro ao consultar pokemons: ${error}`);
    }
}

const appendPoke = pokemon => {
    const { name, sprites } = pokemon
    const pokeHTML = `
        <div>
            <img src="${sprites?.front_default}" alt="Imagem do ${name}">
            <span class="text-container">
                <h4>${name}</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Perferendis omnis exercitationem nam nihil quia ad iure eos 
                    eius rerum accusantium! Eaque similique quis blanditiis 
                    atque modi quae! Perferendis, nisi ipsum.
                </p>
            </span>
        </div>
    `
    container.innerHTML += pokeHTML;
}

getPoke()
