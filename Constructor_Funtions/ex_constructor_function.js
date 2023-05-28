// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
    nome: 'Nome pessoa',
    idade: 0,
    andar() {
        console.log(this.nome + ' andou');
    }
}

function pessoaConstructor(Name, idade) {
    this.nome = Name
    this.idade = idade
    this.andar = function () {
        console.log(nome + ' andou');
    }
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const Joao = new pessoaConstructor('João', 20)
console.log(Joao)
const Maria = new pessoaConstructor('Maria', 15)
console.log(Maria)


// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:

// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(seletor, classe) {
    const elementList = document.querySelectorAll(seletor)
    this.elements = elementList
    this.adicionarClass = function () {
        this.element().classList.add(classe)
    }
    this.removerClass = function () {
        this.element().classList.remove(classe)
    }
}

//Resolução 2

function Dom2(seletor, classe) {
    const elementList = document.querySelectorAll(seletor)
    this.elements = elementList
    this.adicionarClass = function (classe) {
        elementList.forEach((element) => {
            element.classList.add(classe)
        })
        this.element().classList.add(classe)
    }
    this.removerClass = function (classe) {
        elementList.forEach((element) => {
            element.classList.remove(classe)
        })
    }
}