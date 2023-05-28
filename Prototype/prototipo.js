//Objetos - protype - é uma propriedade da função que é um obj - 

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

const Alex = new Pessoa('Alex', 18)

function teste() {
    return 1+1
}
typeof teste.prototype //object

// console.log(Pessoa.prototype) //constructor
// console.log(Alex.prototype) //undefined - Alex é um obj não uma function

//funcao.prototype - podemos adicionar metodos ao objeto prototype
const obj = {
    nome: 'Alex',
    idade: 18,
}

obj.teste = 'Isso é um teste' // adicionou teste 
// console.log(obj) 

// Só ira criar 1 vez esta função - bom para testes - verifica dentro do obj depois dentro do prototype
Pessoa.prototype.andar = function() {
    return 'Pessoa andou'
}
// console.log(Pessoa.prototype)

// console.log(Alex) // Não recebe diretamente "andar" mas dentro do protipo possui andar tornando possivel acessa-lo
//Alex.andar() - executa andar

//é criado como __proto__ no js final do site
Alex.__proto__.nome // undefined - pula a analise do objeto real 

//dentro do proto do proto possui funções iternas de objs

//Construtores Nativos - Objects, Functions, Numbers, Strings são construtores nativos
//Que possuem propriedades e metodos internos que podem ser acessadas

const pais = 'Brasil' //pais.metods/properties - vindos do __proto__ do constructor String('')
const cidade = new String('Rio')

//String.prototype - pode ver todos metodos e funções e acessar elas

//charAt - caracter (index) posição 
pais.charAt(0) // B
cidade.charAt(0) // R

const listaAnimais = document.querySelectorAll('li') // Arrays tmb possuem

//Array.protype.slice.call(listaAnimais) -> transforma NodeList em Array

const listaArray = Array.prototype.slice.call(listaAnimais)
//mesma coisa
const listaArraySimples = Array.from(listaAnimais)

//Metodo objeto vs prototipo

//Object.getOwnPropertyames(Array) - pega as propriedades de array