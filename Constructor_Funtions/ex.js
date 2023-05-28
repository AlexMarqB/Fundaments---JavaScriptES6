function carro(marca, preco, ano) {
    this.marca = marca
    this.preco = preco
    this.ano = ano
}

const ferrari = new carro('Ferrari', 20000, 2020)
console.log(ferrari)

const volkswagen = new carro('Volkswagen', 12000, 2019)
console.log(volkswagen)

function lista(fruta, preco, qnt) {
    this.fruta = fruta
    this.preco = preco
    this.qnt = qnt
}

const ListaFrutas = [
    {
    nome: 'banana',
    preco: 100
    }
]

console.log(maca)
