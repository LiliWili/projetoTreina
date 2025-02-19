import { useState } from 'react';
import { Button, Offcanvas, Nav } from 'react-bootstrap';

function ForaTela() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="light" onClick={handleShow}>
        Atalho
      </Button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Atalho</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav variant='tabs'>
            <Nav.Link href="#identificacao" onClick={handleClose}>Identificação</Nav.Link>
            <Nav.Link href="#formacao" onClick={handleClose}>Formação</Nav.Link>
            <Nav.Link href="#experiencia" onClick={handleClose}>Experiência</Nav.Link>
            <Nav.Link href="#informacoesadicionais" onClick={handleClose}>Informações Adicionais</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default ForaTela;
