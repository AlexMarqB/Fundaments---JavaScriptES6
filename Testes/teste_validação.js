function validarTXT() {
    const txt = document.querySelector('#t1').value
    const arrayTXT = Array.from(txt)
    arrayTXT.forEach(item => {
        typeof item === 'string' ? console.log(item) : alert(`Caracter ${item} é invalido.`)
    })
}