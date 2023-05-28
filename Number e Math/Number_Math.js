//Number é uma constructor function de numeros que possuem as propriedades e metodos de Number
const ano = 2018
const preco = new Number(99)

//Direct metods
//number.isNaN() - não faz parte do proptotype - verifica se não é um number
//number.isInteger() - verifica se é uma integral

Number.isNaN(NaN) //true
Number.isNaN('string') //true
Number.isNaN(2 + 2) //false

//2 tipos de numeros
//Float - possui decimal 
//Int - integral não possui decimal
Number.isInteger(20) //true
Number.isInteger(23.4) //false

//Number.parseFloat() = retornarmos um numero a partir de uma string - a stirng deve começar com um numero
//Number.parseInt() = retorna um numero a partir de uma string na base desejada(binario[2], octal[8],...)


parseFloat('99.50') //Mesma função sem o number
console.log(parseFloat('99.50')) // converte em number
console.log(parseFloat('99.50 reais')) //converte os primeiros numeros conectados em number e remove string
console.log(parseInt('100.23 reais')) //converte os primeiros numeros conectados em number e remove casas decimais e string
console.log(parseFloat('R$99.50')) //NaN
console.log(parseInt('R$99.50')) //NaN

parseInt('99.50', 10) // converte a string na base decimal

//Number.toFixed(decimais) - arredonda o numero com base no total de casa decimais
let valorDecimal = 6.99
//Argumento vazio arredonda para o inteiro mais proximo
console.log(valorDecimal.toFixed())
valorDecimal = 5.982
console.log(valorDecimal.toFixed(2)) // 5.98

//n.toString(radix) - transforma o numero em uma string com base escolhida(binaria[2], octal[8], decimal[10], hexadecimal[16])
//conversor de bases.

//number.toLocaleString(linguagem, options) - formata o numero de acordo com lingua e opções
const precoNew = 99.50
console.log(precoNew.toLocaleString('en-US', {style: 'currency', currency: 'USD'})) //$99.50
console.log(precoNew.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})) //R$ 99,50

// Object - Math - possui metodos e propriedades
console.log(Math.PI)
//é o mesmo que
const Matematica = {
    PI: 3.14
}
console.log(Matematica.PI)

// TEM METODO E PROPERTIS PRA KRL

Math.abs(-5.5); // 5.5 - Modulo - deixa td positivo
Math.ceil(4.8334); // 5 - Arredondar para inteiro sempre para cima 
Math.ceil(4.3); // 5
Math.floor(4.8334); // 4
Math.floor(4.3); // 4
Math.round(4.8334); // 5
Math.round(4.3); // 4

Math.max(5,3,10,42,2); // 42
Math.min(5,3,10,42,2); // 2

Math.random(); // 0.XXX
Math.floor(Math.random() * 100); // entre 0 e 100
Math.floor(Math.random() * 500);  // entre 0 e 500

// Número random entre 72 e 32
Math.floor(Math.random() * (72 - 32 + 1)) + 32; 
Math.floor(Math.random() * (max - min + 1)) + min;
