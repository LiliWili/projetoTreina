import { InputGroup, Form, Container, Button, Col, Row } from 'react-bootstrap';

function Experiencia({ modoExibicao }) {
  return (
    <>
      <Container fluid>
        <h1 id="experiencia">Experiência</h1>
      </Container>
      <Container fluid>
        <Row className="justify-content-end">
          <Col md={6}>
            <InputGroup size="sm" className="mb-2">
              <InputGroup.Text>Empresa</InputGroup.Text>
              <Form.Control readOnly={modoExibicao === "exibir"} />
            </InputGroup>
              <Row>
                <Col>
                  <h6>Mês e ano de Inicio</h6>
                  <Form.Group>
                    <Form.Label>Mês</Form.Label>
                    <Form.Select disabled={modoExibicao === "exibir"}>
                      {Array.from({ length: 12 }, (_, i) => (
                        <option value={i + 1}>
                          {new Date(0, i).toLocaleString("pt-BR", { month: "long" })}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col>
                  <br />
                  <Form.Group>
                    <Form.Label>Ano</Form.Label>
                    <Form.Select disabled={modoExibicao === "exibir"}>
                      {Array.from({ length: 101 }, (_, i) => (
                        <option key={i} value={2025 - i}>{2025 - i}</option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Row>
                <Col>
                <h6>Mês e ano de Fim</h6>
                <Form.Group>
                    <Form.Label>Mês</Form.Label>
                    <Form.Select disabled={modoExibicao === "exibir"}>
                      {Array.from({ length: 12 }, (_, i) => (
                        <option value={i + 1}>
                          {new Date(0, i).toLocaleString("pt-BR", { month: "long" })}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col>
                  <br />
                  <Form.Group>
                    <Form.Label>Ano</Form.Label>
                    <Form.Select disabled={modoExibicao === "exibir"}>
                      {Array.from({ length: 101 }, (_, i) => (
                        <option key={i} value={2025 - i}>{2025 - i}</option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>
                </Row>
              </Row>
            <InputGroup size="sm" className="mb-2">
              <InputGroup.Text>Função</InputGroup.Text>
              <Form.Control readOnly={modoExibicao === "exibir"} />
            </InputGroup>

            <Button type="submit" variant="outline-success" disabled={modoExibicao === "exibir"}>
              Salvar
            </Button>
          </Col>
        </Row>
        <hr />
      </Container>
    </>
  );
}

export default Experiencia;
