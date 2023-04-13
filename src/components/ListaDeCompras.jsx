/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useMemo, useState } from "react";
import { Button, Grid, TextField } from "@mui/material";
import { v4 } from "uuid";
import { AiOutlineDelete } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import "./style.css";
import { BsCheckCircle } from "react-icons/bs";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { toast } from "react-toastify";

export default function ListaDeCompras() {
  const MySwal = withReactContent(Swal);
  const [lista, setLista] = useState([]);
  const [listaConcluida, setListaConcluida] = useState([]);
  const [item, setItem] = useState("");
  const newItem = document.getElementById("newItem");

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
    if (lista != "") {
      localStorage.setItem("lista", JSON.stringify(lista)); // se lista estiver vazio ele vai setar vazio
      localStorage.setItem("listaConcluida", JSON.stringify(listaConcluida)); // se lista estiver vazio ele vai setar vazio
    }
    // newItem.addEventListener("keyup", function(event) {
    // 	// verifica se a tecla pressionada é a tecla Enter
    // 	if (event.keyCode === 13) {
    // 		// chama a função que deve ser executada ao pressionar Enter
    // 		handleAdd();
    // 	}
    // })
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
      newItem.focus();
    } else {
      toast.error("Digite algo para ser inserido!");
    }
  }

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAdd();
    }
  };

  function handleDelete() {
    MySwal.fire({
      title: "Tem certeza?",
      text: "Essa ação não poderá ser revertida",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim, APAGAR!",
      cancelButtonText: "Não, MANTER",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("lista"); // se lista estiver vazio ele vai setar vazio
        setLista([]);
        toast.success("Processo realizado com sucesso!");
      }
    });
  }

  function handleDeleteItem(item, indice) {
    MySwal.fire({
      title: "Tem certeza?",
      text: `Tem certeza que deseja Deletar ${item.toUpperCase()}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim, APAGAR!",
      cancelButtonText: "Não, MANTER",
    }).then((result) => {
      if (result.isConfirmed) {
        const newListaRemove = lista;
        newListaRemove.splice(indice, 1);
        setLista(newListaRemove);
        localStorage.setItem("lista", JSON.stringify(lista));
        localStorage.getItem("lista");
        atualizar();
        toast.success("Processo realizado com sucesso!");
      }
    });
  }

  function handleEditItem(item, indice) {
    const newListaEdit = lista;
    let editItem = indice;
    const newItem = prompt("novo item");

    if (newItem !== "" && newItem !== null && editItem !== -1) {
      newListaEdit[editItem] = newItem;
      setLista(newListaEdit);
      localStorage.setItem("lista", JSON.stringify(lista));
      localStorage.getItem("lista");
      atualizar();
    } else {
      alert("informe o valor que vai substitui-lo");
    }
  }

  function handleConcluido(item, indice) {
    let filter = lista;
    let itemRecebido = item;
    MySwal.fire({
      title: "Tem certeza?",
      // text: "Essa ação não poderá ser revertida",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim, CONCLUIR!",
      cancelButtonText: "Não, MANTER",
    }).then((result) => {
      if (result.isConfirmed) {
        listaConcluida.push(itemRecebido); // não sobreescreve, só adiciona o item
        // setListaConcluida(...listaConcluida, itemRecebido); // aqui não está adicionando o valor
        localStorage.setItem("listaConcluida", JSON.stringify(listaConcluida));
        filter.splice(indice, 1);
        setLista(filter);
        localStorage.setItem("lista", JSON.stringify(lista));
        atualizar();
        toast.success("Processo realizado com sucesso!");
      }
    });
  }

  function handleDeleteItemConcluido(item, indice) {
    let filter = listaConcluida;

    MySwal.fire({
      title: "Tem certeza?",
      text: `Tem certeza que deseja Deletar ${item.toUpperCase()}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim, APAGAR!",
      cancelButtonText: "Não, MANTER",
    }).then((result) => {
      if (result.isConfirmed) {
        filter.splice(indice, 1);
        setListaConcluida(filter);
        localStorage.setItem("listaConcluida", JSON.stringify(listaConcluida));
        localStorage.getItem("listaConcluida");
        localStorage.setItem("lista", JSON.stringify(lista));
        localStorage.getItem("lista");
        atualizar();
        toast.success("Processo realizado com sucesso!");
      }
    });

    // }
  }

  function handleDeleteConcluido() {
    MySwal.fire({
      title: "Tem certeza?",
      text: "Essa ação não poderá ser revertida",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim, APAGAR!",
      cancelButtonText: "Não, MANTER",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("listaConcluida"); // se lista estiver vazio ele vai setar vazio
        setListaConcluida([]);
        toast.success("Processo realizado com sucesso!");
      }
    });
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
                  onKeyPress={handleKeyPress}
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

          <Grid item></Grid>

          <Grid item>
            {lista != "" && (
              <>
                <br />
                <h1>Lista</h1>
                <h5>Itens listados: {totalItens}</h5>
                {/* <br /> */}
              </>
            )}
            {lista.map((item, indice) => {
              return (
                <>
                  <div>
                    <ul>
                      <div>
                        <article key={v4()}>
                          {item}

                          <AiOutlineDelete
                            size={25}
                            onClick={() => handleDeleteItem(item, indice)}
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
                        </article>
                      </div>
                    </ul>
                  </div>
                </>
              );
            })}
            {listaConcluida != "" ? (
              <>
                <br />
                <h1>Lista Concluídas</h1>
                <Grid style={{ marginTop: 10, display: "flex" }}>
                  <h5>Itens listados: {totalItensConcluidos}</h5>
                  <br />
                  <Button
                    onClick={() => handleDeleteConcluido()}
                    variant="contained"
                    size="small"
                    color="error"
                    style={{ marginLeft: 25, marginTop: -10 }}
                  >
                    Deletar Lista
                  </Button>
                </Grid>

                {/* <br /> */}

                {listaConcluida.map((item, indice) => {
                  return (
                    <>
                      <div>
                        <ul>
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
              <></>
            )}
          </Grid>
        </Grid>
      </div>
    </>
  );
}
