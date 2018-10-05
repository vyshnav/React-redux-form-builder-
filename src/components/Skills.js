import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Col, Row } from 'reactstrap';


export class Skills extends Component {

  render(){
    const skills = this.props.techSkills.map( (skill, index) => {
      return (
        <h5 key={index}>
          {skill},
        </h5>
      );
    });

    return (

      <section className='resume-skills'>
      { skills.length ?
        <Row >
          <Col md={12}>
        <h2>Technical Skills</h2>
        <hr/>  
        <div className="clearfix" style={{ padding: '1rem 5%' }}>
      
        {skills}  
        </div>        
        </Col>
      </Row> : '' }
      </section>
    );
  }
}

Skills.defaultProps = {
  techSkills: []
};

const mapStateToProps = state => ({
  techSkills: state.resume.skills
});

export default connect(mapStateToProps)(Skills);
 