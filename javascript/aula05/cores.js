let cores = ["Azul", "Verde", "Vermelho", "Laranja", "Preto"];

let teste = prompt("Digite uma cor: ");

for (const cor of cores) {
    if (cor == teste) {
        console.log("Cor encontrada!")
    }
}