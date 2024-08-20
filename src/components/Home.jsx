import { Container, Row, Col, Carousel } from "react-bootstrap";
import paste from '../Data/menu.json'
//paste e un array di 5 oggetti, ognuno con 5 paste
const Home = function () {
  return (
    <Container>
      <Row className="justify-content-center my-4"> 
        {/* col-12*/}
        <Col xs={12} md={6} lg={4} className="text-center" > {/*posso scrivere anche className come in bootstrap */}
        <h2>
            Benvenuti a Epistorante!
        </h2>
        <h4>
            Ristorante italiano dal 1970
        </h4>
        </Col>
      </Row>
      <Row className="justify-content-center">
      <Col xs={12} md={6}>
      <Carousel>

        {paste.map((piatti) => {
                return (
                    <Carousel.Item key= {piatti.id}>
                    <img className="w-100" src={piatti.image} alt="img-piatti"/>
                     <Carousel.Caption>
                       <h3>{piatti.name}</h3>
                       <p>{piatti.description}</p>
                     </Carousel.Caption>
                   </Carousel.Item>
                )
            })
        }
   
    </Carousel>
      </Col>
      </Row>
    </Container>
  );
};
export default Home;
