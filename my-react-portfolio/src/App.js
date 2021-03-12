// import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import { Container, Row, Col } from "./components/Grid";
function App() {
  return (
    <div>
      <Nav />
      <Container>
        <Row>
          <Col size="md-12">
            <h1>Full Stack Web Developement</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
