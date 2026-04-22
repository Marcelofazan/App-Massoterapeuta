import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GerenciamentoMassaterapeutaScreen from './GerenciamentoMassaterapeutaScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GerenciamentoMassaterapeutaScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
