//Exercicio: 

// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

const cepUser = document.querySelector('#cepBuscar')
const bntBuscarCep = document.querySelector('[data-btnBuscarCep]')
bntBuscarCep.addEventListener('click', handleClick)

function handleClick(event) {
   event.preventDefault()
   const cep = cepUser.value
   console.log(cepUser)
   console.log(cep)
   buscarCep(cep)
   console.log(event)
}

function buscarCep(cep) {
   const userCity = document.querySelector('[data-userCity]')
   const userAdress = document.querySelector('[data-userAdress]')
   const userNH = document.querySelector('[data-userNH]')
      fetch(`http://viacep.com.br/ws/${cep}/json/`)
      .then(r => r.json())
      .then(b => {
         userCity.innerText = b.localidade
         userAdress.innerText = b.logradouro
         userNH.innerText = b.bairro
      })
}

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

function fetchBRL() {
   const brlValue = document.querySelector('[data-BrlValue]')
   fetch(`https://blockchain.info/ticker`)
      .then(r => r.json())
      .then(brlJson => {
         console.log(brlJson)
         const dataBRL = brlJson.BRL
         const value = dataBRL.buy.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
         brlValue.innerText = value
      })
}
// const uptBRL = setInterval(fetchBRL, 30000)




// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

const btnSearch = document.querySelector('[data-searchChucky]')
btnSearch.addEventListener('click', buscarPiada)
function buscarPiada() {
   fetch('https://api.chucknorris.io/jokes/random')
   .then(r => {
      console.log(r)
      return r.json()
   })
   .then(joke => {
      
      const jokeContainer = document.querySelector('[data-chuckyJokes]')
      jokeContainer.innerText = joke.value
   })
}