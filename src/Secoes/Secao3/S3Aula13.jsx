import { Button } from "@mui/material";
import React from "react";
import "../style.css";
export default function S3Aula13() {
  function teste() {
    let x = prompt("O que deseja pedir?");
    switch (x) {
      case "0":
        alert("você pediu sorvete");
        break;
      case "1":
        alert("você pediu suco");
        break;
      case "2":
        alert("você pediu coca");
        break;
      case "3":
        alert("você pediu agua");
        break;
      default:
        "ops! Parece que não temos essa opção";
    }
  }
  // function pulaLinha() {
  //   document.write("<br><br>");
  // }
  // document.write("</br> Escolha seu pedido</br>");
  // document.write("</br> 0- Sorvete 1- suco</br>");
  // document.write("</br> 2- coca 3- Agua</br>");
  return (
    <>
      <div className="alignPadrao">
        <h5>switch</h5>
        <h5>Escolha seu pedido:</h5>
        <ul>
          <li>0- Sorvete</li>
          {/* {pulaLinha()} */}
          <li>1- suco</li>
          <li>2- coca</li>
          <li>3- Agua</li>
        </ul>
        {/* 0- Sorvete 1- suco 2- coca 3- Agua */}
        <Button variant="outlined" onClick={() => teste()}>
          executar
        </Button>
      </div>
    </>
  );
}
