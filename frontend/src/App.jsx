import { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import './components/MyCSS.css';

import MyNavBar from './components/MyNavBar/MyNavBar';
import Identificacao from './components/Identificacao/Identificacao';
import Formacao from './components/Formacao/Formacao'
import Experiencia from './components/Experiencia/Experiencia';
import Adicionais from './components/Adicionais/Adicionais'
import Rodape from './components/Rodape/Rodape';




function App() {
  const [modoExibicao, setModoExibicao] = useState("editar");
  return (
      <>
          <MyNavBar setModoExibicao={setModoExibicao}></MyNavBar>
          <Identificacao modoExibicao={modoExibicao}></Identificacao>
          <Formacao modoExibicao={modoExibicao}></Formacao>
          <Experiencia modoExibicao={modoExibicao}></Experiencia>
          <Adicionais modoExibicao={modoExibicao}></Adicionais>
          <Rodape modoExibicao={modoExibicao}></Rodape>
      </>
  );
}

export default App
