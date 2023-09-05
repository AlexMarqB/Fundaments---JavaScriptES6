//API -> Interface de Aplicação - podemos interagir com elas com comandos 
//Fetch API - permite fazermos requisições HTTP atraves do metodo fetch() - EXIGE um live server
//Retorna uma resolução de uma Promise que podemos ultilizar o then para interagirmos com a resposta que é um objeto do tipo response

const doc = fetch('./doc.txt')
doc.then(resolucao => {
   console.log(resolucao) //Objeto
})

//O objeto Response(resolucao acima) possui um corpo com o conteudo da resposta, esse corpo pode ser transformado ultilizando metodos do prototipo do objeto Response
//que retornam promises

//.text() transforma a promise retornada pelo fetch em uma promise com texto/string
doc.then(resolucao => { //Não é preciso do return podemos deixar em uma linha
   return resolucao.text() // Promise -> promiseresult é o texto
      .then(body => {
         const paragrafo = document.querySelector('#paragraph')
         paragrafo.innerText = body // agora o texto que buscamos do doc.txt se tornou o texto interno de um paragrafo no index
         console.log(body) // O texto do arquivo -> agora podemos ultiliza-lo onde quisermos
      })
})

const titulo = fetch('./text.txt')
titulo.then(textinho => {
   textinho.text() //pegamos a promise retornada e transformamos em texto
   .then(texto => {
      const titulo = document.querySelector('#ola')
      titulo.innerText = texto
   })
})

//.json() -> é um tipo de formato de dados muito ultilizado em JS por possuir a mesma sintaxe que um obj js .json() transforma um corpo em json em um obj JS
//segue um padrão de aspas duplas

const adress = fetch('https://viacep.com.br/ws/14400650/json/')

adress.then(r => {
   r.json() //transformamos em json ou seja agora é um obj que podemos acessar as propriedades
   .then(body => {
      console.log(body) //é boa pratica usar console.log para vermos quais props podemos acessar
      const cep = document.querySelector('#cep')
      const bairro = document.querySelector('#bairro')
      const uf = document.querySelector('#uf')
      cep.innerText = body.cep
      bairro.innerText = body.bairro
      uf.innerText = body.uf
   })
})

//Injetar css com fecth - não pode ser transformado em json

const style = fetch('./style.css')

style.then(r => r.text())
   .then(body => {
      const container = document.querySelector('#container')
      const estilo = document.createElement('style')
      estilo.innerHTML = body
      container.appendChild(estilo) //injetei o css na pagina
   })

//HTML e text() -> podemos pegar um arquivo inteiro em html e transformar o corpo em texto e inserir em uma div com o innerHTML(componentização) a partir dai
//podemos manipular esses dados como um DOM qualquer

const about = fetch('./about.html')

const divEx = document.createElement('div')

about.then(r => r.text())
   .then(body => {
      console.log(body) //é o proprio html
      console.log(divEx)
      divEx.innerHTML = body //A div recebe o html funcional dentro dela nos permitindo acessar o mesmo
      const titulo = divEx.querySelector('h1')
      const paragraph = divEx.querySelector('p')
      document.querySelector('#tituloEx').innerText = titulo.innerText
      document.querySelector('#paragraphEx').innerHTML = paragraph.innerText
      console.log(titulo)
   })

//.blob() -> blob é um tipo de obj ultilizado para representação de dados de um arquivo, o blob pode ser ultilizado para transformarmos requisições de imagens por ex
//ele gera um url unico
//retorna tamanho em megas e o tipo da img

const img = fetch('./imagem.png')

img.then(r => r.blob())
.then(body => {
   const blobUrl = URL.createObjectURL(body) //cria um URL a partir de uma src
   console.log(blobUrl)
   const imgDOM = document.querySelector('img')
   imgDOM.src = blobUrl
})

//.clone() -> ao ultilizarmos os metodos acima, text, json e blob a resposta é modificada.
//Com o clone caso seja necessario ultilizar uma mesma response em diferentes valores, ele é usado

const cepClone = fetch('https://viacep.com.br/ws/14403303/json/')

cepClone.then(r => {
   const r2 = r.clone()
   r.text() //transforma o body do obj -> ou seja não podemos mudar novamente o tipo do dado
   .then(text => {
      console.log(text) //texto
   })
   r2.json()
   .then(json => {
      console.log(json) //obj
   })
   console.log(r)
})
.then(body => {
   console.log(body)
})

//.headers -> é uma prop que possui os cabeçalhos da requisição é um tipo de dado iterável então podemos ultilizar o foreach para vermos cada um deles
//headers mostram informações sobre a sua requisição, como tipo de arquivo, data de criação ou expirar

const cepHeaders = cepClone

cepHeaders.then(response => {
   console.log(response)
   response.headers.forEach(console.log) //retorna cada item da array com o index 
})

//status e ok -> retorna o status da requisição, se for 404, 200, 202 e mais o '.ok' retorna um valor booleano true para sucesso e false para sem sucesso

const statusTest = fetch('docs.txt')

statusTest.then(response => {
   console.log(response.status) // tch.js:128     GET http://127.0.0.1:5500/Fetch/docs.txt 404 (Not Found)
   if(response.status === 404) {
      console.log('Página não existe')
   }
})

//url e type -> .url retorna o url da requisição e .tyoe retorna o tipo da resposta(json, text, blob)
//types
// basic: feito na mesma origem
// cors: feito em url body pode estar disponível
// error: erro de conexão
// opaque: no-cors, não permite acesso de outros sites


