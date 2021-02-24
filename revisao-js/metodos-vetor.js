const pets = [
    {
        nome: 'Dudu',
        especie: 'cão',
        idade: 4,
        sexo: 'M',
        peso: 5.3
    },
    {
        nome: 'Lili',
        especie: 'cão',
        idade: 11,
        sexo: 'F',
        peso: 11
    },
    {
        nome: 'Panceta',
        especie: 'cão',
        idade: 3,
        sexo: 'M',
        peso: 3.5
    },
    {
        nome: 'Gabigol',
        especie: 'papagaio',
        idade: 45,
        sexo: 'M',
        peso: 1
    },
    {
        nome: 'Larissa',
        especie: 'Gato',
        idade: 3,
        sexo: 'M',
        peso: 7
    },
    {
        nome: 'Matusalém',
        especie: 'tartaruga',
        idade: 102,
        sexo: 'M',
        peso: 30
    }
]

// find(): retorna a primeira ocorrência que corresponde ao critério informado
console.log(pets.find(elemento => elemento.peso > 10))
console.log(pets.find(pet => pet.idade < 4))
console.log(pets.find(pet => pet.especie === 'Gato' && pet.sexo == "M"))

console.log("--------------------------------------------------")

// some(): retorna true caso haja algum elemento que corresponde ao critério
// ou false caso contrário
console.log(pets.some(pet => pet.nome === "Larissa"))
console.log(pets.some(pet => pet.especie == 'tartaruga' && pet.sexo === 'F'))

console.log("--------------------------------------------------")

// every(): retorna true caso TODOS os elementos correspondam ao critério ou false caso contrário
console.log(pets.every(pet => pet.especie === 'cão'))
console.log(pets.every(pet => pet.peso >= 1))

console.log("--------------------------------------------------")


// filter(): retorna um novo vetor contendo apenas os elementos que correspondem ao critério passado
console.log(pets.filter(x => x.especie === 'cão'))
console.log(pets.filter(x => x.idade > 20))
console.log(pets.filter(x => x.sexo === 'F' && x.especie === 'papagaio'))

console.log("--------------------------------------------------")

// map(): cria um novo vetor COM MESMO NÚMERO do vetor original,
// correspondendo a algum tipo de transformação nos elementos originais

// Novo vetor contendo apenas o nome dos pets, em maiuscula
console.log(pets.map(e => e.nome.toUpperCase()))

const numeros = [2, 6, -3, 9, 5, -7, 1, 4]
console.log(numeros)

// Criando um novo vetor em que cada elemento corresponde ao elemento do vetor original elevando ao quadrado
console.log(numeros.map(x => x ** 2))

console.log("--------------------------------------------------")

// reduce(): reduz um vetor de valores a um único valor.
// Parâmetros:
// acumulador: resultado parcial até o momento
// valor atual: o resultado correspondente ao elemento atual, que integrará o acumulador

// Soma
console.log(numeros.reduce((acum, val) => acum + val))

// Multiplicação
console.log(numeros.reduce((acum, val) => acum * val))

// Concatenação
let p1 = 'Bom'
let p3 = 'galera!'
console.log([p1, ' dia, ', p3].reduce((acum, val) => acum + val))

console.log("--------------------------------------------------")

// Somar o peso de todos os PETS

let pesos = pets.map(pet => pet.peso)
console.log(pesos)

console.log(pesos.reduce((acum, val) => acum + val))

// Abordagem 2: fazendo map() + reduce() em uma linha
console.log(pets.map(pet => pet.peso).reduce((acum, val) => acum + val))

// Abordagem 3: reduce() com parâmetros extras
// 3º parâmetro da arrow function: indice do elemento atual
// 4º parâmetro da arrow function: o próprio vetor que está sendo reduzido
// 2º parâmetro do reduce(): valor inicial do acumulador
console.log(pets.reduce((acum, val, idx, vet) => acum + vet[idx].peso, 0))

console.log("--------------------------------------------------")

// includes(): retorna true ou false caso o vetor inclua o vetor informado
console.log(numeros.includes(6))
console.log(numeros.includes(11))

// Diferença de some() e includes()
// some() -> recebe uma função para testar a existência de uma condição
// includes() -> recebe um valor simples(primitivo) para testar a existência
