import React from "react";
import "./App.css";
import RoutesApp from "./routes";
// import Teste from "./Teste";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <RoutesApp />
      <ToastContainer autoClose={3000} />
    </div>
  );
}

export default App;
