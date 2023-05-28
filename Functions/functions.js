function areaQuadrado(lado) {
    return lado * lado
}

//chama a função dando o parametro pra ela
// console.log(areaQuadrado(4)) // me retorna 16
// console.log(areaQuadrado(5)) // me retorna 25
// console.log(areaQuadrado(2)) // me retorna 4
/*
function pi() {
    return 3.14
}

let total = 5 * pi()
console.log(total)
*/
/*
function imc(peso, altura) {
    const imc = peso / (altura ** 2)
    return imc
}
//    function(peso, altura)
console.log(imc(80, 1.7))
*/
/*
function corFavorita(cor) {
    if(cor === "azul") {
        return "Eu gosto do céu"
    } else if (cor === "verde") {
        return "Eu gosto de mato"
    } else {
        return "Eu não gosto de cores"
    }
}
console.log(corFavorita("azul"))
*/

//Callback - Função que ocorre após algo 
//Argumentos podem ser funções 
//Parametros -  evento, função(anonima) que será executada
/*
addEventListener("click", function() {
    console.log("Clicou")
})
*/
/*
function mostraConsole() {
    console.log("oi")
}
//              evento,   função, já entendida
addEventListener("click", mostraConsole)
*/
// Functions podem ou não retornar um valor, caso não haja "return" ele retorna undefined
/*
function imc(peso, altura) {
    const imc = peso / (altura ** 2)
    console.log(imc)
}

imc(80, 1.8)
*/

//É ideal que a function só retorne 1 tipo de dado
//teste de preenchimento correto
/*
function terceiraIdade(idade) {
    console.log(typeof idade)
    if (typeof idade !== 'number') {
      return 'Por favor preencha um numero.'
    } else if(idade >= 60) {
        return false
    } else {
        return false //return para a function completamente
    }
}
console.log(terceiraIdade(70))
//console: true ou false
*/

//Escopo - variaveis let criadas dentro de functions só são lidas dentro dela
/*function faltaVisitar(paisesVisitados) {
    let totalPaises = 193
    return `Faltam visitar ${totalPaises - paisesVisitados}.`
}
console.log(faltaVisitar(20))
console.log(totalPaises) //Undefined, pq está dentro do bloco da function
*/
/*
var profissao = 'Designer'

function dados() {
    let nome = 'Alex'
    let  idade = 18
    function outrosDados() {
        let endereço = 'São Paulo'
        let idade = 19
        //  nome foi def, idade foi substituida, profissão está do lado de fora
        return `${nome}, ${idade}, ${endereço}, ${profissao}`
    }
    return outrosDados()
}
//Desde lado de fora da função, não é possivel acessar os dados dentro do bloco da function
console.log(dados())
*/
//Hosting, antes de executar uma function o js envia as functions para a memoria
//pedir pra executar uma função em linhas antes dela ter sido declarada funciona.
/* 
imc(80, 1.8)

function imc(peso, altura) {
    const imc = peso / (altura ** 2)
    console.log(imc) 
}
*/
