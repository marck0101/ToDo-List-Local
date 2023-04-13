function adicionar(...props) {
  // funcao anonima de forma natural
  // let total = props.reduce(function (total, proximo) {
  //   return total + proximo;
  // });

  let total = props.reduce((total, proximo) => {
    let soma = total + proximo;
    return soma;
  });

  console.log(total);
}
adicionar(1, 2, 3, 4, 5);
