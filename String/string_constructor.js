const comida = 'Pizza' //typeof - string
const liquido = new String('Água') //typeof - object: string constructor
const ano = new String(2018) //typeof - object: string constructor
console.log(typeof ano)

//Properties
comida.length //retorna o total de caracteres 
comida[0] //Array like - podemos acessar com index

const frase = 'A melhor comida'

console.log(frase[4])
//Para buscar o ultimo caracter fazemos string.length - 1
console.log(frase[frase.length - 1])

//string.charAt(index) busca o caracter no index x da mesma forma que busca por index acima
//charAt retorna "" quando não existe o caracter 
//string[index] retorna undefined
console.log(frase.charAt(frase.length - 1))

//string.concat(string1, string2, ...) - concatena as strings e retorna um resultado 
const frase2 = 'A melhor linguagem é '
const linguagem = 'Javascript'

const fraseLinguagem = frase2.concat(linguagem, '!!')
console.log(fraseLinguagem)

//str.includes(search, position) - busca uma string dentro de outra e retorna true ou false

const fruta = 'Banana'
const listaFrutas = 'Melancia, Banana, Laranja'

console.log(listaFrutas.includes(fruta)) //true
console.log(fruta.includes(listaFrutas)) //false

//a posição de busca é com base nos caractteres e ira buscar a partir daquela posição

//string.endsWith(search) e str.startsWith(search) - retorna true ou false

console.log(fruta.startsWith('Ba')) //true
console.log(fruta.startsWith('Na')) //false
console.log(fruta.endsWith('na')) // true

//string.slice(start, end) - corta a string com os valores de start e end
const transacao1 = 'Deposito de cliente'
const transacao2 = 'Deposito de fornecedor'
const transacao3 = 'Taxa de camisas'

//         index 0 a 3
transacao1.slice(0, 3) //corta 'Dep'
transacao2.slice(0,3)
transacao3.slice(0,3) //corta 'Tax'

transacao1.slice(5) // corta os 5 primeiros caracteres

console.log(transacao2.slice(0, -2)) //corta os 2 ultimos caracteres
transacao2.slice(-5) //5 ultimos caracteres

//string.indexOf(search) - retorna o index da string assim q achar o primeiro resultado; string.lastIndexOf(search) - retorna o index da string assim q achar o ultimo resultado
const instrumento = 'Bateria'

console.log(instrumento.indexOf('a')) //retorna 1 - primeiro a
console.log(instrumento.lastIndexOf('a')) //retorna 6 - ultimo a

//string.padStart(n, string) - aumenta os caracteres da string para n(se é 8 e n=10, se torna 10) - preenchidos com espaços caso não haja string no 2 parametro
//string.padEnd(n, string) - 
const str = 'Teste'
str.padStart(10)
console.log(str.length) // 5
console.log(str.padStart(10).length) // 10
str.padStart(10, 'rs')
console.log(str.padStart(10, 'rs')) //rsrsrTeste - 10 caracteres

const listaItens = ['R$ 99', 'R$ 199']

//alinhar multiplos itens
listaItens.forEach(item => {
    console.log(item.padStart(10))
})
/*
     R$ 99
    R$ 199
*/

//string.repeat(n)
const PeteRepete = 'Tinha o pete e o repete, o pete morreu quem sobrou?'

console.log(PeteRepete.repeat(2))

//string.replace(regexp|substring, newstring|function) - troca parte da string por outra podemos ultilizar regular expressions ou valor direto, se usarmos valor direto ele apenas troca o primeiro valor

let listaRoupas = 'Camisas Bonés Calça Bermuda'
console.log(listaRoupas)
                    //regular expressions que seleciona os espaços
listaRoupas = listaRoupas.replace(/[ ]+/g, ', ')
console.log(listaRoupas)

listaRoupas = listaRoupas.replace('Camisas', 'Shirts')
console.log(listaRoupas)

//substituir ',' por '.' para diferença de escrita de preços
let preco = 'R$ 1200,45'
preco = preco.replace(',', '.')
console.log(preco)

//string.split(padrao) - divide a string seguindo o padrão e retorna um array
//  separou cada item para o array neste ponto
let arrayLista = listaRoupas.split(', ')
console.log(arrayLista) //[ 'Shirts', 'Bonés', 'Calça', 'Bermuda' ]

arrayLista = listaRoupas.split(' ')
console.log(arrayLista) //[ 'Shirts,', 'Bonés,', 'Calça,', 'Bermuda' ]

arrayLista = listaRoupas.split('s') // quebrou os elementos quando vemos um s
console.log(arrayLista) //[ 'Shirt', ', Boné', ', Calça, Bermuda' ]

arrayLista = listaRoupas.split('')
console.log(arrayLista)
// [
//     'S', 'h', 'i', 'r', 't', 's',
//     ',', ' ', 'B', 'o', 'n', 'é',
//     's', ',', ' ', 'C', 'a', 'l',
//     'ç', 'a', ',', ' ', 'B', 'e',
//     'r', 'm', 'u', 'd', 'a'
//   ]

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>'
let htmlArray = htmlText.split('div')
console.log(htmlArray) //[ '<', '>O melhor item</', '><', '>A melhor lista</', '>' ]

htmlArray = htmlText.split('<div>')
console.log(htmlArray) //[ '', 'O melhor item</div>', 'A melhor lista</div>' ]

//array.join('padrão') - junta todo o array em uma string com oq for inserido no parametro (inverso do split)
const frutasArray = ['Banana', 'Maça', 'Manga']
console.log(frutasArray.join(', ')) //Banana, Maça, Manga
console.log(frutasArray.join('prop ')) //Bananaprop Maçaprop Manga

//Aplicando no DOM
//Substituir tags html
htmlArray = htmlText.split('div')
const novoHTML = htmlArray.join('section') 
console.log(novoHTML) //<section>O melhor item</section><section>A melhor lista</section>

//string.toUpperCase(index) e string.toLowerCase(index) - deixa td em maiusculo e td em minusculo

//string.trim() ; string.trimStart() ; string.trimEnd() - remove espaços em brancos do inicio ou final de uma string
const valor = '  R$ 32,00  '
valor.trim() //'R$ 32,00'
valor.trimStart() //'R$ 32,00  '
valor.trimEnd() //'  R$ 32,00'