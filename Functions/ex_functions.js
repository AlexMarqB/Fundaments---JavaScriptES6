// Crie uma função para verificar se um valor é Truthy
console.log('Exercicio 1')
function pesoIdeal(peso) {
    console.log(typeof peso)
    if (typeof peso !== 'number') {
        console.log('Insira um valor valido.')
    } else if (peso <= 50) {
        console.log('Você está magro')
        return false
    } else if (peso >= 90) {
        console.log('Você está gordo')
        return false
    } else {
        console.log('Você está no peso ideal')
        return true
    }
}
console.log(pesoIdeal(78))

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
console.log('Exercicio 2')
function perimetroQuadrado(lado) {
    let p = lado * 4
    return `O perimetro do quadrado é ${p} metros.`
}
console.log(perimetroQuadrado(3))

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
console.log('Exercicio 3')
function nomeCompleto(nome, sobrenome) {
    if (typeof nome !== 'string' && typeof sobrenome !== 'string') {
        return 'Seu nome e sobrenome são invalidos'
    } else if (typeof nome !== 'string' && typeof sobrenome === 'string') {
        return 'Seu nome é invalido.'
    } else if (typeof nome === 'string' && typeof sobrenome !== 'string') {
        return 'Seu sobrenome é invalido.'
    } else if (typeof nome === 'string' && typeof sobrenome === 'string') {
        return `Olá ${nome} ${sobrenome}`
    }
}
console.log(nomeCompleto('Alex', 'Marques'))

// Crie uma função que verifica se um número é par
console.log('Exercicio 4')
function testePar(n) {
    if (n % 2 == 0) {
        return 'É par'
    } else {
        return 'É ímpar'
    }
}
console.log(testePar(2))

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
console.log('Exercicio 5')
function tipoDeDado(dado) {
    return `O tipo da variavel ${dado} é ${typeof dado}`
}
console.log(tipoDeDado(9))

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
console.log('Exercicio 6')
function mostrarNome(nome1, sobrenome1) {
    console.log(`${nome1} ${sobrenome1}`)
}
console.log(mostrarNome('Alex', 'Marques'))
//addEventListener('scroll', mostrarNome)

// Corrija o erro abaixo
console.log('Exercicio 7')
function precisoVisitar(paisesVisitados) {
    var totalPaises = 193;
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }
  function jaVisitei(paisesVisitados) {
    //Não estava declarado a variavel "total paises" dentro desta function
    var totalPaises = 193
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
  