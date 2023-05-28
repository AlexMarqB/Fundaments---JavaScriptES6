//São metodos que fazem um loop na array 

//forEach(callback(itemAtual, index, array)) - é executado para cada item da array e possui 3 argumentos
//o  terceiro argumento é o proprio array e pode modificar o mesmo

const frutas = ['Maça', 'Banana', 'Pera']
frutas.forEach((item, index, array) => {
    console.log('forEach')
    console.log(item, index)
    console.log(array)
})

frutas.forEach((item, index, array) => {
    array.push(item.toUpperCase())
})
console.log(frutas) //[ 'Maça', 'Banana', 'Pera', 'MAÇA', 'BANANA', 'PERA' ]

//map(callback(itemAtual, index, array)) - similar ao foreach - porem
//o forEach - retorna undefined - porque ele tem objetivo de iteragir com o array não necessariamente altera-lo
//Já o map retorna um array com valores atualizados seguindo as modificações da callback function

const carros = ['Ford', 'Fiat', 'Honda']

carros.map((item, index, array) => {
    console.log('Map')
    console.log(item, index)
    console.log(array)
})
//responde igual ao forEach - porem ao colocarmos dentro de uma variavel
//map precisa do return para poder nos passar o array caso não haja return retorna undefined

const novosCarros = carros.map((item, index, array) => {
    return item.toUpperCase()
})
console.log(novosCarros) //[ 'FORD', 'FIAT', 'HONDA' ]

const numeros = [2, 4, 5, 6, 7]
//caso possua apenas uma linha não é preciso {} nem return 
const numerosX2 = numeros.map(item => item * 2)
console.log(numerosX2) // [ 4, 8, 10, 12, 14 ]
//como .map retorna outro array podemos usar metodos e propriedades diretamente ex:
const html = '<div>Teste de map</div>'
const newhtml = html.split('div').map((item, index, array) => array.join('a'))
//substitui todos os valores do array pelo resultado, como html.split possuia 3 valores retornou 3 copias do resultado
console.log(newhtml) // [ '<a>Teste de map</a>', '<a>Teste de map</a>', '<a>Teste de map</a>' ]

console.log(html.split('div').join('a')) //<a>Teste de map</a>

//Exemplo .map com objetos

const aulas = [
    {
        nome: 'HTML 1',
        min: 15
    },
    {
        nome: 'HTML 2',
        min: 10
    },
    {
        nome: 'CSS 1',
        min: 20
    },
    {
        nome: 'JS 1',
        min: 25
    },
]

const tempoAulas = aulas.map(aula => aula.min);
// [15, 10, 20, 25];
//                  array
const totalAulas = tempoAulas.reduce((acumulador, atual) => acumulador + atual)
console.log(totalAulas) //70

// cada item 'aula' é um obj que tem propriedades 'nome' 
const puxarNomes = aula => aula.nome; //callbacks
const nomesAulas = aulas.map(puxarNomes);
// ['HTML 1', 'HTML 2', 'CSS 1', 'JS 1']


//reduce(callback(acumulador, valorAtual, index, array), valorInicial) - precisa de return para vermos o acumulador 

const idades = [10, 34, 62]
//                                  soma       item
const totalIdades = idades.reduce((acumulador, atual) => acumulador + atual)
console.log(totalIdades) //106

//                             valor inicial do acumulador
const total2 = idades.reduce((acc, cur) => acc + cur, 34)
console.log(total2) //140

const total3 = idades.reduce((acc, item, index) => {
    console.log('Reduce: ' + acc, item, index)
    return acc + item + index
}, 100)
console.log(total3)
//Caso não exista valor inicial do acumulador ele pega o primeiro valor ex: idades = [10, 34, 62]; acumulador = 10; acumulador = 10 + 34; acumulador = 44 + 62
/*
const Exemplo = [10, 25, 30];

// 1
Exemplo.reduce((0, 10) => {
  return 0 + 10;
}, 0); // retorna 10

// 2
Exemplo.reduce((10, 25) => {
  return 10 + 25;
}, 0); // retorna 35

// 3
Exemplo.reduce((35, 30) => {
  return 35 + 30;
}, 0); // retorna 65
*/

const numbers = [10, 25, 30, 3, 54, 33, 22]

// const maiorNumero = numbers.reduce((anterior, atual) => {
//     return anterior > atual ? anterior : atual
//     if(anterior > atual) {
//         return anterior;
//     } else return atual
// })
const maiorNumero = numbers.reduce((anterior, atual) => { return anterior > atual ? anterior : atual })
console.log(maiorNumero)

//Retornar outros valores  com reduce 

const ListaAulas = [
    {
        nome: 'HTML 1',
        min: 15
    },
    {
        nome: 'HTML 2',
        min: 10
    },
    {
        nome: 'CSS 1',
        min: 20
    },
    {
        nome: 'JS 1',
        min: 25
    },
]

const lista = aulas.reduce((acc, item, index) => {
    acc[index] = item.nome
    console.log(acc)
    /*
    { '0': 'HTML 1' }
    { '0': 'HTML 1', '1': 'HTML 2' }
    { '0': 'HTML 1', '1': 'HTML 2', '2': 'CSS 1' }
    { '0': 'HTML 1', '1': 'HTML 2', '2': 'CSS 1', '3': 'JS 1' }
    { '0': 'HTML 1', '1': 'HTML 2', '2': 'CSS 1', '3': 'JS 1' }
    */
    return acc
}, {})

//acumulador = {} - objeto vazio - mesma coisa que: var acumulador = {} - podemos manipular o mesmo como: acumulador[0] = 'qlqr coisa'
console.log(lista) //{ '0': 'HTML 1', '1': 'HTML 2', '2': 'CSS 1', '3': 'JS 1' }

/* passo a passo
    // 1
    aulas.reduce(({}, {nome: 'HTML 1', min: 15}, 0) => {
    {}[0] = 'HTML 1';
    return {0: 'HTML 1'};
    }, {})

    // 2
    aulas.reduce(({0: 'HTML 1'}, {nome: 'HTML 2', min: 10}, 1) => {
    {0: 'HTML 1'}[1] = 'HTML 2';
    return {0: 'HTML 1', 1: 'HTML 2'};
    }, {})

    // 3
    aulas.reduce(({0: 'HTML 1', 1: 'HTML 2'}, {nome: 'CSS 1', min: 20}, 2) => {
    {0: 'HTML 1', 1: 'HTML 2'}[2] = 'CSS 1';
    return {0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1'};
    }, {})

    // 4
    aulas.reduce(({0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1'}, {nome: 'JS 1', min: 25}, 3) => {
    {0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1'}[3] = 'JS 1';
    return {0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1', 3: 'JS 1'};
    }, {})
*/

//reduceRight() - ele faz a mesma coisa porem da direita para esquerda - o reduce() padrão faz da esquerda para direita

//some() - Se pelo menos 1 return for truthy(pode ser verdadeira) - retorna true - como se fosse 'ou' '||', caso aja 1 True o array se torna True

const frutinhas = ['Banana', 'Pera', 'Uva', 'Kiwi']
const temUva = frutinhas.some(item => {
    console.log(item)
}) // NÃO possui return - retorna undefined - undefined é false
const temPera = frutinhas.some(item => {
    console.log(item)
    return
}) // Return vazio - retorna true
const temKiwi = frutinhas.some(item => {
    console.log(item)
    return item === 'Kiwi'
})
const temMaca = frutinhas.some(item => {
    return item === 'Maça'
})
temKiwi ? console.log('Tem kiwi') : console.log('Não tem kiwi') //tem
temMaca ? console.log('Tem Maça') : console.log('Não tem Maça') //nao tem

//every() - se todos returns forem truthy - retorna true - como se fosse 'e' '&&', somente se todos forem verdadeiros retorna verdadeiro
const frutinhas2 = ['Banana', 'Pera', 'Uva', '']
const arraysComValor = frutinhas2.every((fruta) => {
    return fruta
}) //false - pois há um valor no array vazio
arraysComValor ? console.log('Há 100% frutas') : console.log('Há valores vazios')

const numerinhos = [6, 43, 22, 88, 101, 29]
const maiorQue3 = numerinhos.every(x => x > 3) //true - todos são maiores que 3
maiorQue3 ? console.log('Todos são maiores') : console.log('Há algum que não é maior')

//find() e findIndex() - retornam o primeiro valor true e param a execução
//findIndex() - retorna o index do valor que for true para a condição da callback
const busca = ['Banana', 'Pera', 'Uva', 'Kiwi']
const IndexBusca = busca.findIndex((fruta) => {
    return fruta === 'Kiwi'
})
console.log(IndexBusca) //3

//find() - retorna o primeiro valor truthy da condição inserida na callback
const buscaMaior45 = numerinhos.find(x => x > 45)
console.log(buscaMaior45) //88

//filter() - retorna um array com uma lista de valores que são truthy em relação a callback
const dados = ['string', null, undefined, 10, 'string2']
const filtraString = dados.filter((dado) => {
    return typeof dado === 'string'
})
console.log(filtraString) //[ 'string', 'string2' ]

const buscaMaior50 = numerinhos.filter(x => x > 50)
console.log(buscaMaior50) //[ 88, 101 ]

const aulinhas  = [
    {
        nome: 'HTML 1',
        min: 15
    },
    {
        nome: 'HTML 2',
        min: 10
    },
    {
        nome: 'CSS 1',
        min: 20
    },
    {
        nome: 'JS 1',
        min: 25
    },
]
const aulaMaior10 = aulinhas.filter(aula => aula.min > 10)
console.log(aulaMaior10) // retorna o objeto porque o parametro 'aula' da callback são os objetos dentro da array aulinhas
/*
[
  { nome: 'HTML 1', min: 15 },
  { nome: 'CSS 1', min: 20 },
  { nome: 'JS 1', min: 25 }
]
*/