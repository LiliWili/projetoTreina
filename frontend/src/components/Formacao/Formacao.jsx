import { InputGroup, Form, Container, Button, Col, Row } from 'react-bootstrap';

function Formacao({ modoExibicao }) {
  return (
    <>
      <Container fluid>
        <h1 id="formacao">Formação</h1>
      </Container>
      <Container fluid>
        <Row className="justify-content-end">
          <Col md={6}>
            <Form.Select size="lg" aria-label="Tipo de Formação" disabled={modoExibicao === "exibir"}>
              <option>Tipo de Formação</option>
              <option value="0">Médio</option>
              <option value="1">Graduação</option>
              <option value="2">Pós Graduação</option>
              <option value="3">Técnico</option>
              <option value="4"> </option>
            </Form.Select>

            <Row>
              <Col>
                <h6>Mês e ano de conclusão</h6>
                <Form.Group>
                  <Form.Label>Mês</Form.Label>
                  <Form.Select disabled={modoExibicao === "exibir"}>
                    {Array.from({ length: 12 }, (_, i) => (
                      <option key={i} value={i + 1}>
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
            <br></br>
            <Form.Select size="lg" aria-label="Tipo de Formação" disabled={modoExibicao === "exibir"}>
              <option>Tipo de Formação</option>
              <option value="0">Médio</option>
              <option value="1">Graduação</option>
              <option value="2">Pós Graduação</option>
              <option value="3">Técnico</option>
              <option value="4"> </option>
            </Form.Select>

            <Row>
              <Col>
                <h6>Mês e ano de conclusão</h6>
                <Form.Group>
                  <Form.Label>Mês</Form.Label>
                  <Form.Select disabled={modoExibicao === "exibir"}>
                    {Array.from({ length: 12 }, (_, i) => (
                      <option key={i} value={i + 1}>
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

            <InputGroup size="sm" className="mb-2">
              <InputGroup.Text>Instituição de Ensino</InputGroup.Text>
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

export default Formacao;
