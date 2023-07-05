//É uma função construtora de promessas, existem 2 resultados possiveis
//O primeiro é a resolução com a execução do primeiro argumento
//Ou rejeitada pelo primeiro argumento se o segundo argumento for ativado
//const nome = new promise(callback1, callback2)
//                        resolve      reject
const promessa = new Promise((resolve, reject) => {
   let condicao = true
   if(condicao) {
      resolve()
   } else {
      reject(Error('Um erro ocorreu na promise'))
   }
})

console.log(promessa)

//Metódo then() -> a callback desse metodo só sera ativada quando o promise for resolvida(true), o argumento da callback sera o valor passado na função resolve

const promessa2 = new Promise((resolve, reject) => {
   let condicao = true
   if(condicao) {
      resolve('Estou pronto!')
   } else {
      reject(Error('Um erro ocorreu'))
   }
})

promessa2.then((resolucao) => {
   console.log(resolucao)
})

//As promises não fazem sentido quando o codigo executado dentro da mesma é apenas o codigo sincrono
//O poder está na execução do codigo assincrono que executa o resolve()

const promessa3 = new Promise((resolve, reject) => {
   let condicao = true
   if(condicao) {
   setTimeout(() => {
      resolve('Resolvida')
   }, 1000)
   } else {
      reject(Error('Um erro ocorreu!'))
   }
})

//Só será executada após o tempo definido se cumprir

promessa3.then(resolucao => {
   console.log(resolucao)
})

//O metodo then() retorna outra promise podendo por then()

const promessa4 = new Promise((resolve, reject) => {
   resolve('Etapa 1')
})

promessa4.then(resolucao => {
   console.log(resolucao)
   return 'Etapa 2'
}).then(resolucao => {
   console.log(resolucao)
   return 'Etapa 3'
}).then(r => r + 4)
//Funciona desta forma
.then(r => {
   console.log(r)
})

//catch() -> é um prototype do promises e adiciona um callback a promise que sera ativado caso a mesam seja rejeitada
//finally() -> executa a função anonima assim que a promise acabar, é executado independente do resultado
const promessa5 = new Promise((resolve, reject) => {
   let condicao = true
   if(condicao) {
      resolve('Estou pronto 5')
   } else {
      reject(Error('Um erro ocorreu 5'))
   }
})
promessa5.then(resolucao => {
   console.log(resolucao)
}).catch(reject => {
   console.log(reject)
}).finally(() => {
   console.log('BAIXO')
})

//Promise.all -> retorna uma nova promessa assim que todas as promessas internas forem resolvidas OU pelo menos 1 rejeitada, a resposta é um array com as respostas

const login = new Promise(resolve => {
   setTimeout(() => {
      resolve('Login efetuado')
   }, 1000)
})
//Enquanto o timer não for comprido essa promise aparecerá como pendente
const dados = new Promise(resolve => {
   setTimeout(() => {
      resolve('Dados Carregados')
   }, 1500)
})

const tudoCarregado = Promise.all([login, dados]) 
tudoCarregado.then(respostas => {
   console.log(respostas) // array com resultados -> que pode ser modifciado
})
//retorna 
//PromiseStatus: pending ou resolved
//PromiseValue: array com os resultados das promises

//Promise.race() -> retorna uma nova promise assim que a primeira for resolvida ou rejeitada essa nova promise tera a resposta da primeira resolvida

tudoCarregado.race([login, dados]) //Usuario logado -> resposta da primeira promise 'login'

