import Pessoa from './pessoa.js'

class Leandro extends Pessoa {
    constructor() {
        super('Leandro', 20)
    }

    apresentarLeandro() {
        this.apresentar()
    }
}

export default new Leandro();
