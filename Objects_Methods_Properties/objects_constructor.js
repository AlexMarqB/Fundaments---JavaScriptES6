const ex = {
    prop1: 'string',
    prop2: 'number',
    prop3: 'boolean',
    prop4: 'object',
    prop5: 'array',
    prop6: 'function',
    prop7: 'undefined',
    prop8: 'null',
}

const exe = new Object({
    prop1:'string',
    prop2: 'number',
    prop3: 'boolean',
    prop4: 'object',
    prop5: 'array',
})

//object.create(obj, defineProperty) - retorna um novo objeto q tera como prototipo o objeto do primeiro argumento
const exemplo = Object.create(ex) //recebeu as propriedades do obj 'ex'
console.log(exemplo.prop1)

//object.assign(alvo, obj1, obj2) - adiciona alvo as propriedades e metodos enumeraveis dos demais objetos - modificando o objeto alvo
const funcaoAutomovel = {
    acelerar() {
        return 'acelerou'
    },
    buzinar() {
        return 'buzinou'
    }
}

const motinha = {
    rodas: 2,
    capacete: true,
}

const carrinho = {
    rodas: 4,
    mala: true,
}

Object.assign(motinha, funcaoAutomovel) //adiciona as propriedades de 'funcaoAutomovel' a motinha e carrinho
console.log(motinha) 
/*
{
  rodas: 2,
  capacete: true,
  acelerar: [Function: acelerar],
  buzinar: [Function: buzinar]
}
*/

//defineProperties(alvo, propriedades) - adiciona ao alvo novas propriedades - com diferença na possibilidade de serem definidas as caracteristicas dessa propriedade
const motona = {
    capacete:true,
}

Object.defineProperties(motona, {
    rodas: {
        value: 2,
        configurable: false, //impede deletar e mudançad e valor (const)
        enumerable: true, //torna enumeravel
    },
    capacete: {
            value: true,
            configurable: true, //torna mutavel (let)
            writable: false, //impede mudança de valor
        },
})
delete motona.rodas //deletar propriedade, não funciona porque não permitimos ser configurable
console.log(motona)
motona.capacete = false
console.log(motona) // não pode mudar de valor
delete motona.capacete 
console.log(motona) //pode ser deletado

//dentro do defineProperties há metodos - get()[não pode haver valor predefinido] e set(value)
const moto = {
    capacete: true,
}
moto.capacete = false //o get está pegando o valor e o set esta setando. Tudo internamente a partir do sinal de receba( = )
Object.defineProperties(motona, {
    roda: {
        get() {
            return this._rodas //outra propriedade diferente da rodas acima - retorna a variavel gcriada no set
        },
        set(valor) {  //altera o valor mas precisa estar em uma variavel que o 'get' também possua
            this._rodas = valor * 4
        }
    }
})

console.log(moto.rodas) //undefined
moto.rodas = 2 
console.log(moto.rodas)

//getOwnPropertyDescriptors(obj) //lista metodos e propriedades
//getOwnPropertyDescriptors(obj.prototyope) //lista metodos e propriedades do prototipo do array
//                          obj        propertie 
//getOwnPropertyDescriptors(window, 'innerHeight') // puxa uma unica propriedade
//console.log(getOwnPropertyDescriptors(Array.prototype)) //retorna TODAS AS PROPRIEDADES E METODOS

//getOwnPropertyNames(obj) //lista metodos e propriedades diretas do objeto não retorna do proptotipo
console.log(Object.getOwnPropertyNames(Array)) //[ 'length', 'name', 'prototype', 'isArray', 'from', 'of' ]
const Alex = {
    nome: 'Alex',
    idade: 18,
    altura: '1.83 metros',
    fome: true
}

console.log(Object.getOwnPropertyNames(Alex)) // [ 'nome', 'idade', 'altura', 'fome' ]
//obj.keys(obj), obj.values(obj), obj.entries(obj)
//obj.keys(obj) - retorna uma array com as chaves de propriedades diretas e enumeraveis do obj
//obj.values(obj) - retorna uma array com os valores
//obj.entries(obj) - retorna uma array com array's contendo chave e valor

console.log(Object.keys(Alex)) // [ 'nome', 'idade', 'altura', 'fome' ]
console.log(Object.values(Alex)) // [ 'Alex', 18, '1.83 metros', true ]

console.log(Object.entries(Alex)) 
/*
[
  [ 'nome', 'Alex' ],
  [ 'idade', 18 ],
  [ 'altura', '1.83 metros' ],
  [ 'fome', true ]
]
*/

//obj.getPrototypeOf() e obj.is()
//obj.getPrototypeOf - retorna o prototipo do objeto
//obj.is(obj1, obj2) - verifica se os objetos são iguais e retorna true ou false
const frutinhas = {
    tipo: 'Cabaxi',
    qnt: 12
}
const arrFrutinhas = ['Cabaxi', 'Bananana']
console.log(Object.getPrototypeOf(frutinhas)) //prototipo de object
console.log(Object.getPrototypeOf(arrFrutinhas)) //prototipo de array
console.log(Object.getPrototypeOf('')) //prototipo de string

const fruta1 = ['Banana', 'Maça']
const frutas2 = ['Banana', 'Maça']

console.log(Object.is(fruta1, frutas2)) //false - são objetos diferentes e independentes

const frutas3 = ['Banana', 'Maça']

const frutas4 = frutas3

console.log(Object.is(frutas3, frutas4)) //true - são objetos iguais - e dependentes(frutas4 depende de frutas3)

//Object.freeze(obj) - congela o objeto impedindo qualquer mudanças nas propriedades
//Object.seal(obj) - previne adição de novas propriedades e impede deletes
//Object.preventExtension(obj) - previde adição de novas propriedes - mas permite que delete já existentes

//Para verificar o estado de um obj usamos - retorna true ou false
//Object.isFrozen(obj)
//Object.isSealed(obj)
//Object.isExtensible(obj)

//{}.constructor - retorna uma função construtora em relação ao obj já existente
const Pedrin = {
    nome: 'Pedro',
    idade: 16
}
console.log(Pedrin.constructor)

//{}.hasOwnProperty('prop') - verifica se possui a propriedade e retorna true ou false - deve ser direta do objeto
//{}.propertyIsEnumerable('prop') - verifica se a propriedade é enumeravel

console.log(Pedrin.hasOwnProperty('idade')) //true

//{}.isPrototypeOf(valor)
const arr = [1, 2, 3]
console.log(Array.prototype.isPrototypeOf(arr))