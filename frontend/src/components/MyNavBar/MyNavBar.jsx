import { useState, useEffect } from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { generatePDF } from "../../utils/GeneratePDF";

import "./MyNavBar.css";

import MyThemeSwitcher from "../MyThemeSwitcher/MyThemeSwitcher";
import MyAvatar from "../MyAvatar/MyAvatar";
import ForaTela from "../ForaTela/ForaTela";

function MyNavBar({ setModoExibicao }) {
    const savedTheme = localStorage.getItem("MyTheme") || "light";
    const [theme, setTheme] = useState(savedTheme);

    useEffect(() => {
        document.documentElement.setAttribute("data-bs-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("MyTheme", newTheme);
    };

    return (
        <>
            <Container>
                <Navbar expand="lg" fixed="top" className={theme === "dark" ? "dark-theme" : "light-theme"}>
                    <ForaTela />
                    <Button variant="light" size="md" onClick={() => generatePDF("body")}>GerarPDF</Button>
                    <Container>
                        <MyThemeSwitcher theme={theme} toggleTheme={toggleTheme}/>
                        <Nav variant="tabs" className="justify-content-center">
                            <Nav.Link  onClick={() => setModoExibicao("exibir")}>Exibir</Nav.Link>
                            <Nav.Link onClick={() => setModoExibicao("editar")}>Editar</Nav.Link>
                        </Nav>
                        <MyAvatar></MyAvatar>
                    </Container>
                </Navbar>
            </Container>
        </>
    );
}

export default MyNavBar;
