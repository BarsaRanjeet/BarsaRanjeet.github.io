import { Container, Navbar, Nav, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {

    return <div>
        <Navbar bg="dark" data-bs-theme="dark" className='bg-body-tertiary'>
            <Container fluid>
                <Link to="/"><Navbar.Brand href='/'><img src="/images/logo.svg" width={400} height={50} /></Navbar.Brand></Link>
                <Nav className="justify-content-end">
                    <Link to="#feature" className='nav-link'><Nav.Link href="#features">Features</Nav.Link></Link>
                    <Link to="/login" className='nav-link'><Nav.Link href='/about'>About Me</Nav.Link></Link>
                    <Link to="/login" className='nav-link'><Nav.Link href='/contact'>Contact Me</Nav.Link></Link>
                    <Link to="/login" className='nav-link'><Nav.Link href='/login'>Login</Nav.Link></Link>
                </Nav>
            </Container>
        </Navbar>
    </div>
}

export default Header