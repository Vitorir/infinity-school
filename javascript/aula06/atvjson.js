let user = {
    id: 1,
    nome: "Fulano",
    password: "123456",
    conta: "0001"
}

let userJSON = JSON.parse(user);
console.log(userJSON);