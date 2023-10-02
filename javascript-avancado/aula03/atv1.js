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


const film = {
    titulo: 'Velozes e Furiosos',
    diretor: 'Rob cohen',
    ano: 2001,
    pilotos: ['Vin Diesel', 'Paul Walker', 'Michelle Rodgriguez']
}

const proxy = new Proxy(film, {
    get(target, prop) {
        console.log(`Lendo a propriedade "${prop}"`)
        return target[prop];
    },
    set(target, prop, value) {
        console.log(`Gravando o valor ${value} na propriedade ${prop}`)
        target[prop] = value;
    }
})

proxy['titulo'] = "Pulp Fiction"
console.log(proxy['titulo']);
proxy['diretor'] = "Quentin Tarantino";
console.log(proxy['diretor'])
proxy['ano'] = 1994
console.log(proxy['ano'])
proxy['pilotos'] = ['John Travolta', 'Samuel L. Jackson', 'Uma Thurman']
  
  // usando o Reflect para ler uma propriedade
  Reflect.set(film, 'titulo', 'Não é Pulp Fiction')
  console.log(Reflect.get(film, 'titulo')); // Output: João
  
  // usando o Reflect para escrever em uma propriedade
  Reflect.set(filme, 'ano', 1935);
  console.log(filme.ano); // Output: 1935

  // usando o Reflect para excluir uma propriedade
  Reflect.deleteProperty(filme, 'diretor');
  console.log(film); 