//As funções também são criadas pelo construtor Function e herda sua propriedades e meodos

function areaQuadrado(lado) {
    return lado * lado
}

const perimetroQuadrado = new Function('lado', 'return lado * 4')

function somar(n1, n2) {
    return n1 + n2
}
console.log(somar(3,3)) //6 - Number

function somarA(n1, n2) {
    return n1 + n2 + '' //somando com string vazia se torna uma array
}

console.log(somarA(3,3).charAt(0)) //6 - array
console.log(somarA(3,3).charAt(2)) //6 - array

//Para buscarmos metodos de função devemos falar com a function em si não com o valor retornado por ela
somar //função
console.log(somar.length) //quantidade de parametros
console.log(somar.name) //retorna o nome 'somar' em forma de string(pode se usar propriedades de string)

//Methods

//call(this, arg1, agr2, ...) - executa a função sendo possivel passarmos novas referencias ao this da mesma

function darOi() {
    console.log('Oi')
}

darOi.call() //oi - não podemos executar a função 'darOi()' pq ai estariamos exigindo  return dela que neste caso seria undefined

//Podemos passar novo this - this é referente ao obj q foi criado no momento da construção da função
darOi.call({}) //objeto puro não altera pois não se refere aos parametros da função
//Os argumentos adicionados apos isso serão referentes aos parametros da function
function falarNome(nome) {
    console.log(`Oi ${nome}`)
}
falarNome.call(null, 'Alex') //oi Alex

const carro = {
    marca: 'Ford',
    ano: 2019
}

function descreverCarro() {
    console.log(this.marca + ' ' + this.ano)
}
descreverCarro() //undefined undefined
descreverCarro.call() // undefined undefined
//this se torna 'carro'
descreverCarro.call(carro) // Ford 2019

const carrosArray = ['Ford', 'Fiat', 'BMW']
const frutasArray  = ['Banana', 'Pera', 'Uva']
//                          this
carrosArray.forEach.call(carrosArray, (item) => {
    console.log(item)
})
//                 this se torna frutas array
carrosArray.forEach.call(frutasArray, (item) => {
    console.log(item)
}) 
//Banana
//Pera
//Uva

//Exemplo real sobre call

function Dom(seletor) { //função construtora
    this.element = document.querySelector(seletor)
}

Dom.prototype.ativo = function(classe) {
    console.log(this) //Dom {element: ul}
    this.element.classList.add(classe)
}

const ul = new Dom('ul')

const li = {
    element: document.querySelector('li'),
}
//se o 1 arg passado for null transforma this em window - devemos transformar o this em outro objeto similar ao original
//ul.ativo.call(null, 'ativo')

ul.ativo.call(li, 'ativo') //{element: li}

console.log(ul)

//apply(this, arg1, agr2, ...) - igual ao call porem os argumentos são em array
//podemos ultilizar null como this caso a função n dependa do obj para functionar
const numeros = [1, 2, 3, 4, 5]
Math.max.apply(null, numeros) //
Math.max.call(null, 1, 2, 3, 4, 5) //

const liNodeList = document.querySelectorAll('li')

function itemPossuiAtivo(item) {
    return item.classList.contains('ativo');
}

const filtro1 = Array.prototype.filter.call(liNodeList, itemPossuiAtivo)
//No apply PRECISO por a Function em array
const filtro2 = Array.prototype.filter.apply(liNodeList, [itemPossuiAtivo])

//bind(this, arg1, arg2, ...) - retorna uma outra function

const filtrarLi = Array.prototype.filter.bind(li, function (item) {
    return item.classList.contains('ativo');})
    
console.log(filtrarLi) //function 

const $ = document.querySelectorAll.bind(document)
console.log($) //ƒ querySelectorAll() { [native code] }
const $2 = document.querySelectorAll.bind(document, 'li')
console.log($2)

const carrin = {
    marca: 'Ford',
    ano: 2019,
    acelerar(aceleracao, tempo) {
        return `${this.marca} acelerou ${aceleracao} em ${tempo}`
    }
}

const honda = {
    marca: 'honda'
}

const acelerarHonda = carrin.acelerar.bind(honda)
console.log(acelerarHonda(300, 23)) //
console.log(carrin.acelerar)

//Argumentos Comuns - podemos passar argumentos padrões para um função e retornar uma nmova função

function imc(altura, peso) {
    return peso / (altura * altura)
}

// definiu o 1 argumento da função 'imc' como 1.80 
const imc180 = imc.bind(null, 1.80)
// chamou a função com 1 argumento livre
console.log(imc(1.80, 70)) //21.604938271604937
// chamou a função com 1 argumento fixo '1.80'
console.log(imc180(70)) //21.604938271604937