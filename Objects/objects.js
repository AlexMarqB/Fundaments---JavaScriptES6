//Objeto é um conjunto de variaveis e funções
//objeto é declarado como uma variavel, ao abrir chaves é reconhecido como objeto
//servem para organizar o codigo em pequenas partes que podem ser re-ultilizadas
//sintaxe {} - ao ter chaves ele é um objeto
//para acessarmos a propriedades de um objeto usamos '.'(ponto)
var pessoa = {
    //propriedades
    nome: 'Alex',
    idade: 18,
    profissão: 'Designer',
    possuiFaculdade: true,
}

console.log(pessoa.nome) //'Alex'
console.log(pessoa.idade) //18
console.log(pessoa.profissão) //'Designer'
console.log(pessoa.possuiFaculdade) //true

var quadrado = {
    //propriedade
    lados: 4,
    //metódo
    // função de nome 'area' - são propriedades/metódos
    area: function(lado) {
        return lado * lado
    },
    //metódo/function
    perimetro(lado) {
        // 'this' se refere a alguma propriedade do objeto this.propriedade
        // 'this' é o proprio objeto 
        return this.lados * lado
    },
} 

console.log(quadrado.lados) //4
console.log(quadrado.area(5)) // 25
console.log(quadrado.perimetro(5)) // 20
console.log(quadrado) //{ lados: 4, area: [Function: area], perimetro: [Function: perimetro] }

//objeto nativo 'math'
Math.PI // 3,14
Math.random() // num aleatorio

var pi = Math.PI
console.log(pi) //3.141592653589793
console.log(Math.random()) // x.yabc...
let n = Math.random() // n recebe x.yabc...
console.log(n)
//console é um objeto, 'log' é um metodo
// .table organiza objetos
console.table(pessoa) 
/*
┌─────────────────┬────────────┐
│     (index)     │   Values   │
├─────────────────┼────────────┤
│      nome       │   'Alex'   │
│      idade      │     18     │
│    profissão    │ 'Designer' │
│ possuiFaculdade │    true    │
└─────────────────┴────────────┘
*/

let menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84E',
}
console.log(menu.backgroundColor) // '#84E'
//Substitui a valor da propriedade
menu.backgroundColor = '#000'
console.log(menu.backgroundColor) // '#000'
//adicionar propriedades ao objeto
menu.color = 'blue'
console.log(menu.color)
menu.esconder = function() {
    console.log('Escondi')
}
console.log(menu.esconder())
//Objeto nativo - Object - é uma função
//te faz herdar metodos do object nativo
//Object.hasOwnProperty('Propriedade') - True ou False
//testa se a propriedade foi criada diretamente neste objeto
console.log(menu.hasOwnProperty('backgroundColor'))
//string possui propriedades e metodos
'string'.length //total de caracteres
Number.length //total de casas