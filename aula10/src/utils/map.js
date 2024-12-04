const pokeArr = [
    {
        nome: 'poke1',
        descricao: 'poke1 descricao',
        img: 'img.jpg',
        habilidade: 'habilidade 1',
    },
    {
        nome: 'poke2',
        descricao: 'poke2 descricao',
        img: 'img.jpg',
        habilidade: 'habilidade 2',
    },
    {
        nome: 'poke3',
        descricao: 'poke3 descricao',
        img: 'img.jpg',
        habilidade: 'habilidade 3',
    },
    {
        nome: 'poke4',
        descricao: 'poke4 descricao',
        img: 'img.jpg',
        habilidade: 'habilidade 4',
    },
    {
        nome: 'poke5',
        descricao: 'poke5 descricao',
        img: 'img.jpg',
        habilidade: 'habilidade 5',
    },
]

pokeArr.forEach( poke => {
    console.log(poke)
})

const newArr = pokeArr.map( poke => {
    return {
        nome: poke.nome,
        habilidade: poke.habilidade
    }
})

console.log(newArr);
