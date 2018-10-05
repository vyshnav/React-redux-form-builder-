import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Col, Row } from 'reactstrap';

export class Experience extends Component{
  render(){
    const experiences = this.props.experience.map( (exp, index) => {
      return (
        <li key={index}>
          <h3>{exp.position}</h3>
          <h3>{`${exp.dateFrom}-${exp.dateTo}`}</h3>
          <h5>{exp.company}, {`${exp.city}`}</h5>          
        </li>
      );
    });

    return (
      <section className='resume-experience'>
      { experiences.length ?
      <Row >
        <Col md={12}>
          <h2>Experience</h2>
          <hr />
          <div className="clearfix" style={{ padding: '1rem 5%' }}>
            <ul>{experiences}</ul>
          </div>
        </Col>
      </Row> : '' }
      </section>
    );
  }
}

Experience.defaultProps = {
  experience: []
}

const mapStateToProps = state => ({
  experience: state.resume.experience
});

export default connect(mapStateToProps)(Experience);