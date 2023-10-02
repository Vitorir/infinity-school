let fruta = {
    nome: 'laranja',
    qtd: 15,
    preco: "R$ 2.00"
}

let { nome, qtd, preco } = fruta;

console.log(nome);
console.log(Object.values(fruta)[0]);