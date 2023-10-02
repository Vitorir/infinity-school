// let precos = [
//     "credito",
//     'R$ 400',
//     'PIX',
//     'R$ 350',
//     'Dinheiro',
//     'R$ 300'
// ];

// let precoFiltro = precos.filter( elemento => {
//     return elemento.includes( 'R$ ' );
// });
// console.log( precoFiltro );

let pessoas = [
    { nome: 'fulano', profissao: 'Advogado', id: 1},
    { nome: 'fulano', profissao: 'Advogado', id: 10},
    { nome: 'sicrano', profissao: 'Médico', id: 2},
    { nome: 'beltrano', profissao: 'Enfermeiro', id: 3},
    { nome: 'joaozinho', profissao: 'Advogado', id: 4}
]

// let pessoasAdvogadas = pessoas.filter( pessoa => {
//     return pessoa.profissao == 'Advogado';
// });

// console.log(pessoasAdvogadas);

function filtrarPorValorMinimo(array, nome, id) {
    return array.filter( (pessoa) => {
        return pessoa.nome == nome && pessoa.id >= id;
    });
};

function filtrarValorMinimo(array, filtro, valor) {
    return array.filter( objeto => objeto[filtro] >= valor);
}

console.log(filtrarValorMinimo(pessoas, 'idade', 44));

console.log(filtrarPorValorMinimo(pessoas, 'fulano', 1));