import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//Components
import NavBar from './components/navBar';
import About from './components/about';
import Projects from './components/projects';
import Experience from './components/experience';
import Contact from './components/contact';
import Articles from './components/articles'

function App() {
  return (
    <div className="App">

      <Container>
        <Row>
          <About />
        </Row>
        <Row>
          <Experience />
        </Row>
        <Row>
          <Projects />
        </Row>
        <Row>
          <Col><Contact /></Col>
          <Col><Articles/></Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
