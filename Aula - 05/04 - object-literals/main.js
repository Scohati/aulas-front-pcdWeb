// const pessoa = {
//     nome: 'Diogo',
//     idade: 21
// }

const pessoa = {
    nome: 'Alex',
    idade: 55,
    apresentar() {
        console.log(`Nome: ${this.nome}, idade: ${this.idade}`)
    }
}

pessoa.apresentar() // Nome: Alex, idade: 55
