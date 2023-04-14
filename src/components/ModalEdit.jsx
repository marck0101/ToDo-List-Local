/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { Grid, Input, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { BiEditAlt } from "react-icons/bi";
import { toast } from "react-toastify";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ModalEdit({
  item,
  setItem,
  open,
  handleOpen,
  handleClose,
  // atualizar,
}) {
  // console.log("item", item);
  const [itemEditavel, setItemEditavel] = useState(item);
  // console.log("itemEditavel", itemEditavel);

  useEffect(() => {
    setItemEditavel(item);
  }, [item]);

  function atualizarTarefa() {
    // toast("tá funfando");
    setItem(itemEditavel);
    handleClose()
  }

  return (
    <Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid>
            {item}
            <br />
            {itemEditavel != "" ? itemEditavel : "Veio vazio"}
            <br />
            <TextField
              id="edit"
              name="edit"
              type="text"
              variant="outlined"
              value={itemEditavel}
              // value={item}
              size="small"
              onChange={(e) => setItemEditavel(e.target.value)}
            />
            <Button onClick={() => atualizarTarefa()}>Editar</Button>
          </Grid>
        </Box>
      </Modal>
    </Grid>
  );
}
