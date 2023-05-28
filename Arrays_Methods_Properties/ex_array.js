const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
const comidasValor1 = comidas.shift()
console.log(comidasValor1)
// Remova o último valor de comidas e coloque em uma variável
const comidasValorFim = comidas.pop()
console.log(comidasValorFim)
// Adicione 'Arroz' ao final da array
comidas.push('Arroz')
console.log(comidas)
// Adicione 'Peixe' e 'Batata' ao início da array
comidas.unshift('Peixe', 'Batata')
console.log(comidas)

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
estudantes.sort()
// Inverta a ordem dos estudantes
estudantes.reverse()
// Verifique se Joana faz parte dos estudantes
estudantes.includes('Joana')
// Verifique se Juliana faz parte dos estudantes
 estudantes.includes('Juliana')

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join
let newHtml = html.split('section').join('ul').split('div').join('li')
console.log(newHtml)


const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
const cloneCarros = carros.splice()