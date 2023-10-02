let numeros = [1, 2, 3, 4, 5, 6]

function imprimirNumeros(numero) {
    if (numero % 2 == 0) {
        console.log(`${numero} é par`)
    } else {
        console.log(`${numero} é impar`)
    }
}
numeros.forEach(imprimirNumeros);

// Aplicação real
const carItems = [
    { nome: 'Camisa', preco: 34.99 },
    { nome: 'Calça', preco: 119.99},
    { nome: 'tenis', preco: 199.99}
];

