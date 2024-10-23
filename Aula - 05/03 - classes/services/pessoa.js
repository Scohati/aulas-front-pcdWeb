class Pessoa {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    apresentar() {
        console.log(`Nome: ${this.name}, age: ${this.age}`);
    }
}

export default Pessoa;