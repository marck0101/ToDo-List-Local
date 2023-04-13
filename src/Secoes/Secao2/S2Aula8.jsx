// refresh e redirect
import React from "react";
import { Button, Grid } from "@mui/material";

export default function S2Aula8() {
  const estilo = {
    margin: 55,
  };

  function disparar() {
    // o que vai aparecer no HTML
    document.getElementById("cumprimento").innerHTML =
      "Seja bem Vindo =>" + prompt("what your name?");
  }

  function nomeBtn() {
    document.getElementById("teste").innerHTML = prompt(
      "Qual o texto do botão?"
    );
  }

  return (
    <>
      <div style={estilo}>
        <Grid container spacing={2}>
          <Grid item>
            <div id="cumprimento">Seja bem Vindo ...</div>
            <Grid item>
              <Button variant="outlined" onClick={() => disparar()}>
                Entrar
              </Button>
            </Grid>

            <Grid item>
              <Button variant="outlined" id="teste" onClick={() => nomeBtn()}>
                Qual meu nome?
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
