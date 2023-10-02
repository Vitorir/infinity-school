const obj = { nome: 'João', idade: 25 };

const proxy = new Proxy(obj, {
  get(target, prop) {
    console.log(`Lendo a propriedade "${prop}"`);
    return target[prop];
  },
  set(target, prop, value) {
    console.log(`Gravando o valor "${value}" na propriedade "${prop}"`);
    target[prop] = value;
  }
});

console.log(proxy['nome']); // Output: Lendo a propriedade "nome" / Output: João
proxy.idade = 30; // Output: Gravando o valor "30" na propriedade "idade"
console.log(proxy.idade); // Output: 30

proxy.nome = "Vitor";
console.log(proxy.nome);