function cadastroPessoa(info) {
  let novosDados = {
    ...info,
    status: "Ativo",
    cod: 4002,
  };
  return novosDados;
}

// Aqui estou passando um objeto de parametros que vou ler 'props' acima
cadastroPessoa({ nome: "Marcos", sobrenome: "Henrique", cargo: "programador" });

console.log(
  cadastroPessoa({
    nome: "Marcos",
    sobrenome: "Henrique",
    cargo: "programador",
  })
);

