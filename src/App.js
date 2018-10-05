import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import NavBar from './components/Navbar';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import SideBar from './components/editor/SideBar';

import Notifications from 'react-notify-toast';

class App extends Component {

  render() {
    return (
      <Container fluid>
        <NavBar />
        <Notifications />
        <Row>
          <Col xl="4" sm="12" >
            <SideBar/>
          </Col>
          <Col xl="8" sm="12" id="printMe"> 
              <Container className="resume" style={{ fontFamily: 'Roboto Slab, serif, monospace' }}>
              <Header />
              <Education />
              <Skills />
              <Experience />
            </Container>
          </Col>
        </Row>       
      </Container>
    );
  }
}

export default App;
