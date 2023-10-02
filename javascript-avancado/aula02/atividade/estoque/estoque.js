class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    get pegarNome() {
        return this.nome;
    }

    get pegarPreco() {
        return this.preco;
    }

    get pegarQuantidade() {
        return this.quantidade;
    }

    adicionarQuantidade(qtd) {
        this.quantidade = quantidade + qtd;
    }

    removerQuantidade(qtd) {
        if (qtd > this.quantidade) {
            return false;
        } else {
            this.quantidade = quantidade - qtd;
            return true;
        }
    }

    calcularValorTotal() {
        return this.preco * this.quantidade;
    }

}

export default Produto;

export function listarProdutos(produtos) {
    produtos.forEach((produto) => {
        console.log(`Nome: ${produto.nome}`);
        console.log(`Preço: R$ ${produto.preco.toFixed(2)}`);
        console.log(`Quantidade: ${produto.quantidade}`);
        console.log(`Valor Total: R$ ${produto.calcularValorTotal().toFixed(2)}`);
        console.log("");
      });
}
