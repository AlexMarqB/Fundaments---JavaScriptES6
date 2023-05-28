const imgs = document.querySelectorAll('img')

/* exemplo de ambos
imgs.forEach(function(parametros) {
    bloco de comandos
})
imgs.forEach((parametros) => {
    bloco de comandos
})
*/

//argumento unico não exige parenteses
imgs.forEach(item => {
    console.log(item)
})

//multiplos argumentos precisam de parenteses
imgs.forEach((item, index) => {
    console.log(item, index)
})

//sem argumentos precisa de parenteses vazio
let i = 0
imgs.forEach(() => [
    console.log(i++)
])
