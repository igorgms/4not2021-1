let vetor = [10, 20, 30]

// Desestruturação de um Array
let [x, y, z] = vetor
console.log(x)
// console.log(y)
console.log(z)

let obj = {
    nome: "Igor",
    idade: 27,
    naturalidade: "Franca - SP"
}
// Na desestruturação de objetos:  as variáveis devem ter os mesmos nomes das propriedades, 
// não importando a ordem dos mesmos
let {naturalidade, idade, nome} = obj
console.log(nome)
console.log(naturalidade)
console.log(idade)

let obj2 = {
    marca: "Volkswagen",
    modelo: "Gol",
    ano: 2016,
    cor: "Branco"
}

// Desestruturação parcial de um objeto
let {modelo, ano} = obj2

console.log(modelo)
console.log(ano)

// Ignorando elementos na desestruturação de arrays
let vet2 =  ["Maçã", "Banana", "Pêra"]

let [fruta1, , fruta2] = vet2

console.log(fruta1)
console.log(fruta2)