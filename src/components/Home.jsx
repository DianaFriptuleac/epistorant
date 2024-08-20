import { Container, Row, Col, Carousel, ListGroup } from "react-bootstrap";
import pastasciutte from "../Data/menu.json";
import { Component } from "react";
import { render } from "@testing-library/react";
// pastasciutte è un array di 5 oggetti, ognuno rappresentante un piatto di pasta

class Home extends Component {
  state = {
    activePasta: pastasciutte[0],
  };

  render() {
    return (
      <Container>
        {/* un Container altro non è che un <div class="container"></div> */}
        <Row className="justify-content-center my-4">
          {/* col-12 col-md-6 col-lg-4 */}
          <Col xs={12} md={6} lg={4} className="text-center">
            <h2>Benvenuti a Epistaurant!</h2>
            <h4>Ristorante italiano dal 1970</h4>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <Carousel onSlide = {(i) =>{   /*i e l'indice della prossima slide*/
                console.log('slide cambiata', i)
                //dobbiamo settare lo stato del componente Home con pastasciuta [i]
                //come nuova activeSlide
                //lo stato di un componente e Read-only
                //per cambiare lo stato di un componente si usa un metodo setState() che accetta un nuovo oggetto cge verra unito con lo stato corrente
                this.setState({
                    activePasta: pastasciutte[i]
                })
            }}>
              {pastasciutte.map((pasta) => {
                return (
                  <Carousel.Item key={pasta.id}>
                    <img className="w-100" src={pasta.image} alt="piatti pic" />
                    <Carousel.Caption>
                      <h3>{pasta.name}</h3>
                      <p>{pasta.description}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <ListGroup className="text-center">
              {this.state.activePasta.comments.map((c) => {
                return(
                 <ListGroup.Item key ={c.id}>
                    {c.rating} | {c.comment}</ListGroup.Item>)
              })}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
