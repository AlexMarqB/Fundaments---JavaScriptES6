//Classes
const menu = document.querySelector('.menu')

menu.classList // string - nome da classe
menu.classList // lista de classes
menu.classList.add('ativo') // adiciona a classe 'ativo' dentro das classes daquele elemento
menu.classList.add('ativo', 'mobile')
menu.classList.remove('ativo') // remove a classe da classList
menu.classList.toggle('ativo') //adiciona ou remove a classe - on/off

if(menu.classList.contains('azul')) {
    menu.classList.add('Possui-Azul')
} else{
    menu.classList.add('não-possui-Azul')
}
menu.classList.contains('ativo') // true ou false - verifica a existencia da classe dentro do elemento
menu.classList.replace('ativo', 'inativo') // remove a 1 classe escrita e adiciona a outra no lugar

console.log(menu.classList)
console.log(menu.className) // retorna as classes em forma de string
console.log(typeof menu.className) // string
menu.className = 'Alteração'
console.log(menu.className)
//menu mobile inativo não-possui-Azul
//classes_atributos.js:20 string
//classes_atributos.js:22 Alteração
menu.className = menu.className + 'Alterar'
console.log(menu.className) // Alteração alterar

//Atributos
const animals = document.querySelector('.animais') // array like

console.log(animals.attributes) //retorna todos os atributos - NamedNodeMap {0: class, 1: id, class: class, id: id, length: 2}
console.log(animals.attributes[0]) //retorna o atributo do indice desejado * class="grtid-section animais"
animals.attributes.id // retorna o id
animals.attributes.class // retorna as classes
animals.attributes.length // comprimento
//para pegarmos atributos diferentes do padrão que possuam caracter especial fazemos desta forma
animals.attributes['data-texto'] // Teste

const img2 = document.querySelector('img')

img2.getAttribute('src') // value do 'src'
img2.setAttribute('alt', 'Texto alternativo') // alterou o valor de 'alt'
img2.hasAttribute('id') // true ou false
img2.removeAttribute('alt') // remove o atributo

img2.hasAttributes() //true ou false - verifica se possui atributos