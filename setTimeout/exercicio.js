const minutos = document.querySelector('#minutos');
const segundos = document.querySelector('#segundos');
const iniciar = document.querySelector('#iniciar');
const pausar = document.querySelector('#pausar');

iniciar.addEventListener('click', iniciarCronometro)
pausar.addEventListener('click', clearInterval(iniciarCronometro))
pausar.addEventListener('dblclick', estado(true))
