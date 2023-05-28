// Encontre o maior número em um array.
const ex01 = [3, 19, 6, 8, 10, 4]
ex01.sort(function(a, b) {
    return a - b
})
console.log(ex01[ex01.length - 1])

// Encontre a soma de todos os elementos em um array.
const ex02 = [3, 4, 5, 6, 12, 98, 45]
let soma02 = 0
ex02.forEach(item => {
    soma02 = soma02 + item
})
console.log(soma02)

// Remova todos os elementos duplicados de um array.
const ex03 = ['Alex' , 'Alex', 3, 4, 3, 6, 8]
ex03.sort()

// Encontre o índice de um elemento específico em um array.
const ex04 = [1, 2 ,3 , 5, 6]
let n = 3
ex04.forEach((item, index) => {
    if(n == item) {
        console.log(index)
    }
})

// Inverta a ordem dos elementos em um array.
const ex05 = [1, 2, 3, 4, 5, 6, 7]
console.log(ex05.reverse())

// Ordene os elementos de um array em ordem crescente.
const ex06 = [1, 8, 9, 12, 3, 89] 
ex06.sort(function(a, b) {
    return a - b
})
console.log(ex06)

// Verifique se um array contém apenas números pares.
const ex07 = [2, 4, 6, 8, 10]
const ex07I = [1, 4, 6, 8, 13]
let soPar = false
console.log(ex07.length)
let teste = ex07I.find(item => {
                    if(item % 2 != 0) {
                    return true
                    }
                })
if(typeof teste != 'undefined') {
    console.log('Possui impares')
} else {
    console.log('Não possui impares')
}

// Crie um novo array com os elementos em posições ímpares de um array original.
//            0 1  2   3  4  5
const ex08 = [3, 4, 5, 1, 2, 8]
const ex08N = []
ex08.forEach((item, index) => {
        if(index % 2 != 0) {
            ex08N.push(item)
        }
})
console.log(ex08N)

// Remova todos os elementos nulos de um array.

// Junte todos os elementos de um array em uma única string.