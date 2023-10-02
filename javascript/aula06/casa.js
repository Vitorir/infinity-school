let casa = {
    quartos: 2,
    tipo: 'Casa',
    endereco: 'rua teste 123 - ZS',
    telefone: '(85) 9999-9999',
    imprimir: function () {
        console.log(`${this.tipo} com ${this.quartos} quartos localizada na ${this.endereco}. Contato ${this.telefone}`);
        console.log("Casa com 2 quartos localizada na rua teste 123 – ZS. Contato (85) 9999-9999")
    }
}

casa.imprimir();