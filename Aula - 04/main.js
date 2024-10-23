const baseUrl = 'https://pokeapi.co/api/v2/pokemon'
const mainContainer = document.getElementById('mainContainer')
const pokemonsContainer = mainContainer.querySelector('#pokemonsContainer')

var currentPage = 0
var totalPages = 0
const limit = 20

async function getPoke(slug, offSetParam) {
    try {
        const response = await fetch(`${baseUrl}${slug || `?offset=${offSetParam}&limit=${limit}`}`)
        const responseJson = await response.json()
        const results = responseJson?.results ||  responseJson

        if (results[0]) {
            totalPages = responseJson?.count / limit
            ceilTotalPages = Math.ceil(totalPages)
            appendTotalPages(ceilTotalPages)
            
            results?.forEach(async (item) => {
                await getPoke(`/${item.name}`)
            })
        } else {
            appendPoke(responseJson)
        }
        return results
    } catch (error) {
        throw new Error(`Erro ao consultar pokemons: ${error}`);
    }
}

function handleSubmit(event) {
    event.preventDefault()

    pokemonsContainer.innerHTML = ''
    const filter = mainContainer.querySelector('#pokeName')?.value;
    getPoke(`/${filter}`)
    filter.value = '';
}

function nextPageFunc() {
    if (currentPage === totalPages) return
    currentPage++
    var offset = currentPage * limit
    console.log(currentPage);
    reset()
    appendCurrentPage()
    getPoke(null, offset)
}

function prevPageFunc() {
    if (currentPage === 0) return
    currentPage--
    var offset = currentPage * limit
    console.log(currentPage);
    reset()
    appendCurrentPage()
    getPoke(null, offset)
}

function reset() {
    pokemonsContainer.innerHTML = '';
}

function appendCurrentPage() {
    const currentPageTag = mainContainer.querySelector('#currentPage')
    currentPageTag.innerHTML = currentPage + 1
}
function appendTotalPages(ceilTotalPages) {
    const totalPageTag = mainContainer.querySelector('#totalPages')
    totalPageTag.innerHTML = ceilTotalPages
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
    pokemonsContainer.innerHTML += pokeHTML;
}

getPoke()
appendCurrentPage()
