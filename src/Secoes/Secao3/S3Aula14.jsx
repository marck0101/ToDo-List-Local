// import { Button } from "@mui/material";
import React from "react";
import "../style.css";
export default function S3Aula14() {

  function acao() {
    document.write("executando... </br>");
  }

  //executa de tempo em tempo
  setInterval(acao, 1000);

  setTimeout(acao, 3000);

  return (
    <>
      <div className="alignPadrao">
        <h5>Temporizador</h5>
        {/* <Button variant="outlined" onClick={() => acao()}>
          executar
        </Button> */}
      </div>
    </>
  );
}
