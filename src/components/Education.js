import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Col, Row } from 'reactstrap';

export class Education extends Component{
  render() {
    const educations = this.props.education.map( (ed, index) => {
      return(
        <li key={index}>
          <h3>{ed.title}</h3>
          { ed.dateFrom ? <h3>{`${ed.dateFrom}-${ed.dateTo}`}</h3> : <h3> </h3> }
          <h5>{ed.institute}</h5>
        </li>
      )
    });
    return (
      <section className='resume-education'>
       { educations.length ?
        <Row >
          <Col md={12}>
            <h2>Education</h2>
            <hr/>
            <div className="clearfix" style={{ padding: '1rem 5%' }}>
              <ul>{educations}</ul>
            </div>
          </Col>
        </Row> : '' }
      </section>
    );
  }
}

Education.defaultProps = {
  education: []
}

const mapStateToProps = state => ({
  education: state.resume.education
});

export default connect(mapStateToProps)(Education);