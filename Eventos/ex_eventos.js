// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a[href^="#"]')

function HandleLinkInterno(event) {
    event.preventDefault()
    //remove a classe dos outros elementos
    linksInternos.forEach(link => {
        link.classList.remove('ativo')
    })
    event.currentTarget.classList.add('Ativo')
    console.log(this.classList)
}

linksInternos.forEach(link => {
    link.addEventListener('click', HandleLinkInterno)
})

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
//                                       todos os itens dentro do body
const todosElementos = document.querySelectorAll('body *')

// function HandleElement(event) {
//      console.log(this)
//     console.log(event.currentTarget)
// }

// todosElementos.forEach(elemento => {
//     elemento.addEventListener('click', HandleElement)
// })

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// function HandleElement(event) {
//     this.remove() // ou event.currentTarget.remove()
// }

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
//crie uma classe no css 

function aumentarTexto(event) {
    if(event.key === 't') {
        console.log(event.key)
        document.documentElement.classList.toggle('textoMaior')
    }
    
}
window.addEventListener('keydown', aumentarTexto)