import React from "react";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

export default function Teste() {
  const estilo = {
    margin: "auto",
    padding: 40,
    /* backgroundColor: "red",*/
  };
  // function pagNutri() {
  //   // window.location.href = "http://localhost:3000/nutri";
  //   // <Link to="/nutri">Sobre</Link>;
  // }
  // function pagList() {
  //   // window.location.href = "http://localhost:3000/listaCompras";
  //   // <Link to="/listaCompras">Sobre</Link>;
  // }
  return (
    <>
      <div style={estilo}>
        <Grid container spacing={2}>
          <Grid item>
            {/* <Button onClick={() => pagNutri()}>Acessar pag nutri</Button> */}
            {/* <Button onClick={() => pagList()}>Acessar pag lista</Button> */}
            {/* <img src="nutri.png" alt="nutri" /> */}
            <Button>
              <Link to="/nutri" >nutri</Link>
            </Button>
            <Button>
              <Link to="/listaCompras" >listaCompras</Link>
            </Button>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
