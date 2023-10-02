function cadastrar(nome, idade, curso) {
    let aluno = [nome, idade, curso];
    let obj = {
        nome: nome,
        idade: idade,
        curso: curso
    };
    console.log(aluno);
    console.log(obj);
}

let n = prompt("Digite o nome do aluno: ");
let i = prompt("Digite o nome do aluno: ");
let c = prompt("Digite o curso do aluno: ");

cadastrar(n, i, c);