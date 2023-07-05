//HTML Element - Todo elemento THML do DOM herda propriedades e metodos do construtor HTML Element
//HTMLHeadingElement > HTMLElement > ELement > Node > EventTarget

const div = document.querySelector('div');

//Dataset -> é uma propriedade de HTMLElement é um DOMStringMap dentro deste obj há uma coleção chave/valor com todos os atributos que começam com data-
console.log(div.dataset)

const divCor = document.querySelector('[data-cor]')
console.log(divCor)

//Exercicio
// Adicione um atributo data-anime="show-down" e
// data-anime="show-right" a todos as section's
// com descricão dos animais.
const sections = document.querySelectorAll('section')
sections.dataset = ('data-anime= show-down', 'data-anime=show-right')

// Utilizando estes atributos, adicione a classe
// show-down ou show-right a sua respectiva section
// assim que a mesma aparecer na tela (animacao tab)

// No CSS faça com que show-down anime de cima para baixo
// e show-right continue com a mesma animação da esquerda
// para a direita

// Substitua todas as classes js- por data atributes.
