import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import SimpleForm from './Editor';
import PrintButton from './PrintButton';

export class SideBar extends Component {
  render() {
    return(
      <div className="resume-tools-bar">
          <Container className="resume-tools-container">
            <Row>    
              <Col xs="12"><PrintButton /></Col>
            </Row>                  
            <SimpleForm />
          </Container>  
      </div>
    );
  }
}

export default SideBar;