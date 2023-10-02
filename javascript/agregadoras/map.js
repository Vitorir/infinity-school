// percorre os elementos de um array, instanciando um novo como resultado
let numeros = [1, 2, 3, 4, 5];

let numerosMultiplicados = numeros.map( numero => { 
    return numero * 2;
});

console.log(numeros);
console.log(numerosMultiplicados);

// Com Objetos
let pessoas = [
    {nome: 'Ana', idade: 22},
    {nome: 'Vitor', idade: 24},
    {nome: 'Paulo', idade: 44}
];

pessoas.map( pessoa => {
    let idade = pessoa['idade'] + 10;
    console.log(`${pessoa.nome} terá ${idade} anos daqui a dez anos.`);
});

let inteiros = [1, 2, 3, 4, 5];
let dobrados = inteiros.map( numero => {
    return numero * 2;
});

console.log(dobrados);