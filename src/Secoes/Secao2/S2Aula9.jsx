import { Button } from "@mui/material";
import React from "react";
import "../style.css";

function nameBtn() {
  const area = document.getElementById("area");
  const texto = prompt("qual o nome do botão?");
  if (texto !== "" || texto !== null) {
    area.innerHTML = texto;
  } else {
    alert("Digita o nome aí filhão!");
  }
}

export default function S2Aula9() {
  return (
    <>
      <div id="area" className="alignPadrao">
        <h5>Criando funcoes</h5>
        <Button variant="outlined" onClick={() => nameBtn()}>
          teste
        </Button>
      </div>
    </>
  );
}
