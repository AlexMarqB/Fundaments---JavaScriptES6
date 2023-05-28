// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
    {
      descricao: 'Taxa do Pão',
      valor: 'R$ 39',
    },
    {
      descricao: 'Taxa do Mercado',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 99',
    },
    {
      descricao: 'Taxa do Banco',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 49',
    },
  ];
let taxa = 0
let Recebimento = 0
transacoes.forEach(item => {
    descricao = item.descricao.toLowerCase()
    value =  item.valor
    descricao.startsWith('taxa') ? taxa = taxa + Number(value.replace('R$', '')) : 
    descricao.startsWith('recebimento') ? Recebimento = Recebimento + Number(value.replace('R$', '')) : console.log('deu não')
})
console.log(`Valor da taxa: R$${taxa.toFixed(2)}`)
console.log(`Valor de recebimento R$${Recebimento.toFixed(2)}`)
  
  // Retorne uma array com a lista abaixo
  const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
  const transportesArray = transportes.split(';');
  console.log(transportesArray)

  
  // Substitua todos os span's por a's
  const html = `<ul>
                  <li><span>Sobre</span></li>
                  <li><span>Produtos</span></li>
                  <li><span>Contato</span></li>
                </ul>`;
  const htmlArray = html.split('span'); //divide em arrays removendo 'span'
  const novoHTML = htmlArray.join('a') //Junta em um novo string com 'a' na posição em que 'span' foi removido
  console.log(novoHTML)

  // Retorne o último caracter da frase
  const frase = 'Melhor do ano!';
  console.log(frase.charAt(frase.length - 1))
  
  // Retorne o total de taxas
  const taxas = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];
  
let totalTaxas = 0
taxas.forEach(item => {
    if(item.toLowerCase().includes('taxa')) {
        totalTaxas++
    }
})
console.log(totalTaxas)
  