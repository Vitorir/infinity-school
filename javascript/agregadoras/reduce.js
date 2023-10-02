const vendas = [
    { nome: 'Geladeira', categoria: 'Eletrônico', preco: 2500, desconto: 0 },
    { nome: 'Livro', categoria: 'Impresso', preco: 40.00, desconto: 10},
    { nome: 'Sofá', categoria: 'Móvel', preco: 900, desconto: 30},
    { nome: 'Televisão', categoria: 'Eletrônico', preco: 3000, desconto: 10},
    { nome: 'Notebook', categoria: 'Eletrônico', preco: 4000, desconto: 5},
    { nome: 'Cama Box', categoria: 'Móvel', preco: 1300, desconto: 15},
    { nome: 'Estante', categoria: 'Móvel', preco: 600, desconto: 10 }
];

let totalVenda = vendas.reduce( function( acumulador, produto ) {
    return acumulador + produto.preco;
}, 0);


console.log(totalVenda);