const carro = {
    marca: 'marca',
    preço: 0,
}

const honda = carro;
console.log('Honda: ' + honda)
honda.marca = 'Honda'
honda.preço = 2000
console.log(honda)

const fiat = carro
fiat.marca = 'Fiat'
fiat.preço = 3000

// Está alterando o obj 'carro'

//Função construtora
//Por padrão retorna undefined 
function Carro() {
    this.marca = ''
    this.preco = 0
}

//Ao usarmos 'new' ele transforma Carro() em um obj - SEM ALTERAR O ORIGINAL
const renault = new Carro()
//alterei as propriedades
renault.marca = 'Renault'
renault.preco = 2500
//Criei uma propieddade
renault.ano = 2017

//Keyword New

const bmw = new Carro()

//1 Cria um novo obj
// bmw = {}

//2 Define o prototipo
bmw.prototype = Carro.prototype

//3 aponta a variavel this para o objeto
// this = bmw

//4 executa a função, substituindo this pelo obj
bmw.marca = 'Marca'
bmw.preco = 7000

//5 retorna o novo obj
/*
return bmw = {
    marca: 'Marca',
    preco: 0,
}
*/

//Definindo parametros
function superCarro(marca, preco) {
    this.marca = marca,
    this.preco = preco
}

const ferrari = new superCarro('Ferrari', 12000)
console.log(ferrari)

function CarroCompra(marca, precoInicial) {
    const taxa = 1.2
    const precoFinal = precoInicial + taxa
    this.desconto = precoFinal - 0.15
    this.marca = marca
    this.preco = precoFinal
}

const mazda = new CarroCompra('Mazda', 5000)
console.log(mazda)

