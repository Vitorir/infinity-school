function calcular(n1, n2, n3) {
    let notas = [n1, n2, n3];
    let media = (notas[0] + notas[1] + notas[2]) / notas.length;

    console.log(`As notas são ${notas}\n e sua média é ${media}`);
}

calcular(5, 6, 7);