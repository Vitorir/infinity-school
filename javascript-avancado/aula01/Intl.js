// DateTimeFormat
const hoje = new Date();

const formatadorBR = new Intl.DateTimeFormat('pt-BR');
const formatadorEUA = new Intl.DateTimeFormat('en-US');

const dataFormatadaBR = formatadorBR.format(hoje);
const dataFormatadaEUA = formatadorEUA.format(hoje);

console.log(`Data formatada Brasil: ${dataFormatadaBR}`);
console.log(`Data formatada Estados Unidos: ${dataFormatadaEUA}`);


// NumberFormat
const valor = 10.5;

const formatadorValorBR = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' } );
const formatadorValorEUA = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EUA' } );

const valorFormatadoBR = formatadorBR.format(valor);
const valorFormatadoEUA = formatadorEUA.format(valor);

console.log(`Valor no formato do Brasil: ${valorFormatadoBR}`);
console.log(`Valor no formato dos EUA: ${valorFormatadoEUA}`);