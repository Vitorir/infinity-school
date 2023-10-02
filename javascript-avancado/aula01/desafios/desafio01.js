const hoje = new Date();

const formatadorBR = new Intl.DateTimeFormat('pt-BR');
const formatadorEUA = new Intl.DateTimeFormat('en-US');

const dataFormatadaBR = formatadorBR(hoje);
const dataFormatadaEUA = formatadorEUA(hoje);

