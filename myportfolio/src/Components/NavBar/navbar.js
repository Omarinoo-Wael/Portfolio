import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import igImg from '../../assets/instagram.png';
import linkedinImg from '../../assets/linkedin.png';
import githubImg from '../../assets/github.png';
import Logo from '../../assets/OW.png';
import contactBtn from '../../assets/arrow-right-circle.svg';

import './style.css';
function navbar() {
  return (
    <Navbar expand="lg" className="custom-nav" fixed='top' variant='dark'>
      <Container>
        <Navbar.Brand href="#home">
            <span className='logo'>
                <img src={Logo} alt='logo'/>
            </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#skills">Skills</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
            </Nav>
            <span className='socials'>
                <a href='https://www.instagram.com/omarinoo_wael'><img src={igImg} alt='Instagram'/></a>
                <a><img src={linkedinImg} alt='LinkedIn'/></a>
                <a href='https://github.com/Omarinoo-Wael'><img src={githubImg} alt='GitHub'/></a>
            </span>
            <button className='contact-btn' onClick={()=>{console.log("hi")}}>
            Let's Connect!
            <img src={contactBtn} alt=''/>
            </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navbar;