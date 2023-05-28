//Interagir com arrays usando loops

let videoGames = ['Switch', 'PS4', 'Xbox', '3DS']
for (let v = 0; v < videoGames.length; v++) {
    console.log(videoGames[v] + " acabou ex") 
//adicionando 1 para a variavel 'v' iremos pedir sempre o valor da proxima posiçaão do array
//posição -> 0, 1, 2, 3
} 

//parar um loop com 'break'
console.log('Parando o loop')
for (let v = 0; v < videoGames.length; v++) {
    console.log(videoGames[v])
    if(videoGames[v] === 'PS4') { //aparece o PS4 no console, se pormos o 'break' antes não aparece
        console.log('Break' + " acabou ex")
        break
    }
}

//forEach - Executa um comando para cada valor do array
//metódo que executa uma função para cada item de uma array
//forma mais simples de ultilizarmos loop com array
//pode modificar
console.log('forEach' + "acabou ex")
videoGames = ['Switch', 'PS4', 'Xbox', '3DS']

//                        parametro se torna os itens do seu array
videoGames.forEach(function(item) {
    console.log(item)
})

console.log('Teste 2')
let frutas = ['Banana', 'Pera', 'Maçã', 'Abacaxi']
//                   valor, posição, nome
frutas.forEach(function(item, index, array) {
    console.log(item, index, array)
})
/* 
Banana 0 [ 'Banana', 'Pera', 'Maçã', 'Abacaxi' ]
Pera 1 [ 'Banana', 'Pera', 'Maçã', 'Abacaxi' ]
Maçã 2 [ 'Banana', 'Pera', 'Maçã', 'Abacaxi' ]
Abacaxi 3 [ 'Banana', 'Pera', 'Maçã', 'Abacaxi' ]
*/

frutas.forEach(function(item, index) {
    console.log(item, index)
})
/* 
Banana 0
Pera 1
Maçã 2
Abacaxi 3
*/

frutas.forEach(function(item) {
    console.log(item)
})
/*
Banana
Pera
Maçã
Abacaxi
*/
frutas.forEach(function(item, index, array) {
    frutas.pop()
    console.log(item, index, array)
})

//Cuidado com sintaxe
let num = 0
let max = 10
//funciona só com a função, funciona porem é errado
for(;num < max;) {
    console.log(num)
    num++
}
// o certo seria
let numero = 0
let maximo = 10
while(numero < maximo) {
    console.log(numero)
    numero++
}