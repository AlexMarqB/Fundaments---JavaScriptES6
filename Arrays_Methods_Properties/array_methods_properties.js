//Arrays armazenam coleção de objetos
const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const precos = [49, 99, 69, 89];

const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome) { console.log(nome) }];

//O item 2 da array é uma função então podemos chama-la da seguinte forma
console.log(dados[2]('Alex'))

//O item 1 da array é outra array então podemos selecionar valores dessa outra array 
console.log(dados[1][2].cor) //azul

//substituir elementos da array
instrumentos[2] = 'Carron'
console.log(instrumentos[2])

//Podemos adicionar elementos em posições especificas
instrumentos[3] = 'Baixo' 
instrumentos[10] = 'Viola' //gera espaços vazios até a posição existir
console.log(instrumentos) //[ 'Guitarra', 'Baixo', 'Carron', 'Baixo', <6 empty items>, 'Viola' ]

//array.lenght - retorna o comprimento

//aarray.from
//let li = document.querySelectorAll('li') //nodelist
//li = Array.from(li) //array 

//pode ser um constructor
const carros = {
    0: 'Fiat',
    1: 'Honda',
    2: 'Ford',
    length: 4
}

const carrosArray = Array.from(carros) 
console.log(carrosArray) // [ 'Fiat', 'Honda', 'Ford', undefined ]

const n = Array.of('prop') //é preciso dizer especificadamente quais elementos iram para nova array
console.log(n)

Array(20) // cria um array com 20 itens

//Metodos modificadores de array

const frutas = ['Banana', 'Uva', 'Abacaxi']
const idades = [12, 45, 98, 32]

//.sort() organiza pelo unicode
console.log(frutas)
frutas.sort()
console.log(frutas)

//usa caracteres para ordenar numeros 
console.log(idades)
idades.sort()
console.log(idades)

//unshift() e push()

//unshift() adiciona elementos no inicio da array e retorna o lenght
console.log(frutas)
frutas.unshift('Pera')
console.log(frutas)

//push() adiciona elementos no final da array e retorna o lenght
frutas.push('Amora')
console.log(frutas)

//shift() e pop()
//oposto de unshift e push

//pop() remove elementos do fim da array e retorna o mesmo
frutas.pop()
console.log(frutas)

//shift() remove elementos do inicio da array e retorna o mesmo
frutas.shift()
console.log(frutas)

// reverse() - inverte a ordem da array
const ordem = [1, 2, 3, 4]
ordem.reverse()
console.log(ordem)

//splice(index, remover, item1, item2, ...) - adiciona valores na array a partir do index - retorna a quantidade de itens q foi passado no 2 parametro
const carrinhos = ['Ford', 'Fiat', 'VW', 'Honda'];
carrinhos.splice(1, 0, 'Kia', 'Mustang'); // []
carrinhos; // ['Ford', 'Kia', 'Mustang', 'Fiat', 'VW', 'Honda']

carrinhos.splice(3, 2, 'Ferrari'); // ['Fiat', 'VW']
carrinhos; // ['Ford', 'Kia', 'Mustang', 'Ferrari', 'Honda']

//copyWithin(alvo, inicio, final) - a partir do alvo ele irá copiar a array do inicio ao final e ira preencher a mesma com essa copia
// caso omita os valores de inicio e final ele usa inicio como 0 e o final como o fim dda array
//a partir do alvo eu quero repetir uma copia da minha array apartir do inicio até o final

console.log(
    //                 alvo 
    ['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(2, 0, 3)
    // [ 'Item1', 'Item2', 'Item1', 'Item2' ]
)
console.log(
//inicio alvo 
    [0, 1, 2, 3, 4, 5].copyWithin(2, 0, 2) //[ 0, 1, 0, 1, 4, 5 ]
    //    fim 
)

//fill(valor, inicio, final) - preenche a array com valor de inicio ao fim
//se inserir index 0 ele preenche todo o array
console.log(
    ['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 1)
    //[ 'Item1', 'Banana', 'Banana', 'Banana' ]
)
console.log(
    ['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 1, 3)
    //[ 'Item1', 'Banana', 'Banana', 'Item4' ]
)

//Acess methods não modificam a array original só retornam uma array modificada
//concat() - concatena arrays
const transporte1 = ['Barco', 'Aviao'];
const transporte2 = ['Carro', 'Moto'];
const transportes = transporte1.concat(transporte2);
// ['Barco', 'Aviao', 'Carro', 'Moto'];

//                  array vazia
const maisTransportes = [].concat(transporte1, transporte2, 'Van');
// ['Barco', 'Aviao', 'Carro', 'Moto', 'Van'];

//includes(valor) ; indexOf(valor) ; lastIndexOf(valor)
//includes(valor) - verifica se o array possui o valor retorna true ou false
const ling = ['html', 'js', 'c#', 'python', 'c#',  'js']
console.log(ling.includes('js')) // true
console.log(ling.includes('c++')) // false 

//indexOf(valor) - verifica se o valor existe na array e retorna o index do primeiro valor encontrado
console.log(ling.indexOf('js')) // 1
console.log(ling.indexOf('c#')) // 2

//lastIndexOf(valor) - verifica se o valor existe na array e retorna o index do ultimo valor encontrado
console.log(ling.lastIndexOf('js'))  // 5
console.log(ling.lastIndexOf('c#')) // 4

//join(separador) - transforma a array em uma  string unica 
const linguagens = ['html', 'css', 'js', 'php', 'python']
linguagens.join(); // 'html,css,js,php,python'
linguagens.join(' '); // 'html css js php python'
linguagens.join('-_-'); // 'html-_-css-_-js-_-php-_-python'

let htmlString = '<h2>Título Principal</h2>'
htmlString = htmlString.split('h2');
// ['<', '>Título Principal</', '>']
htmlString = htmlString.join('h1');
// <h1>Título Principal</h1>

//slice(inicio, final) - retorna os itens da array do inicio ao fim
linguagens.slice(3) //['php', 'python']
linguagens.slice(1, 3) // ['css', 'js', 'php']

//clonar array 
const cloneLinguagens = linguagens.splice()
//caso tente clonar sem o splice() 
const cloneLinguagens2 = linguagens
//toda alteração que linguagens receber o clone tmb recebe(pop, unshift, push)