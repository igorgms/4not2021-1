// Criando um objeto cujo valor das propriedades vem das variáveis

let usuario = "igor"
let senha = "Mengo08"
let name = "Igor Gomes"
let lastLogin = "2021-02-08 22:49:28"

let userInfo = {
    login: usuario,
    password: senha,
    name, // Propriedade abreviada(name: name), objeto ja puxa automaticamente o valor por conta da variavel ser do mesmo nome 
    lastLogin // (lastLogin: lastLogin)
}

console.log(userInfo)