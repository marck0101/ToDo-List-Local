const lista = [1, 2, 3, 4, 5, 6];
// o function está ali para poder retornar a nova lista
const novaLista = lista.map(function (item, index) {
  // return item * 5;
  return item + index;
});
console.log(novaLista);

//ele pega o total e soma com o proximo valor
// const exemplo = {
//   pega_Primeiro_Valor:' e soma com o proximo',
// o_valor_da_soma: ' vai ser usada para somar com a proxima posição'
// }
const soma = lista.reduce(function (total, proximo) {
  return total + proximo;
});
console.log(soma);

const find = lista.find(function (item) {
  return item === 6;
});
console.log(find);
