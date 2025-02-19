import { useState } from "react";
import { InputGroup, Form, Container, Button, Row, Col } from "react-bootstrap";
import axios from "axios";

function Identificacao({ modoExibicao }) { 
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    rua: "",
    numero: "",
    bairro: "",
    cep: "",
    cidade: "",
    uf: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/identificacao", form);
      alert("Dados salvos com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar:", error);
    }
  };

  return (
    <>
    <Container fluid>
      <h1 id="identificacao">Identificação</h1>
      <Container fluid>
        <Row className="justify-content-end">
          <Col md={6}>
            <Form onSubmit={handleSubmit}>
              <InputGroup size="sm" className="mb-2">
                <InputGroup.Text>Nome</InputGroup.Text>
                <Form.Control name="nome" value={form.nome} onChange={handleChange} readOnly={modoExibicao === "exibir"}/>
              </InputGroup>

              <InputGroup size="sm" className="mb-2">
                <InputGroup.Text>Telefone</InputGroup.Text>
                <Form.Control name="telefone" value={form.telefone} onChange={handleChange} readOnly={modoExibicao === "exibir"}/>
              </InputGroup>

              <h6>Endereço</h6>

              <InputGroup size="sm" className="mb-2">
                <InputGroup.Text>Rua</InputGroup.Text>
                <Form.Control  name="rua" value={form.rua} onChange={handleChange} readOnly={modoExibicao === "exibir"}/>
              </InputGroup>

              <InputGroup size="sm" className="mb-2">
                <InputGroup.Text>Número</InputGroup.Text>
                <Form.Control  name="numero" value={form.numero} onChange={handleChange} readOnly={modoExibicao === "exibir"}/>
              </InputGroup>

              <InputGroup size="sm" className="mb-2">
                <InputGroup.Text>Bairro</InputGroup.Text>
                <Form.Control name="bairro" value={form.bairro} onChange={handleChange} readOnly={modoExibicao === "exibir"}/>
              </InputGroup>

              <InputGroup size="sm" className="mb-2">
                <InputGroup.Text>CEP</InputGroup.Text>
                <Form.Control name="cep" value={form.cep} onChange={handleChange} readOnly={modoExibicao === "exibir"}/>
              </InputGroup>

              <InputGroup size="sm" className="mb-2">
                <InputGroup.Text>Cidade</InputGroup.Text>
                <Form.Control name="cidade" value={form.cidade} onChange={handleChange} readOnly={modoExibicao === "exibir"}/>
              </InputGroup>

              <InputGroup size="sm" className="mb-3">
                <InputGroup.Text>UF</InputGroup.Text>
                <Form.Control name="uf" value={form.uf} onChange={handleChange} readOnly={modoExibicao === "exibir"}/>
              </InputGroup>

              <Button type="submit" variant="outline-success" disabled={modoExibicao === "exibir"}>
                Salvar
              </Button>
            </Form>
          </Col>
        </Row>
        <hr />
      </Container>
    </Container>
    </>
  );
}

export default Identificacao;
