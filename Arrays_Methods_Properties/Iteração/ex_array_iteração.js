// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
let cursos = document.querySelectorAll('.curso') //NodeList
cursos = Array.from(cursos) //transformei a NodeList em um array
console.log(cursos)
const mapCursos = cursos.map((curso) => {
    const titulo = curso.querySelector('h1').innerText
    const descricao = curso.querySelector('p').innerText
    const aulas = curso.querySelector('.aulas').innerText
    const horas = curso.querySelector('.horas').innerText
    //ambos returns funcionam
    return {titulo, descricao, aulas, horas}
    // return {titulo: titulo, descricao: descricao, aulas: aulas, horas: horas}
})
console.log(mapCursos)


// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const maior100 = numeros.filter(x => x > 100)
console.log(maior100)

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
const baixo = instrumentos.includes('Baixo')
console.log(baixo)


// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

const total = compras.reduce((acc, item) => {
    preco = Number(item.preco.replace('R$', '').replace(',', '.'))
    return acc + preco
}, 0)
console.log(total)