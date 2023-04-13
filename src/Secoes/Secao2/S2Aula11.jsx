import { Button } from "@mui/material";
// import { toast } from "react-toastify";
import React from "react";
import "../style.css";

export default function S2Aula9() {
  const lista = ["Marcos", "Henrique", "Leandro", "Mateus"];
  function lerLista() {
    console.log("verifica se tem o item Marcos", lista.indexOf("Marcos"));
    console.log("=>", lista);
    console.log("deleta o primeiro item do array", lista.shift());
    console.log("=>", lista);
    console.log("deleta o último item do array", lista.pop());
    console.log("=>", lista);
    // agora para editar um valor dentro do array
    console.log("procurar item Leandro", lista.indexOf("Leandro"));
    console.log("=>", lista[1]);
    console.log("altera leandro para velascao", (lista[1] = "Velascão"));
    console.log("=>", lista);
    console.log("Adicionando mais um item na lista", lista.push("Marcão"));
    console.log("=>", lista);
    if (lista.indexOf("Henrique") > -1) {
      // toast.success("Henrique está na lista");
      alert("Henrique está na lista");
    } else {
      // toast.error("Henrique não está na lista");
      alert("Henrique não está na lista");
    }
  }
  return (
    <>
      <div id="area" className="alignPadrao">
        <h5>Arrays</h5>
      </div>
      <Button onClick={() => lerLista()}>ler lista</Button>
    </>
  );
}
