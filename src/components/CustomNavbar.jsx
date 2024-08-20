import {Navbar, Container, Nav } from "react-bootstrap"
//importo le cose non esportato di default e servono le {}
//se invece un elemento e stato esportato come default posso importarlo senza le graffe
const CustomNavbar = function(){
    //nel return incollo na nav di react-bootstrap
        return (
          <Navbar collapseOnSelect expand="md" bg="dark" data-bs-theme="dark">
            <Container fluid>
              <Navbar.Brand href="#home">Epistaurant</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link href="#home">Menu</Nav.Link>
                  <Nav.Link href="#features">Prenotazioni</Nav.Link>
                  <Nav.Link href="#pricing">Dove siamo</Nav.Link>
                  <Nav.Link href="#pricing">Contattaci</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        )
      }
//il fragment <> </> non ci serve perche abbiamo gia solo un parent che e la <Navbar>

export default CustomNavbar