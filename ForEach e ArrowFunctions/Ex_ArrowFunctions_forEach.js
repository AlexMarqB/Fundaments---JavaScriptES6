//Mostre no console cada paragrafo do site
const prfs = document.querySelectorAll('p')
prfs.forEach(item => {console.log(item)})

//Mostre o texto dos paragrafos no console
prfs.forEach((item) => {console.log(item.innerText)})

//Como corrigir os erros abaixo:
/*
const imgs = document.querySelectorAll('img')

imgs.forEach(item, index => {
    console.log(item, index)
})

let i = 0 
imgs.forEach( => {
    console.log(i++)
})

imgs.forEach(() => i++)
*/
const imgs = document.querySelectorAll('img')

imgs.forEach((item, index) => {
    console.log(item, index)
})

let i = 0 
imgs.forEach(() => {
    console.log(i++)
})

imgs.forEach(() => i++) //está correto