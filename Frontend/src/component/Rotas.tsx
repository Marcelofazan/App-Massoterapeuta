import { Route, Routes } from "react-router";
import GerenciamentoMassaterapeutaScreen from "../GerenciamentoMassaterapeutaScreen";

export default function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<GerenciamentoMassaterapeutaScreen />} />
    </Routes>
  )
}
