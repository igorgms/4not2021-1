let nota = 6


// if (nota >= 6) {
//     situacao = 'APROVADO'
// } else {
//     situacao = 'REPROVADO'
// }


let situacao = nota >= 6 ? 'APROVADO' : 'REPROVADO'

console.log(situacao)

let user = 'admin'
let userType

userType = user === 'admin' || user === 'root' ? 'Superuser' : 'Ordinary user'

console.log(userType)