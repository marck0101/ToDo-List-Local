function testeAA() {
  // passa o parametro de uma chave e um valor
  localStorage.setItem("nome", "Marcão"); // ou localStorage.name = "Marcão"
  localStorage.getItem("nome");
  alert("sucesso");
  // localStorage.removeItem("nome");
}
function teste() {
  let nome = "";
  if (typeof localStorage.nome === "undefined") {
    localStorage.nome = prompt("digite seu nome");
  }
  nome = localStorage.nome;

  document.getElementById("nome").innerHTML = nome;
  // localStorage.removeItem("nome");
}
