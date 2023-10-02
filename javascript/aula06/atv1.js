class Onibus {
    constructor(rodas, limite, portas) {
        this.rodas = rodas;
        this.limite = limite;
        this.portas = portas;
    }
}

let onibus1 = new Onibus(10, 50, 4);
let onibus2 = new Onibus(60, 45, 4);


let frota = [onibus1, onibus2]

for (elemento in frota) {
    console.log(elemento);
}


let onibus = {
    rodas: 8,
    limite: 40,
    portas: 2
}

onibus.janelas = 20;
delete onibus.rodas;

console.log(onibus);
console.log(onibus.janelas);