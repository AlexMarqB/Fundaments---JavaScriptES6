/* Estrutura de seleção */
// por id

const animais = document.getElementById('animais')
//Mostra no console do navegador
console.log(animais)
//Pode pegar propriedades desejadas
//console.log(animais.innerText) //Mostra o texto interno do elemento com id 'animais'

//Classe e tag - retornam HTMLCollection que funciona similar a uma array

//Seleciona lista de elementos - todos que possuirem essa classe - se mantem atualizada caso algum novo elemento receba a classe
const gridSection = document.getElementsByClassName('grid-section')

// Se for inserido 2 classes só será lido elementos com ambas as classes
const contato = document.getElementsByClassName('grid-section contato')

//Por tag, seleciona TODOS os elementos daquela tag (ex: h1, p, ul, div)
//Retorna no formato similar a arrays
const ul = document.getElementsByTagName('ul')

console.log(gridSection)

//É possivel acessar os elementos desejados com index [x]
/*
console.log(gridSection[i])
console.log(gridSection.length)
*/

//Seletor geral Unico - querySelector - retorna o primeiro elemento que combinar com o seletor css
const animaisQ = document.querySelector('.animais') //class
const contatoQ = document.querySelector('#contato') //id
const ulitmoItem = document.querySelector('.animais-lista li:last-child') //ultimo 'li' dentro do elemento com classe animais-lista
const linkCSS = document.querySelector('[href^="https://"]') //seleciona todo item que tiver href e que começa com algum valor 
const primeiroUl = document.querySelector('ul') //tag

//selecionar dentro de outras variaveis que receberam seleções
const navItem = primeiroUl.querySelector('li')

//Diferença entre HTMLCollection e NodeList - 
//Atualiza conforme novos elementos aparecem com a classe especificada
const gridSectionHTML = document.getElementsByClassName('grid-section') //Retorna uma HTMLCollection
console.log(gridSectionHTML)
/*
HTMLCollection(3) [section#animais.grid-section.animais, section#faq.grid-section.faq, section#contato.grid-section.contato, 
animais: section#animais.grid-section.animais, faq: section#faq.grid-section.faq, contato: section#contato.grid-section.contato]
*/

//Não atualiza conforme novos elementos aparecem com a classe especificada
const gridSectionNode = document.querySelectorAll('.grid-section') //retorna NodeList
console.log(gridSectionNode)
/*
NodeList(3) [section#animais.grid-section.animais, section#faq.grid-section.faq, section#contato.grid-section.contato]
*/ 

//Array-Like
gridSectionHTML.for //Não é um array like
gridSectionNode.forEach(function(item, index) { // é um array-like
    console.log(item, index)
}) 

//Transformar array like em array

const arrayGrid = Array.from(gridSectionHTML) //transforma o HTMLColletion em uma array estática

arrayGrid.forEach(function(item) {
    console.log(item)
})