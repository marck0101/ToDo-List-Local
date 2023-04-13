import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListaDeCompras from "./components/ListaDeCompras";
// import ReqHTTP from "./Secoes/Secao7/S7Aula53";
// import Teste from "./Teste";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListaDeCompras />} />
        {/* <Route path="/" element={<Teste />} /> */}
        {/* <Route path="/listaCompras" element={<ListaDeCompras />} />
        <Route path="/nutri" element={<ReqHTTP />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
export default RoutesApp;
