import { useState, useEffect } from 'react';
import { InputGroup, Form, Container, Col, Row, Image } from 'react-bootstrap';
import imgEmail from '../../assets/email.png';
import imgLinkedin from '../../assets/linkedin.png';
import imgGitHub from '../../assets/github.png';
import imgWhatsapp from '../../assets/whatsapp.png';

function Adicionais({ modoExibicao, onDataChange }) {
  const [adicionais, setForm] = useState({
    email: "",
    github: "",
    linkedin: "",
    whatsapp: ""
  });

  useEffect(() => {
    if (onDataChange) {
      onDataChange(adicionais);
    }
  }, [adicionais, onDataChange]);

  const handleChange = (e) => {
    const updatedForm = { ...adicionais, [e.target.name]: e.target.value };
    setForm(updatedForm);
    onDataChange(adicionais, updatedForm);
  };  

  return (
    <>
      <Container fluid>
        <h1 id="informacoesadicionais">Informações Adicionais</h1>
      </Container>
      <Container fluid>
        <Row className="justify-content-end">
          <Col md={6}>
            <InputGroup className="mb-3">
              <InputGroup.Text><Image width={30} height={30} src={imgEmail} roundedCircle/>Email</InputGroup.Text>
              <Form.Control name="email" value={adicionais.email} onChange={handleChange} placeholder="Link" aria-label="Link" readOnly={modoExibicao === "exibir"}/>
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text><Image width={30} height={30} src={imgGitHub} roundedCircle/> GitHub</InputGroup.Text>
              <Form.Control name="github" value={adicionais.github} onChange={handleChange} placeholder="Link" aria-label="Link" readOnly={modoExibicao === "exibir"}/>
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text><Image width={30} height={30} src={imgLinkedin} roundedCircle/> Linkedin</InputGroup.Text>
              <Form.Control name="linkedin" value={adicionais.linkedin} onChange={handleChange} placeholder="Link" aria-label="Link" readOnly={modoExibicao === "exibir"}/>
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text><Image width={30} height={30} src={imgWhatsapp} roundedCircle/> WhatsApp</InputGroup.Text>
              <Form.Control name="whatsapp" value={adicionais.whatsapp} onChange={handleChange} placeholder="Link" aria-label="Link" readOnly={modoExibicao === "exibir"}/>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Adicionais;
