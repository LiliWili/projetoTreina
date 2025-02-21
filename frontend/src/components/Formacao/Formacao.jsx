import { useState, useEffect } from 'react';
import { InputGroup, Form, Container, Col, Row, Button } from 'react-bootstrap';

function Formacao({ modoExibicao, onDataChange }) {
  const [formacoes, setFormacoes] = useState([]);

  useEffect(() => {
    if (onDataChange) {
      onDataChange("formacao", formacoes);
    }
  }, [formacoes, onDataChange]);

  const handleChange = (index, e) => {
    const newFormacoes = [...formacoes];
    newFormacoes[index] = { ...newFormacoes[index], [e.target.name]: e.target.value };
    setFormacoes(newFormacoes);
  };

  const addFormacao = () => {
    setFormacoes([...formacoes, { tipo: '', mesConclusao: '', anoConclusao: '', curso:'', instituicao: '', titulo: '' }]);
  };

  const removeFormacao = (index) => {
    const newFormacoes = formacoes.filter((_, i) => i !== index);
    setFormacoes(newFormacoes);
  };

  return (
    <>
      <Container fluid>
        <h1 id="formacao">Formação</h1>
      </Container>
      <Container fluid>
        {formacoes.map((form, index) => (
          <div key={index}>
            <Row className="justify-content-end">
              <Col md={6}>
                <Form.Select 
                  size="lg" 
                  aria-label="Tipo de Formação" 
                  name="tipo" 
                  value={form.tipo} 
                  onChange={(e) => handleChange(index, e)} 
                  disabled={modoExibicao === "exibir"}>
                  <option value="">Tipo de Formação</option>
                  <option value="0">Médio</option>
                  <option value="1">Graduação</option>
                  <option value="2">Pós Graduação</option>
                  <option value="3">Técnico</option>
                </Form.Select>

                {form.tipo === "2" && (
                  <Form.Select 
                    size="lg" 
                    aria-label="Título" 
                    name="titulo" 
                    value={form.titulo} 
                    onChange={(e) => handleChange(index, e)} 
                    disabled={modoExibicao === "exibir"}>
                    <option value="">Selecione o título</option>
                    <option value="ABA">ABA</option>
                    <option value="Especialização">Especialização</option>
                    <option value="Mestrado">Mestrado</option>
                    <option value="Doutorado">Doutorado</option>
                    <option value="Pós-doutorado">Pós-doutorado</option>
                  </Form.Select>
                )}

                <Row>
                  <Col>
                    <h6>Mês e ano de conclusão</h6>
                    <Form.Group>
                      <Form.Label>Mês</Form.Label>
                      <Form.Select 
                        name="mesConclusao" 
                        value={form.mesConclusao} 
                        onChange={(e) => handleChange(index, e)} 
                        disabled={modoExibicao === "exibir"}>
                        {Array.from({ length: 12 }, (_, i) => (
                          <option key={i} value={i + 1}>{new Date(0, i).toLocaleString("pt-BR", { month: "long" })}</option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col>
                    <br />
                    <Form.Group>
                      <Form.Label>Ano</Form.Label>
                      <Form.Select 
                        name="anoConclusao" 
                        value={form.anoConclusao} 
                        onChange={(e) => handleChange(index, e)} 
                        disabled={modoExibicao === "exibir"}>
                        {Array.from({ length: 101 }, (_, i) => (
                          <option key={i} value={2025 - i}>{2025 - i}</option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>

                <InputGroup size="md" className="mb-2">
                  <InputGroup.Text>Instituição de Ensino</InputGroup.Text>
                  <Form.Control 
                    name="instituicao" 
                    value={form.instituicao} 
                    onChange={(e) => handleChange(index, e)} 
                    readOnly={modoExibicao === "exibir"} 
                  />
                </InputGroup>

                <InputGroup size="md" className="mb-2">
                  <InputGroup.Text>curso</InputGroup.Text>
                  <Form.Control 
                    name="curso" 
                    value={form.curso} 
                    onChange={(e) => handleChange(index, e)} 
                    readOnly={modoExibicao === "exibir"} 
                  />
                </InputGroup>
                <Button variant="outline-danger" onClick={() => removeFormacao(index)} className="mt-2">Remover Formação</Button>
              </Col>
            </Row>
          </div>
        ))}
        <Row className="mt-3">
          <Col md={{ span: 6, offset: 6 }}>
            <Button variant="outline-primary" onClick={addFormacao}>Adicionar Formação</Button>
          </Col>
        </Row>
        <hr />
      </Container>
    </>
  );
}

export default Formacao;
