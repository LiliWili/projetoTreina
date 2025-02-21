import { useState, useEffect } from "react";
import { InputGroup, Form, Container, Row, Col } from "react-bootstrap";
import axios from "axios";

function Identificacao({ modoExibicao, onDataChange }) { 
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    email:"",
    rua: "",
    numero: "",
    bairro: "",
    cep: "",
    cidade: "",
    uf: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  useEffect(() => {
    const fetchEndereco = async () => {
      if (form.cep.length === 8) {
        try {
          const response = await axios.get(`http://localhost:8080/endereco/${form.cep}`);
          setForm((prevForm) => ({
            ...prevForm,
            rua: response.data.logradouro,
            bairro: response.data.bairro,
            cidade: response.data.localidade,
            uf: response.data.uf,
          }));
        } catch (error) {
          console.error("Erro ao buscar endereço:", error);
        }
      }
    };

    fetchEndereco();
  }, [form.cep]);

  useEffect(() => {
    onDataChange("identificacao", form);
  }, [form, onDataChange]);

  return (
    <Container fluid>
      <h1 id="identificacao">Identificação</h1>
      <Container fluid>
        <Row className="justify-content-end">
          <Col md={6}>
            <Form>
              <InputGroup size="md" className="mb-2">
                <InputGroup.Text>Nome</InputGroup.Text>
                <Form.Control name="nome" value={form.nome} onChange={handleChange} readOnly={modoExibicao === "exibir"} />
              </InputGroup>

              <InputGroup size="md" className="mb-2">
                <InputGroup.Text>Telefone</InputGroup.Text>
                <Form.Control name="telefone" value={form.telefone} onChange={handleChange} readOnly={modoExibicao === "exibir"} />
              </InputGroup>

              <InputGroup size="md" className="mb-2">
                <InputGroup.Text>Email</InputGroup.Text>
                <Form.Control name="email" value={form.email} onChange={handleChange} readOnly={modoExibicao === "exibir"} />
              </InputGroup>

              <h6>Endereço</h6>

              <InputGroup size="md" className="mb-2">
                <InputGroup.Text>CEP</InputGroup.Text>
                <Form.Control name="cep" value={form.cep} onChange={handleChange} readOnly={modoExibicao === "exibir"} />
              </InputGroup>

              <InputGroup size="md" className="mb-2">
              <InputGroup.Text>Número</InputGroup.Text>
              <Form.Control name="numero" value={form.numero} onChange={handleChange} readOnly={modoExibicao === "exibir"} />
              </InputGroup>

              <InputGroup size="md" className="mb-2">
                <InputGroup.Text>Rua</InputGroup.Text>
                <Form.Control name="rua" value={form.rua} onChange={handleChange} readOnly />
              </InputGroup>

              <InputGroup size="md" className="mb-2">
                <InputGroup.Text>Bairro</InputGroup.Text>
                <Form.Control name="bairro" value={form.bairro} onChange={handleChange} readOnly />
              </InputGroup>

              <InputGroup size="md" className="mb-2">
                <InputGroup.Text>Cidade</InputGroup.Text>
                <Form.Control name="cidade" value={form.cidade} onChange={handleChange} readOnly />
              </InputGroup>

              <InputGroup size="md" className="mb-3">
                <InputGroup.Text>UF</InputGroup.Text>
                <Form.Control name="uf" value={form.uf} onChange={handleChange} readOnly />
              </InputGroup>
            </Form>
          </Col>
        </Row>
        <hr />
      </Container>
    </Container>
  );
}

export default Identificacao;
