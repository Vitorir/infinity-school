class MinhaClasse2 {
    constructor(nome, altura, peso) {
        this.nome = nome;
        this.altura = altura;
        this.peso = peso;
    }
    
    minhaFuncao() {
        return `Meu nome é ${this.nome}, tenho ${this.altura} de altura e peso ${this.peso}.`
    }
}

export default MinhaClasse2;