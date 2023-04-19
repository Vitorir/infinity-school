const hoje = new Date();

const formatadorBR = new Intl.DateTimeFormat('pt-BR');
const formatadorEUA = new Intl.DateTimeFormat('en-US');

const dataFormatadaBR = formatadorBR.format(hoje);
const dataFormatadaEUA = formatadorEUA.format(hoje);

console.log(`Data formatada Brasil: ${dataFormatadaBR}`);
console.log(`Data formatada Estados Unidos: ${dataFormatadaEUA}`);