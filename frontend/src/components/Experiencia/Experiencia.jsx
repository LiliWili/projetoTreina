import { useState, useEffect } from 'react';
import { InputGroup, Form, Container, Col, Row, Button } from 'react-bootstrap';

function Experiencia({ modoExibicao, onDataChange }) {
  const [experiencias, setExperiencias] = useState([]);

  useEffect(() => {
    if (onDataChange) {
      onDataChange(experiencias);
    }
  }, [experiencias, onDataChange]);

  const handleChange = (index, e) => {
    const newExperiencias = [...experiencias];
    newExperiencias[index] = { ...newExperiencias[index], [e.target.name]: e.target.value };
    setExperiencias(newExperiencias);
  };

  const addExperiencia = () => {
    setExperiencias([...experiencias, { empresa: '', mesInicio: '', anoInicio: '', mesFim: '', anoFim: '', funcao: '' }]);
  };

  const removeExperiencia = (index) => {
    setExperiencias(experiencias.filter((_, i) => i !== index));
  };

  return (
    <>
      <Container fluid>
        <h1 id="experiencia">Experiência</h1>
      </Container>
      <Container fluid>
        {experiencias.map((exp, index) => (
          <div key={index}>
            <Row className="justify-content-end">
              <Col md={6}>
                <InputGroup size="md" className="mb-2">
                  <InputGroup.Text>Empresa</InputGroup.Text>
                  <Form.Control name="empresa" value={exp.empresa} onChange={(e) => handleChange(index, e)} readOnly={modoExibicao === "exibir"} />
                </InputGroup>
                <InputGroup size="md" className="mb-2">
                  <InputGroup.Text>Função</InputGroup.Text>
                  <Form.Control name="funcao" value={exp.funcao} onChange={(e) => handleChange(index, e)} readOnly={modoExibicao === "exibir"} />
                </InputGroup>
                <Row>
                  <Col>
                    <h6>Mês e ano de Início</h6>
                    <Form.Group>
                      <Form.Label>Mês</Form.Label>
                      <Form.Select name="mesInicio" value={exp.mesInicio} onChange={(e) => handleChange(index, e)} disabled={modoExibicao === "exibir"}>
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
                      <Form.Select name="anoInicio" value={exp.anoInicio} onChange={(e) => handleChange(index, e)} disabled={modoExibicao === "exibir"}>
                        {Array.from({ length: 101 }, (_, i) => (
                          <option key={i} value={2025 - i}>{2025 - i}</option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h6>Mês e ano de Fim</h6>
                    <Form.Group>
                      <Form.Label>Mês</Form.Label>
                      <Form.Select name="mesFim" value={exp.mesFim} onChange={(e) => handleChange(index, e)} disabled={modoExibicao === "exibir"}>
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
                      <Form.Select name="anoFim" value={exp.anoFim} onChange={(e) => handleChange(index, e)} disabled={modoExibicao === "exibir"}>
                        {Array.from({ length: 101 }, (_, i) => (
                          <option key={i} value={2025 - i}>{2025 - i}</option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
                <Button variant="outline-danger" onClick={() => removeExperiencia(index)} className="mt-2">Remover Experiência</Button>
              </Col>
            </Row>
          </div>
        ))}
        <Row className="mt-3">
          <Col md={{ span: 6, offset: 6 }}>
            <Button variant="outline-primary" onClick={addExperiencia}>Adicionar Experiência</Button>
          </Col>
        </Row>
        <hr />
      </Container>
    </>
  );
}

export default Experiencia;
