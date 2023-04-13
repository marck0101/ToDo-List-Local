import { Button } from "@mui/material";
import React from "react";
import "../style.css";

export default function S3Aula12() {
  function lacoUm() {
    // while = enquanto
    let x = 0;
    while (x < 10) {
      document.write("</br> o valor é: " + x);
      x++;
    }
    document.write("</br> o X esta valendo: " + x);

    document.write("</br></br></br>");

    // for = para
    let a;
    for (a = 0; a < x; a++) {
      document.write("</br> o valor é: " + a);
    }
    document.write("</br> o a esta valendo: " + a);

    document.write("</br></br></br>");
  }
  return (
    <>
      <div className="alignPadrao">
        <h5>Loops</h5>
        <Button variant="outlined" onClick={() => lacoUm()}>
          executar
        </Button>
      </div>
    </>
  );
}
