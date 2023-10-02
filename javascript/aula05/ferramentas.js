let ferramentas = [];
let ferramenta;

do {
    ferramenta = prompt("Digite o nome da ferramenta (ou 'fim' para encerrar):");
    ferramentas.push(ferramenta);
} while (ferramenta !== "fim");
ferramentas.pop();

console.log("Ferramentas informadas:");
console.log(ferramentas);