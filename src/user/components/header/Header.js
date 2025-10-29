import { Container, Navbar, Nav, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
        <Container fluid>
          <Link to="/" as={Link}>
            <Navbar.Brand>
              <img src="/images/logo.svg" width={400} height={50} />
            </Navbar.Brand>
          </Link>
          <Nav className="justify-content-end">
            <Nav.Link as={Link} to="/features">Features</Nav.Link>
            <Nav.Link as={Link} to="/about">About Me</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact Me</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
