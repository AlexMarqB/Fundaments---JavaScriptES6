//Verifique a distancia da primeira imgagem em relação ao top da pagina

const primeiraImg = document.querySelector('img')
console.log(primeiraImg.offsetTop)

//Retorne a soma da largura de todas as imagens
function somaImagens() {
    const todasImgs = document.querySelectorAll('img')
    let somaWidth = 0
    todasImgs.forEach(item => {
        somaWidth = somaWidth + item.offsetWidth //soma a borda da imagem
    })
    console.log(somaWidth)
}
//Evento de execução apenas quando a pagina toda carregar
window.onload = function() {
    somaImagens()
}

//Verifique se os links da pagina possuem -
//o minimo recomendado para telas ultilizadas com o dedo (48px/48px de acordo com o google)
const links = document.querySelectorAll('a')

links.forEach(item => {
    const linkWidth = item.offsetWidth
    const linkHeight = item.offsetHeight
    if(linkWidth >= 48 && linkHeight >= 48) {
        console.log(`${item} possui acessibilidade`)
    } else {
        console.log(`${item} Não possui acessibilidade`)
    }
})

// Se o browser for menor do que 720px adicione a classe menu-mobile ao menu

const browserSmall = window.matchMedia('(max-width: 720px)').matches

if(browserSmall) {
    const menu = document.querySelector('.menu')
    menu.classList.add('menu-mobile')
}