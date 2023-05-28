//Criando um obj simples numa situação real

/*
const DomObj = {
    seletor: 'li',
    element() {
        //Ao escrevermos Dom.element() podemos ultilizar propriedades e metodos do 'li' selecionado
        return document.querySelector(this.seletor);
        //Dom.element().classList.add('teste') // adiciona a classe ao elemento
    },
    ativar() {
        //const elementoSelecionado = document.querySelector(this.seletor);
        // já existe o retorno ent podemos acessar o elemento da seguinte forma
        const elementoJáSelecionado = this.element()

        //elementoSelecionado.classList.toggle('ativar');
        // e este comando poderia ser passado da seguinte forma
        this.element().classList.toggle('ativar')
    }
}
*/
//alteramos o seletor para o 'ul' - não eficiente por alterar o objeto a todo momento
// Dom.seletor = 'ul'
// Dom.ativar()

//transformar o objeto acima em Constructor function

function DomTeste(selector) {
    // não é necessario - this.seletor = seletor
    this.element = function() {
        return document.querySelector(selector)
    }
    this.ativar = function(classe) {
        this.element().classList.add(classe)
        console.log(this.element.classList)
    }
}

//criamos um objeto a partir da constructor function Dom e indicamos o seletor de HTMLElement a ser usado
const li = new DomTeste('li')
//li.ativar() - classList recebe classe descrita no parametro
const ul = new DomTeste('ul')
//ul.ativar() - classList recebe classe descrita no parametro