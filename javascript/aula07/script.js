let btn = document.querySelector('button')


// Pegando os elementos que serao manipulados
let resultado = document.querySelector('#resultado')

// Pegando todos os botoes numericos
let zero = document.querySelector('#zero')
let um = document.querySelector('#um')
let dois = document.querySelector('#dois')
let tres = document.querySelector('#tres')
let quatro = document.querySelector('#quatro')
let cinco = document.querySelector('#cinco')
let seis = document.querySelector('#seis')
let sete = document.querySelector('#sete')
let oito = document.querySelector('#oito')
let nove = document.querySelector('#nove')

// Pegando os operadores
let somar = document.querySelector('#somar')
let subtrair = document.querySelector('#subtrair')
let dividir = document.querySelector('#dividir')
let multiplicar = document.querySelector('#multiplicar')

// Pegando os botões limpar e igual
let limpar = document.querySelector('#limpar')
let igual = document.querySelector('#igual')
let decimal = document.querySelector('#decimal')


// Alterar 
zero.addEventListener('click', () => [
    resultado.value = resultado.value + "0"
])
um.addEventListener('click', () => [
    resultado.value = resultado.value + "1"
])
dois.addEventListener('click', () => [
    resultado.value = resultado.value + "2"
])
tres.addEventListener('click', () => [
    resultado.value = resultado.value + "3"
])
quatro.addEventListener('click', () => [
    resultado.value = resultado.value + "4"
])
cinco.addEventListener('click', () => [
    resultado.value = resultado.value + "5"
])
seis.addEventListener('click', () => [
    resultado.value = resultado.value + "6"
])
sete.addEventListener('click', () => [
    resultado.value = resultado.value + "7"
])
oito.addEventListener('click', () => [
    resultado.value = resultado.value + "8"
])
nove.addEventListener('click', () => [
    resultado.value = resultado.value + "9"
])

// Operadores
somar.addEventListener('click', () => [
    resultado.value = resultado.value + "+"
])
subtrair.addEventListener('click', () => [
    resultado.value = resultado.value + "-"
])
dividir.addEventListener('click', () => [
    resultado.value = resultado.value + "/"
])
multiplicar.addEventListener('click', () => [
    resultado.value = resultado.value + "*"
])

// Botões
limpar.addEventListener('click', () => [
    resultado.value = ""
])
decimal.addEventListener('click', () => [
    resultado.value = resultado.value + "."
])

igual.addEventListener('click', () => [
    resultado.value = eval(resultado.value)
])
