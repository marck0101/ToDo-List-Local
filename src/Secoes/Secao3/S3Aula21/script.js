// SE NÃO COLOCA O ... ele pega apenas o primeiro param
// function minhaLista(...props) {
//   console.log(props);
// }

// minhaLista("Marcos", "Henrique", "Rob", "Tata");

function cadastrar(usuarios, ...novosUsuarios) {
  let todosUsuarios = [...usuarios, ...novosUsuarios];
  console.log(todosUsuarios);
  return todosUsuarios;
}
let usuarios = ["Mateus", "Marcos"];
//está passando a variavel como um parametro, e as strings como outro parametro
let novosUsuarios = cadastrar(usuarios, "Henrique", "Rob");

//---------------------------
// dessa forma abaixo não usarua-se o operador rest
// function cadastrar(usuarios, novosUsuarios) {
//   let todosUsuarios = [...usuarios, ...novosUsuarios];
//   console.log(todosUsuarios);
//   return todosUsuarios;
// }
// let usuarios = ["Mateus", "Marcos"];
// let novosUsuarios = ["Henrique", "Rob"];
// cadastrar(usuarios, novosUsuarios);
