const chave = "cebcd482eda57fa9a6714c1c2ba91885"
const apiUnsplash = "https://source.unsplash.com/1600x900/?";
const apiWeather = "https://api.openweathermap.org/data/2.5/weather?q="

function exibirNaTela(dados) {
    const cidade = document.getElementById("cidade");
    const temperatura = document.getElementById("temp");
    const umidade = document.getElementById("umidade");
    const descricao = document.getElementById("descricao");
    const icone = document.getElementById("icone");

    cidade.innerHTML = "Tempo em " + dados.name
}

async function buscarCidade(local) {
    let dados = await fetch( apiWeather + local + '&appi=' + chave + '&lang=pt_br' + '&units = metric')

    let resposta = await dados.json();
    exibirNaTela()
}

function pesquisar() {
    let cidade = document.getElementById('inputCidade').value;
    
    buscarCidade(cidade);
}