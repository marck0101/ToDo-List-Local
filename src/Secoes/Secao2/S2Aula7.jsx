// refresh e redirect
import React from "react";
import { CiBatteryCharging, CiBezier } from "react-icons/ci";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";

export default function S2Aula7() {
  const estilo = {
    margin: 55,
  };

  function restore() {
    // eslint-disable-next-line no-self-assign
    window.location.href = window.location.href;
    // aqui vai recarregar o endereço atual
  }
  function redirecionar() {
    window.location.href = "https://google.com/";
    // window.location.href = "contato"; assim ficaria: localhost:3000/contato
  }
  return (
    <>
      <div style={estilo}>
        <Grid container spacing={2}>
          <Grid item>
            <Button
              variant="outlined"
              startIcon={<CiBatteryCharging />}
              onClick={() => restore()}
            >
              recarregar
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              startIcon={<CiBezier />}
              onClick={() => redirecionar()}
            >
              redirecionar
            </Button>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
