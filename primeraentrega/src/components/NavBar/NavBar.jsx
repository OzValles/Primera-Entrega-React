import { CartWidget } from "../CartWidget/CartWidget"
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'


const NavBar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">PortaLapiz</Nav.Link>
                            <Nav.Link href="#pricing">Cortador de Galletas</Nav.Link>
                        </Nav>
                        <CartWidget />
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}
export default NavBar