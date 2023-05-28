// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
let brasilGanhou = [1959, 1962, 1970, 1994, 2002]

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
for(let v = 0; v < brasilGanhou.length; v++) {
    console.log(`O brasil ganhou a copa no ano de ${brasilGanhou[v]}`)
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
let frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
for(let f = 0; f < frutas.length; f++) {
    console.log(frutas[f])
    //valor respectivo da posição(f)
    if (frutas[f] === 'Pera') {
        break
    }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
let ultimaFruta = frutas[4]
console.log(ultimaFruta)

//indução finita

//       calculo            (2 * (i * i))
let k = 10
for(let i = 0; i < 20 ; i++) {
    let n = [(4*k++) - 2]
    console.log(n)
}