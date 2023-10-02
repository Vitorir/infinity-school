class FilmeCorrida {
    constructor(titulo, diretor, ano, pilotos) {
        this.titulo = titulo;
        this.diretor = diretor;
        this.ano = ano;
        this.pilotos = pilotos;
    }

    descricao() {
        return `${this.titulo} (${this.ano}), dirigido por ${this.diretor}. Estrelado por ${this.pilotos.join(',')}.`
    }

    correr() {
        return `O piloto ${this.pilotos[1]} é o maior de todos os tempos`
    }
}

const filme = new FilmeCorrida('Velozes e Furiosos', 'Rob Cohen', 2001, ['Vin Diesel', 'Paul Walker', 'Michelle Rodriguez']);
console.log(filme.descricao());
console.log(filme.correr());