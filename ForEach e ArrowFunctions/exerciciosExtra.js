// Dado um array de números, use forEach para imprimir cada número no console.
const ex1 = [1, 2, 3, 4, 5, 6, 7]
ex1.forEach(item => {
    console.log(item)
})
console.log('Fim do ex1')

// Dado um array de palavras, use forEach para imprimir o comprimento de cada palavra no console.
const ex2 = ['arroz', 'feijão', 'batata']
ex2.forEach(item => {
    let cmp = item
    console.log(cmp, cmp.length)
})
console.log('Fim ex2')

// Dado um array de números, use forEach e uma arrow function para criar um novo array com cada número multiplicado por 2.
const ex3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let arrV2 = []
ex3.forEach(item => {
    arrV2.push(item*2)
})
console.log(arrV2)
console.log('Fim ex3')

// Dado um array de nomes, use forEach e uma arrow function para criar um novo array contendo apenas os nomes que começam com a letra 'A'.
const ex4 = ['Alex', 'Arroz', 'Pedro', 'Joaquim', 'Alexandre']
let ex4V2 = []
ex4.forEach(item => {
    let plv = item
    if(plv[0] === 'A' && plv[0] === 'a') {
        ex4V2.push(item)
    }
})
console.log(ex4V2)
console.log('Fim ex4')


// Dado um array de objetos representando pessoas, use forEach para imprimir no console o nome e a idade de cada pessoa.
const ex5 = [
    {nome: 'Pedro', idade: 23},
    {nome: 'Alex', idade: 18},
    {nome: 'Guilherme', idade: 45}
]
ex5.forEach(item => {
    console.log(`Nome: ${item.nome} Idade: ${item.idade}`)
})
console.log('Fim ex5')

// Dado um array de números, use forEach e uma arrow function para calcular a soma de todos os números no array.
const ex6 = [1, 2, 3, 4, 5, 6, 7, 8 ,9]
let soma = 0
ex6.forEach(item => {
    soma = soma + item
})
console.log(soma)
console.log('Fim ex5')

// Dado um array de objetos representando produtos, use forEach para imprimir no console o nome e o preço de cada produto.
const ex7 = [
    {nome: 'Geleia', preco: 5.99},
    {nome: 'Mel', preco: 9.99},
    {nome: 'Molho de Tomate', preco: 12.90}
]
ex7.forEach(item => {
    console.log(`O produto ${item.nome} custa R$${item.preco}.`)
})
console.log('Fim ex7')

// Dado um array de números, use forEach e uma arrow function para criar um novo array contendo apenas os números pares.
const ex8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let ex8V2 = []
ex8.forEach(item => {
    if(item % 2 == 0) {
        ex8V2.push(item)
    }
})
console.log(ex8V2)
console.log('Fim ex8')

// Dado um array de strings, use forEach e uma arrow function para criar um novo array com as strings convertidas para letras maiúsculas.
const ex9 = ['Texto', 'Luz', 'Guilherme', 'teste']
let ex9V2 = []
ex9.forEach(item => {
    ex9V2.push(item.toUpperCase())
})
console.log(ex9V2)
console.log('Fim ex9')

// Dado um array de objetos representando estudantes, use forEach para imprimir no console a média das notas de cada estudante.
const ex10 = [
    {estudante: 'Jão', nota1: 8, nota2: 6},
    {estudante: 'Guilherme', nota1: 5, nota2: 10},
    {estudante: 'Pedro', nota1: 9, nota2: 8},
    {estudante: 'Alex', nota1: 10, nota2: 2}
]
ex10.forEach(item => {
    console.log(`O estudante ${item.estudante} possui as notas ${item.nota1} e ${item.nota2} e sua média é ${(item.nota1 + item.nota2) / 2}`)
})
console.log('Fim ex10')