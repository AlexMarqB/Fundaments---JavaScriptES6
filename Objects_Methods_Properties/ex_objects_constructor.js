// Crie uma função que verifique
// corretamente o tipo de dado
function verificar(obj) {
    const tipo = typeof obj
    return tipo.prototype.isPrototypeOf(obj)
}
const test = ['teste']
//console.log(verificar(test))
// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável
const quadrado = {
    lados: 4
}
Object.defineProperties(quadrado, {
    lados: {
        value: 4,
        configurable: false
    }
}) 

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
    width: 800,
    height: 600,
    background: '#333'
  }
Object.freeze(configuracao)
  
  // Liste o nome de todas
  // as propriedades do
  // protótipo de String e Array
  console.log(Object.getOwnPropertyNames(String.prototype))
  console.log(Object.getOwnPropertyNames(Array.prototype))
  