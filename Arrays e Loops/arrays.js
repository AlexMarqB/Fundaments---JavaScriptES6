//grupo de valores relacionados, servem para guardar diversos valores em 1 variavel
let videoGames = ['Switch', 'PS4', 'XBOX']
//                   0         1       2
videoGames[0] //Switch
videoGames[1] //PS4
console.log(`${videoGames[0]} e ${videoGames[1]} e ${videoGames[2]}`)
//Metodos e propriedades de Arrays
console.log(videoGames) // [ 'Switch', 'PS4', 'XBOX' ]
videoGames.pop() // remove o ultimo item e retorna ele
videoGames.push('3DS') // adiciona um valor na ultima posição do array
console.log(videoGames) // [ 'Switch', 'PS4', '3DS' ]
videoGames.length // retorna quantos itens existem dentro da array
//casos de string
let str = 'Alex'

/*
str.split('') // divide os caracteres da string
str.join('') // junta novamente em 1 string
str.sort() //deixa os elementos em ordem alfabetica
*/


//O for loop possui 3 partes
//incio, condição, incremento
console.log(1)
console.log(2)
console.log(3)
console.log('acabou')

// var ultiliza, condição, ação //Se n < 10 ele ira executar n++ e refazer a verificação
//gastam muito da maquina
//se estiver sem incremento ele ira executar infinitamente - crashar a maquina
console.log('for')
for (let n = 0; n <= 10; n++) {
    console.log(n) // 0 1 2 3 4 5 6 7 8 9 10
    }

//while loop
console.log('While:')
let n1 = 0
while (n1 <= 30) {
    console.log(n1)
    n1 = n1 + 5
}
// 0 5 10 15 20 25 30
const arrayTest = [1, 2, 3, 4, 5]
// indice q desejo inserir o valor, oq desejo remover, valor a ser inserido
arrayTest.splice(1, 0, 89)
//adiciana novo elemento sem remover
console.log(arrayTest)
arrayTest.splice(1, 2, 90)
//adiciona novo elemento removendo '2'
console.log(arrayTest)