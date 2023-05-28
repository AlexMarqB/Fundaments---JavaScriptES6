//Height e width
const section = document.querySelector('.animais')

//Width
section.clientWidth // Width + padding
section.offsetWidth // Width + padding + border
section.scrollWidth // Width total, mesmo dentro do scroll

//Height
section.clientHeight // height + padding
section.offsetHeight // height + padding + border
section.scrollHeight // height total, mesmo dentro do scroll

const listaAnimais = document.querySelector('.animais-lista')

const height = listaAnimais.scrollHeight
const animaisTop = listaAnimais.offsetTop  // distancia entre o elemento e o topo da pagina em PX
console.log(animaisTop)

const primeiroH2 = document.querySelector('h2')
const h2left = primeiroH2.offsetLeft
console.log(h2left )

const rect = primeiroH2.getBoundingClientRect() // "grifa" o elemento e retorna as dimensões - objeto
console.log(rect) //DOMRect 7
//Por ser um objeto podemos fazer seleção especifica
console.log(rect.height)
console.log(rect.y)

//Window

window.innerWidth // width da janela
window.outerWidth // soma dev tools tmb(console do navegador)
window.innerHeight // height da janela
window.outerWidth // soma da barra de endereço(barra de favoritos, url, etc)

window.pageYOffset // distancia total do scroll horizontal
window.pageXOffset // distancia total do scroll vertical

if(window.innerWidth < 600) {
    console.log('Tela menor que 600px')
}

const small = window.matchMedia('(max-width: 600px)') // só sera true caso a tela tenha menos de 600px - baseado em css

if(small.matches) {
    console.log('Tela menor que 600px')
} else {
    console.log('Tela maior que 600px')
}