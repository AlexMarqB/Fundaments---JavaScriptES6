//Constantemente iremos selecionar multiplos itens de DOM em uma lista
//E para interagirmos é preciso usar forEach

const imgs = document.querySelectorAll('img')
console.log(imgs)

//Primeiro parametro é sempre uma function
// a cada elemento do array ele ira executar a function
let i = 0
imgs.forEach(function() { 
    console.log(i++)
})
// 0 1 2 3 4 5 6 
// parametros: 1ª - item atual 2ª - posição do item na array(0, 1, 2, 3) 3ª - array completo
imgs.forEach(function(item, index, array) {
    console.log(item, index, array)
})
/*
<img src="img/imagemX.jpg" alt> index
NodeList(7) [img*7]
<img src="img/mapa.png" alt="mapa"> index
NodeList(7) [img*7]
*/

//forEach e arrays
//Array é um objeto que cria array 
//alguns array likes possuem esse metodo
const titulos = document.getElementsByClassName('titulo') //retorna HTMLCollection
//titulo forEach não funciona
const titulosArray = Array.from(titulos) //Transformou o HTMLCollection em Array
titulosArray.forEach(function(item) {
    console.log(item)
})
/*
<h1 class="titulo">Animais fantásticos</h1>
<h1 class="titulo">FAQ</h1>
<h1 class="titulo">Contato</h1>
*/