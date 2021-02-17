// ES6 -> ECMAScript versão 6, de 2016
import { numeros } from './includes/dados.mjs'
import { somaVet, quadradoVet } from './includes/funcoes.mjs'

// Quando existe um export default no arquivo de origem, a importação não tem chaves
import dobraVetor from './includes/funcoes2.mjs'

console.log(somaVet(numeros))
console.log(quadradoVet(numeros))
console.log(dobraVetor(numeros))