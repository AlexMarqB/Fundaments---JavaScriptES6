//Adicionar funções a um elemento chamdo callback que será ativado quando um evento ocorrer
const img = document.querySelector('img')

//elemnto.addEventListener(evento, callback, options)
img.addEventListener('click', function() {
    console.log('Clicou')
})

//Callback - é bom manter a callback separada do addEventListener declarando ela antes
//ultilizando o mesmo elemento acima
function callback() {
    console.log('Callback ativado')
}

img.addEventListener('click', callback) //não ative a função com ()

img.addEventListener('click', () => {
    console.log('Ativou a arrow function')
})

//Propriedades do event
const animaisLista = document.querySelector('.animais-lista')

function executarCallback(event) {
    const currentTarget = event.currentTarget // <ul class="animais-lista">...</ul>
    const target = event.target //<img src="img/(imagem clicada)" alt>
    const type = event.type // 'click'
    const path = event.path 
    console.log(currentTarget, target, type, path)
}

animaisLista.addEventListener('click', executarCallback)

//Prevent Default - alterar função padrão - metodo
//                                        link com href começando com http
const linkExterno = document.querySelector('a[href^="http"]')

function handleLinkExterno(event) {
    event.preventDefault() 
//This - palavra especial de JS que se refere a diferentes obj depenendo do contexto
//No caso de eventos ela se refere ao elemento em que o addEventListener foi add
    console.log(this) // <a href="link">Dev -></a>
    console.log(event.currentTarget) // <a href="link">Dev -></a>
    console.log(this.getAttribute('href'))
}

linkExterno.addEventListener('click', handleLinkExterno)

//Diferentes eventos
//Existem diversos eventos como click, scroll, resize, keydown, keyup, mouseenter e mais.
//Eventos podem ser adicionados a diferentes elementos, como o window e document também.
const h1 = document.querySelector('h1')

function eventos(event) {
    console.log(event.type, event)
}

// h1.addEventListener('click', eventos) // clicar com o mouse
// h1.addEventListener('mouseenter', eventos) // mouse em cima do elemento
// window.addEventListener('scroll', eventos) // rolagem do scroll
// window.addEventListener('resize', eventos) 
// window.addEventListener('keydown', eventos) // tecla apertada

function handleKeyboard(event) {
    if(event.key === 'a') {
        document.body.classList.toggle('azul')
    } else if(event.key === 'v') {
        document.body.classList.toggle('vermelho')
    }
    console.log(document.querySelector('body').classList)
}

window.addEventListener('keydown', handleKeyboard)

//forEach em Eventos
// O metodo addEventListener é adicionado a 1 unico elemento então é necessario um loop 
//entre elementos de um lista para adicionarmos a todos

const imgs = document.querySelectorAll('img') // selecionou TODAS as tagas img

function imgSrc(event) {
    const src = event.currentTarget.getAttribute('src')
    console.log(src) // img/imagemx.jpg
}

//Faz com que todas as imagens respondam ao evento
imgs.forEach(img => {
    img.addEventListener('click', imgSrc)
})