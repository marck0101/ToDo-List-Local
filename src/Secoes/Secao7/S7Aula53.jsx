import React, { useEffect, useState } from "react";
import "./estilo.css";
//https://sujeitoprogramador.com/rn-api/?api=posts

export default function ReqHTTP() {
  const [nutri, setNutri] = useState([]);

  useEffect(() => {
    const url = "https://sujeitoprogramador.com/rn-api/?api=posts";
    function loadApi() {
      fetch(url)
        .then((r) => r.json())
        .then((json) => {
          setNutri(json);
          console.log("json", json);
          console.log("nutri", nutri);
        });
    }
    loadApi();
  }, []);

  return (
    <>
      <div className="container">
        <header>
          <strong>React Nutri</strong>
        </header>
        {nutri.map((item) => {
          return (
            <article key={item.id} className="post">
              <strong className="titulo">{item.titulo}</strong>

              <img src={item.capa} alt={item.titulo} className="capa" />
              <p className="subtitulo">{item.subtitulo}</p>
              <a className="botao">Acessar</a>
            </article>
          );
        })}
      </div>
    </>
  );
}
