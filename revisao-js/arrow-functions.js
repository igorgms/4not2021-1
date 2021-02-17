// Caracteristicas da função:
// 1) Tem apenas 1 argumento
// 2) Seu corpo tem apenas uma linha de código
function quadrado(n) {
    return n * n
}

// Reescrevendo a função anterior com arrow function
// 1) Os parênteses em torno do argumento são omitidos
// 2) A palavra function, ANTES do argumento, é substituida pelo simbolo => Após o argumento
// 3) As chaves são omitidas
// 4) A palavra return é omitida
const quadrado2 = n => n * n

console.log('função normal', quadrado(2))
console.log('arrow function', quadrado2(2))


function potencia(b, e) { // b = base, e = expoente
    return b ** e
}

const potencia2 =  (b, e) => b ** e

console.log(potencia(3, 2), potencia2(3, 2))

// Função sem argumentos
function megaSena() {
    // Retorna um número aleatório entre 0 e 60
    // Math.random() -> retorna um número aleatório entre 0 e 1
    // Multiplicando por 60 -> temos um número entre 0 e 59 (fracionário)
    // Soma 1 -> ajusta a faixa para entre 1 e 60
    // floor() -> retirar as casas decimais
    return (Math.floor(Math.random() * 60 + 1))
}
console.log(megaSena(), megaSena(), megaSena())

const megaSena2 = () => (Math.floor(Math.random() * 60 + 1))

console.log(megaSena2(), megaSena2(), megaSena2())
