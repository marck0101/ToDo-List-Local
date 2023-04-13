/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useMemo, useState } from "react";
import { Button, Grid, TextField } from "@mui/material";
import { v4 } from "uuid";
import { AiOutlineDelete } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import "./style.css";
import { BsCheckCircle } from "react-icons/bs";
export default function ListaDeCompras() {
  const [lista, setLista] = useState([]);
  const [listaConcluida, setListaConcluida] = useState([]);
  const [item, setItem] = useState("");
  // const [itemConcluido, setItemConcluido] = useState("");
  const totalItens = useMemo(() => lista.length, [lista]);
  const totalItensConcluidos = useMemo(
    () => listaConcluida.length,
    [listaConcluida]
  );
  //o useMemo só vai atualizar o valor necessário sem ter que forçar
  //toda o render da tela, mas apenas do valor necessário

  useEffect(() => {
    atualizar();
  }, []);

  useEffect(() => {
    // if ((lista && listaConcluida) != "") {
    if (lista !== "") {
      localStorage.setItem("lista", JSON.stringify(lista)); // se lista estiver vazio ele vai setar vazio
      localStorage.setItem("listaConcluida", JSON.stringify(listaConcluida)); // se lista estiver vazio ele vai setar vazio
    }

  }, [lista, listaConcluida]);

  function atualizar() {
    const tarefasStorage = localStorage.getItem("lista");
    const tarefasStorageII = localStorage.getItem("listaConcluida");
    if (tarefasStorage) {
      setLista(JSON.parse(tarefasStorage));
      setListaConcluida(JSON.parse(tarefasStorageII));
    }
  }

  function handleAdd() {
    if (item !== "") {
      setLista([...lista, item]);
      setItem("");
    } else {
      alert("Digite algo para ser inserido!");
    }
  }
  function handleDelete() {
    alert("tem certeza ?");
    // se confirmado apaga, se não não => try cach
    localStorage.removeItem("lista"); // se lista estiver vazio ele vai setar vazio
    setLista([]);
  }

  function handleDeleteItem(indice) {
    alert("tem certeza?");
    const newListaRemove = lista;
    newListaRemove.splice(indice, 1);
    setLista(newListaRemove);
    localStorage.setItem("lista", JSON.stringify(lista));
    localStorage.getItem("lista");
    atualizar();
  }

  function handleEditItem(item, indice) {
    const newListaEdit = lista;
    let editItem = indice;
    const newItem = prompt("novo item");

    if (newItem !== "" && newItem !== null && editItem !== -1) {
      newListaEdit[editItem] = newItem;
      // newListaEdit.push(newItem);

      setLista(newListaEdit);
      localStorage.setItem("lista", JSON.stringify(lista));
      localStorage.getItem("lista");
      atualizar();
    } else {
      alert("informe o valor que vai substitui-lo");
    }
    // console.log("lista", lista);
  }

  function handleConcluido(item, indice) {
    let filter = lista;
    console.log(filter);
    console.log(item, "item");
    setListaConcluida([...listaConcluida, item]); //aqui já manda para o localStorage
    filter.splice(indice, 1);
    console.log("filter", filter);
    setLista(filter);
    atualizar()
  }

  function handleDeleteItemConcluido(item, indice) {
    if (listaConcluida) {
      let filter = listaConcluida;
      filter.splice(indice, 1);
      setListaConcluida(filter);
      localStorage.setItem("listaConcluida", JSON.stringify(listaConcluida));
      localStorage.getItem("listaConcluida");
      atualizar();
    }
  }

  return (
    <>
      <div className="alignPadrao">
        <Grid container style={{ display: "flex", flexDirection: "column" }}>
          <Grid item>
            <Grid container spacing={1}>
              <Grid item>
                <TextField
                  id="newItem"
                  label="Inserir item"
                  size="small"
                  variant="outlined"
                  value={item}
                  onChange={(e) => setItem(e.target.value)}
                />
              </Grid>
              <Grid item>
                <Button
                  onClick={() => handleAdd()}
                  variant="contained"
                  size="large"
                >
                  Inserir
                </Button>
              </Grid>
              <Grid item>
                <Button
                  onClick={() => handleDelete()}
                  variant="contained"
                  size="large"
                  color="error"
                >
                  Deletar Lista
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <h5>Itens listados: {totalItens}</h5>
            <br />
          </Grid>

          <Grid item>
            {lista.map((item, indice) => {
              return (
                <>
                  <div>
                    <ul>
                      {/* <li key={item}>{item}</li> */}
                      <div>
                        {/* <article key={item.id} className="list">
                          <p>{item}</p>

                          <div>
                            <button>Editar</button>
                            <button>Concluir</button>
                            <button className="btn-delete">Deletar</button>
                          </div>
                        </article> */}
                        <article key={v4()}>
                          {item}
                          {/* <div style={{ marginTop: -20, marginLeft: 40 }}> */}
                          <AiOutlineDelete
                            size={25}
                            onClick={() => handleDeleteItem(indice)}
                            style={{ cursor: "pointer", marginLeft: 10 }}
                          />

                          <BiEditAlt
                            size={25}
                            onClick={() => handleEditItem(item, indice)}
                            style={{ cursor: "pointer", marginLeft: 10 }}
                          />

                          <BsCheckCircle
                            size={25}
                            onClick={() => handleConcluido(item, indice)}
                            style={{ cursor: "pointer", marginLeft: 10 }}
                          />
                          {/* </div> */}
                        </article>
                      </div>
                    </ul>
                  </div>
                </>
              );
            })}
            {listaConcluida != "" ? (
              <>
                <h1>Lista de tarefas concluídas</h1>
                <h5>Itens listados: {totalItensConcluidos}</h5>

                {listaConcluida.map((item, indice) => {
                  return (
                    <>
                      <div>
                        <ul>
                          {/* <li key={item}>{item}</li> */}
                          <article key={v4()}>
                            {item}
                            <AiOutlineDelete
                              size={25}
                              onClick={() =>
                                handleDeleteItemConcluido(item, indice)
                              }
                              style={{ cursor: "pointer", marginLeft: 10 }}
                            />
                          </article>
                        </ul>
                      </div>
                    </>
                  );
                })}
              </>
            ) : (
              <>{/* <h2>merda bosta</h2> */}</>
            )}
          </Grid>
        </Grid>
      </div>
    </>
  );
}
