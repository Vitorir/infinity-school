export class MinhaClasse {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    minhaFuncao() {
        return `Meu nome é ${this.nome} e tenho ${this.idade} anos`;
    }
}

module.exports = {
    MinhaClasse
}