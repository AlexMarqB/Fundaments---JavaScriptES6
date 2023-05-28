//retorne no console todas as imagens do site
const img = document.querySelectorAll('img')
console.log(img)

//Retorne no console apenas as imagens que começarem com a palavra imagem
const imgs = document.querySelectorAll('img[src^="img/imagem"]')
console.log(imgs)

//Selecione todos os links internos (onde href começa com #)
const links = document.querySelectorAll('[href^="#"]')
console.log(links)

//Selecione o primeiro h2 dentro de .animas-descricao
const primeiroH2 = document.querySelector('.animais-descricao') //seleciona autoamticamente o primeiro elemento
console.log(primeiroH2)

//Selecione o ultimo p do site
const ultimoP = document.querySelectorAll('p')
console.log(ultimoP[ultimoP.length -1])