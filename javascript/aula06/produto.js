let produto = {
    nome: 'Notebook',
    preco: 3500,
    disponibilidade: false
}


// function alterarDisponibilidade(dado) {
//     produto["disponibilidade"] = dado;
// }

// alterarDisponibilidade(true);

// console.log(produto);



function alterarDisponibilidade(produto) {
    return produto.disponibilidade = !(produto.disponibilidade)
}

console.log(alterarDisponibilidade(produto));