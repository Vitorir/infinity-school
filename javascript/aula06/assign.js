// let pessoa = {
//     name: 'Vitor',
//     idade: 24,
//     energia: 20000
// }

// let objeto = {
//     name: 'Café',
//     composicao: ['Cafeína', 'fenóis', 'trigolicerina', 'niacina', 'lipídios'],
//     ativo: function (ingestor) {
//         return ingestor.energia += (ingestor.energia * 40) / 100;
//         console.log('Esteja atento');
//     }

// }

// console.log(objeto.ativo(pessoa))
let objetoA = {
    prop1: 'teste',
    prop2: 'testando'
}

let objetoB = {
    prop3: 'propriedade',
    prop4: 'proriedade4'
}

Object.assign(objetoA, objetoB);

console.log(objetoA);
console.log(objetoB);