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

//gerador de sequencia e resultado de indução finita

//constante usada de inicio
let k = 1
//soma dos resultados finais
let soma = 0
//quantas vezes deseja fazer
const cont = 10
//como quer receber os dados
let p = 's'
let armSeq = []

for(let i = 0; i <= cont ; i++) {
//          calculo padronizado
    let n = [(9*k++) - ((2*k++) -1)]
    soma = Number(soma) + Number(n)
    if (p === 'sequencia' || p === 'Sequencia' || p === 'S' || p === 's') {
        console.log(`O valor atual na posição ${i} é ${n}, a soma de todos os valores é: ${soma}`)
        armSeq.push(soma)
    } else if (p=== 'unico' || p === 'Unico' || p === 'U' || p === 'u') {
        if (i == cont) {
       console.log(`O valor atual na posição k = ${i} é ${n}, a soma de todos os valores é: ${soma}`)
        }
    } else if (i == cont){
        console.log("Você precisa definir se deseja a sequencia completa('sequencia') ou se deseja apenas o fim('unico')")
    }
}
console.log(armSeq)
