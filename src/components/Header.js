import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Col, Row, ListGroup, ListGroupItem } from 'reactstrap';

export class Header extends Component {
  render() {
    return (
      <header className="resume-header">
        <Row >
          { this.props.header.name ?
          <Col md={8}>
            <h1>{this.props.header.name}</h1>
            </Col> : '' }  
          <Col md={4}>
          <ListGroup>
            { this.props.header.email ?
              <ListGroupItem>
                <a href={`mailto:${this.props.header.email}?subject=Interview%20Request`}>{this.props.header.email}</a>
              </ListGroupItem> : '' }
            { this.props.header.phone ?
              <ListGroupItem>
                <a href={`tel:${this.props.header.phone}`}>{this.props.header.phone}</a>
              </ListGroupItem> : '' } 
            {this.props.header.address ?          
              <ListGroupItem>{this.props.header.address}</ListGroupItem> : '' }             
          </ListGroup>
          </Col>
        </Row> 
        <hr/>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  header: state.resume.header 
});

export default connect(mapStateToProps)(Header);
 

