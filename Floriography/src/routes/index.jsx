import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Significados from "../pages/Significados";
import Combinacoes from "../pages/Combinacoes";
import Buques from "../pages/Buques";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/significados" element={<Significados />} />
      <Route path="/combinacoes" element={<Combinacoes />} />
      <Route path="/buques" element={<Buques />} />
    </Routes>
  );
}

export default AppRoutes;
