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