// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const section = document.querySelectorAll('p') //NodeList
const arraySection = Array.from(section)
const caracteres = arraySection.reduce((acc, item) => acc = item.innerText.length)
console.log(caracteres)

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function renderHTML(tag, classe, conteudo) {
    return `<${tag} class="${classe}">${conteudo}</${tag}>`
}
const div = renderHTML('div','render', 'Teste')
console.log(div) //<div class="render">Teste</div>


// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico
const renderH1 = renderHTML.bind(null, 'h1')
console.log(renderH1('render','Teste')) //<h1 class="render">Teste</h1>