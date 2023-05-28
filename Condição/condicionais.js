// let n = null
// console.log(typeof n)


//formas de dar falso
// if(false)
// if(0 || -0)
// if(NaN) - not a number
// if(null)
// if(undefined)
// if('' || "")
//O resto retorta true

//formas de dar true
// if(true) 
// if(1)
// if(' ') string com espaço dentro é valida
// if('Alex')
// if(-5)
// if({})

// let condi = (5 - 10) || (5 + 5)
// if(condi) { - condi retorna o primeiro valor verdadeiro do || (ou)
//     console.log("Verdadeiro" + condi)
// } else {
//     console.log("Falso")
// }

if(condição) {
    comandos
}

if(condição) {
    comandos
} else {
    comandos
}

if(condição) {
    comandos
} else if(condição) {
    comandos
} else {
    comandos
}

switch(variavel) {
    case x:
        comandos
    break

    default:
        comandos
}

//If ternario
//condição ? comandos : comandos
condição ? comandos : condição
//       if        else