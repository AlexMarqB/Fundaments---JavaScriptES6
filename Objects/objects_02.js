/*
let nome = 'Alex'

//Objeto string herda propriedades do object 'constructor'
//Metódos não modificam a variavel original
nome.length //4
// pega o caracter da posição pedida: 0,1,2,3,4
nome.charAt(0)//A
// troca alguma parte da string por outra
nome.replace('ex' , 'ix') // Alex -> Alix
*/

let nome = 'Alex'
//metódo -> metódo()
nome.toLocaleUpperCase() // transforma em letra minuscula
//propriedade -> propriedade {sem parenteses}
nome.length

//para guardarmos o resultado de um metódo devemos declarar outra variavel ex
nome // 'Alex'         Metódo precisa do ()
let nomeMaiusculo = nome.toLocaleUpperCase()
console.log(nome) // Alex
console.log(nomeMaiusculo) // ALEX
console.log(nome.toUpperCase()) // ALEX

//Converter tipo de dado - toString
//Arredondar - toFixed
let n = 1.8
console.log(n.toFixed()) // 2
console.log(n.toString()) // '1.8'
let s = n.toString() 
console.log(`${s} ${typeof s}`)
let n1 = 1.2
console.log(n.toFixed()) // 1
let n2 = 1.234
console.log(n2.toFixed()) // 1
console.log(n2.toFixed(2)) // limita as casa decimais

// Funções possuem metodos e propriedades
function areaQuadrado(lado) {
    return lado * lado
}

areaQuadrado.toString() //transforma toda a function em 1 string
console.log(areaQuadrado.length) // retorna o total de argumentos = 1