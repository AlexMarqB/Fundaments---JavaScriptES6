// Retorne um número aleatório
// entre 1050 e 2000
console.log(Math.floor(Math.random() * (2000 - 1050 + 1) + 1050))

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
const numerosArray = numeros.split(', ')
// ... como se fosse um for each
console.log(Math.max(...numerosArray))





// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222', 'R$ 230  ', 'r$  200'];
const precosLimpos = []
let soma = 0
listaPrecos.forEach(item => {
    item = item.toUpperCase().trim().replace(',' , '.')
    valor = Number(item.replace('R$', '')).toFixed(2)
    soma = soma + Number(valor)
    precosLimpos.push(`R$ ${valor}`)
    
})
console.log(precosLimpos)
console.log(soma)

//solução 2 - 

function LimparPreco(preco) {
    preco = +preco.toUpperCase().replace('R$', '').trim().replace(',', '.')
    preco = +preco.toFixed(2)
    return preco
}

listaPrecos.forEach(preco => {
    soma += LimparPreco(preco)
})
console.log(listaPrecos)
console.log(soma.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))