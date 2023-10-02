let pessoa = {
    nome: 'Carlos',
    idade: 31,
    profissao: 'Programador',

    // acoes/metodos/funcoes
    dizerOla: function () {
        console.log(`Olá ${this.nome}!`)
    }
};

// verificando tipo
console.log(typeof pessoa)
// imprimendo objeto pessoa
console.log(pessoa)

// como acessar as propriedades e funções de um objeto
console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.profissao)

// chamando o metodo
pessoa.dizerOla()

// alterando propriedade
pessoa.nome = 'Vitor'
pessoa.idade = '24'
console.log(pessoa)


// Atividade
let onibus = {
    rodas: 8,
    limite: 40,
    portas: 2
}
console.log(onibus)

// criando propriedade para um objeto
pessoa.aposentado = false;

// deletando propriedade
delete pessoa.aposentado;
console.log(pessoa)

// Atividade 2
onibus.janelas = 20;
delete onibus.rodas;
console.log(onibus)

// como verificar quais chaves do objeto
// retorna uma lista
console.log(Object.keys(pessoa));

// verificando os valores do objeto
// retorna uma lista
console.log(Object.values(pessoa));

// Atividade 3
let produto = {
    nome: 'Notebook',
    preco: 2499.99,
    desconto: 0.15,
    disponibilidade: true
}
// função que altera a propriedade booleana de disponibilidade
function altera(valor, objeto) {
    objeto.disponibilidade = valor;    
}

altera(false, produto);
console.log(produto);

// Desestruturando objetos
let {nome, idade, profissao} = pessoa; /* Cria variáveis a partir de propriedades de um objeto */
console.log(nome, idade, profissao);

// Desestruturando lista
let lista = ['carro', 'moto', 'bicicleta'];
let [auto, moto, bike] = lista;

// Atividade Slide
let atletas = [
    {nome: 'Lebron', esporte: 'Basquete'},
    {nome: 'Messi', esporte: 'Futebol'},
]; /* criando vetor de atletas */


function adiciona(lista, objeto) {
    lista.push(objeto);
}

adiciona(atletas, {nome: 'doBronx', esporte: 'MMA'});
console.log(atletas)