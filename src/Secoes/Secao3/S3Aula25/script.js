// some-algum
// let nomes = ["mateus", "marcos", "henrique"];
// let nome = "marcos";
// nomes.some((item) => item === nome); // existe algum item igual a nome ?
// console.log(
//   "=>",
//   nomes.some((item) => item === nome) // callback Boleano
// );

// every-Todos
let nomes = [
  {
    nome: "Marcos",
    idade: 18,
  },
  {
    nome: "Henrique",
    idade: 23,
  },
  {
    nome: "Rob",
    idade: 17,
  },
];
let maioridade = 18;

console.log(nomes.every((item) => item.idade >= maioridade));

if (nomes.every((item) => item.idade >= maioridade)) {
  console.log("todos maiores de idade");
} else {
  console.log("Não são todos maiores de idade");
}
