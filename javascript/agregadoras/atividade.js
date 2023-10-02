const vendas = [
    { nome: 'Geladeira', categoria: 'Eletrônico', preco: 2500, desconto: 0 },
    { nome: 'Livro', categoria: 'Impresso', preco: 40.00, desconto: 10},
    { nome: 'Sofá', categoria: 'Móvel', preco: 900, desconto: 30},
    { nome: 'Televisão', categoria: 'Eletrônico', preco: 3000, desconto: 10},
    { nome: 'Notebook', categoria: 'Eletrônico', preco: 4000, desconto: 5 },
    { nome: 'Cama Box', categoria: 'Móvel', preco: 1300, desconto: 15},
    { nome: 'Estante', categoria: 'Móvel', preco: 600, desconto: 10 }
];
// Exercício 1: Mostre o nome de todos os itens vendidos e suas categorias.
function mostra(array) {
    array.forEach(element => {
        console.log( element.nome );
    });
};
mostra(vendas);
// Exercício 2: Exiba somente os itens da categoria eletrônicos.
function filtra(array, filtro, valor) {
    return array.filter( objeto => objeto[filtro] == valor);
}
console.log(filtra(vendas, 'categoria', 'Eletrônico'));

// Filtrar por objetos maior igual a 900
function filtraValor(array, filtro, valor) {
    return array.filter( objeto => objeto[filtro] >= valor);
}
console.log(filtraValor(vendas, 'preco', 900));

// Exercício 3: Mostre os itens, seu preço cheio, e seu preço com desconto.
function mostraItems(array) {
    array.forEach(element => {
        console.log(element.nome, "\n");
        console.log(element.preco, "\n");
        console.log(element.nome, "\n");
    });
};

// Exercício 4: Mostre o total do valor das vendas.
function calculaTotal(array) {
    let totalVenda = array.reduce( function ( acumulador, produto) {
        return acumulador + produto.preco; 
    }, 0);

    return totalVenda;
};

console.log(calculaTotal(vendas));