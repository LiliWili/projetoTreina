import { useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/MyCSS.css';

import MyNavBar from './components/MyNavBar/MyNavBar';
import Identificacao from './components/Identificacao/Identificacao';
import Formacao from './components/Formacao/Formacao';
import Experiencia from './components/Experiencia/Experiencia';
import Adicionais from './components/Adicionais/Adicionais';
import Rodape from './components/Rodape/Rodape';
import { Container, Button } from "react-bootstrap";


function App() {
  const [modoExibicao, setModoExibicao] = useState("editar");

  const [identificacao, setIdentificacao] = useState({
    nome: "", telefone: "", email: "", rua: "", numero: "", bairro: "", 
    cep: "", cidade: "", uf: ""
  });

  const [formacoes, setFormacao] = useState({
    tipo: "", mesConclusao: "", anoConclusao: "", curso: "", instituicao: "", titulo: ""
  });

  const [experiencias, setExperiencia] = useState({
    empresa: "", mesInicio: "", anoInicio: "", mesFim: "", anoFim: "", funcao: ""
  });

  const [adicionais, setAdicionais] = useState({
    email: "", github: "", linkedin: "", whatsapp: ""
  });

  const handleSubmitAll = async () => {
    try {
      const dataToSend = { identificacao:identificacao, formacoes:formacoes, experiencias:experiencias, adicionais:adicionais };
      console.log("Enviando dados:", JSON.stringify(dataToSend, null, 2));
  
      const response = await axios.post("http://localhost:8080/api/formulario", dataToSend, {
      });
      alert("Dados salvos com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar:", error.response?.data || error.message);
    }
  };
  

  return (
    <>
      <MyNavBar setModoExibicao={setModoExibicao} />
      <Identificacao modoExibicao={modoExibicao} onDataChange={setIdentificacao}/>
      <Formacao modoExibicao={modoExibicao} onDataChange={setFormacao}/>
      <Experiencia modoExibicao={modoExibicao} onDataChange={setExperiencia}/>
      <Adicionais modoExibicao={modoExibicao} onDataChange={setAdicionais}/>
      <Container className="text-center my-4">
        <Button variant="outline-success" onClick={handleSubmitAll} disabled={modoExibicao === "exibir"}>
          Salvar Tudo
        </Button>
      </Container>
      <Rodape modoExibicao={modoExibicao} />
    </>
  );
}

export default App;
