//setTimeout(callback, tempo, arg1, arg2, ...) - metodo assincrono que ativa o callback após o tempo definido, não há garantia que o codigo funcionara exatamente após o tempo
//porque a callback entra na fila de espera pela Call Stack - fila de execução de funções que passaram pela web api e estão na Callback Queue 
//são sincronas porque seguem a ordem 1ª 2ª 3ª 

function espera(texto) {
   console.log(texto)
}
//function, time(MiliSegundos), arg/parametro
setTimeout(espera, 1000, 'Depois de 1s')

setTimeout((texto) => {
   console.log(texto)
}, 5000, '5 Segundos')

//Se não definirmos o tempo ele será executado imediatamente

//Loops são executados rapidamente em milisegundos se colocarmos um setTimeout dentro do loop todos serão adicionados a web api praticamente ao msm tempo. 
//Um evento de setTimeout não espera o tempo anterior acabar para iniciar - ou seja se 2 funções forem executadas com uma diferença de tempo independente da ordem
//a com menor tempo termina a execução primeiro 
//esse loop é mais rapido que as funções acima ou seja ele é executado antes
for(let i = 0; i < 2; i++) {
   setTimeout(() => {
      console.log(i)
   }, 300)
}

//setTimeout é uma função do window -> o this se refere ao window do html
//setInterval(callback, tempo, arg1, arg2, ...)
//A cada x tempo ele executa a callback diferente do setTimeout que executa apenas uma vez como um loop
//clearInterval(var) - REMOVE DO WEB API - para podermos ultilizar ele é preciso definir o setInterval como uma variavel(let, const, var)

const contarAte10 = setInterval(callback, 1000)
let i = 0
function callback() {
   console.log(i++)
   if(i > 10) {
      clearInterval(contarAte10)
   }
} 