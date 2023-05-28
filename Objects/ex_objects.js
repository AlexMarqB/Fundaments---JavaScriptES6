// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
let dados = {
    nome: 'Alex Marques',
    idade: 18,
    altura:1.83,
}

// Crie um método no objeto anterior, que mostre o seu nome completo
dados.mostrarNome = function() {
    console.log(this.nome)
}
dados.mostrarNome()

// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
  }
carro.preco = 3000
console.log(carro.preco)
  
  // Crie um objeto de um cachorro que represente um labrador,
  // preto com 10 anos, que late ao ver um homem
let cachorro = {
    race: 'labrador',
    color: 'preto',
    age: 10,
    late(pessoa) {
        if (pessoa === 'homem') {
            console.log('latir')
        } else {
            console.log('nada')
        }
    }
}
cachorro.late('homem')