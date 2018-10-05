import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'
import { Card, CardBody, Col, Button, Row, Form, FormGroup, Label, Input, ListGroup, ListGroupItem } from 'reactstrap';
import Multiselect from 'react-widgets/lib/Multiselect'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Resume from '../../resume-data';

import {
  updateResume,
  newResume
} from '../../actions';

const Editor = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  
  const submitForm = (formValues) => {    
    const updatedResume = isValidJSON(formValues);
    if(updatedResume) {
      props.dispatch(updateResume(updatedResume))      
      return;
    } 
  }

  const resetForm = e => {    
      props.dispatch(newResume()) 
      props.dispatch(reset('resume'));      
  }

  const isValidJSON = data => {
    let cleanedResume;
    try {
      const newResume = data;
      const keys = Object.keys(newResume);
      if( !('header' in keys) && typeof(newResume.header) !== 'object' ){
        return false;
      }

      let missingProp = false;
      [
        'name',
        'email',
        'phone',        
        'address',
      ].forEach( key => {
        if ( !(key in newResume.header) ) {
          missingProp = true;
        }
      });

      if (missingProp) {
        throw new Error('');
      }

      if( !('experience' in keys) && !Array.isArray(newResume.experience) ){
        throw new Error('');
      }
      if( !('education' in keys) && !Array.isArray(newResume.education) ){
        throw new Error('');
      }
      if( !('skills' in keys) && !Array.isArray(newResume.skills) ){
        throw new Error('');
      }      
      cleanedResume = {
        header: newResume.header,
        experience: newResume.experience,
        education: newResume.education,
        skills: newResume.skills
      }
    } catch (error) {
      return false;
    }
    return cleanedResume;
  }

  const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
        <Input {...input} type={type} placeholder={label}/>
        {touched && error && <span>{error}</span>}     
    </div>
  )

  const renderJobs = ({ fields, meta: { touched, error } }) => (      
      <ListGroup>        
        {fields.map((experience, index) =>
          <ListGroupItem key={index}>
           <FormGroup>
            <Button
              type="button"
              title="Remove Job"
              color="danger"
              className="float-right"
              style={{ margin: '.5rem' }}
              onClick={() => fields.remove(index)}>

              <FontAwesomeIcon icon={faTrash} />
            </Button> 

              <Field
                name={`${experience}.position`}
                type="text"
                component={renderField}
                label="Job position"/>
            </FormGroup> 
            <FormGroup> 
              <Field
                name={`${experience}.company`}
                type="text"
                component={renderField}
                label="Company"/>
            </FormGroup> 
            <FormGroup> 
              <Field
                name={`${experience}.city`}
                type="text"
                component={renderField}
                label="City"/>
              </FormGroup> 
            <FormGroup> 
              <Field
                name={`${experience}.country`}
                type="text"
                component={renderField}
                label="Country"/>
            </FormGroup>             
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label>START DATE</Label>   
                  <Field
                    name={`${experience}.dateFrom`}
                    type="date"
                    component={renderField}
                    label="XX/XXXX"/> 
                    </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label>END DATE</Label>  
                  <Field
                    name={`${experience}.dateTo`}
                    type="date"
                    component={renderField}
                    label="XX/XXXX"/> 
                    </FormGroup>
              </Col>
            </Row>                 
          </ListGroupItem>
        )}
        <ListGroupItem>
          <Button type="button" className="float-left" color="success" onClick={() => fields.push({})}>Add Jobs</Button>
          {touched && error && <span>{error}</span>}
        </ListGroupItem>
      </ListGroup>
    )

  const renderEducation = ({ fields, meta: { touched, error } }) => (      
      <ListGroup>        
        {fields.map((education, index) =>
          <ListGroupItem key={index}>
          <FormGroup>  
            <Button
              type="button"
              title="Remove Education"
              color="danger"
              className="float-right"
              style={{ margin: '.5rem' }}
              onClick={() => fields.remove(index)}>
              <FontAwesomeIcon icon={faTrash} />
            </Button>            
              <Field
                name={`${education}.title`}
                type="text"
                component={renderField}
                label="Education title"/>
            </FormGroup> 
            <FormGroup> 
              <Field
                name={`${education}.institute`}
                type="text"
                component={renderField}
                label="Institute name"/> 
            </FormGroup>     
            <Row form>
              <Col md={6}>
                <FormGroup>             
                  <Label>START DATE</Label>   
                  <Field
                    name={`${education}.dateFrom`}
                    type="date"
                    component={renderField}
                    label="XX/XXXX"/>                 
                </FormGroup>
              </Col>             
              <Col md={6}>
                <FormGroup>  
                  <Label>END DATE</Label>  
                  <Field
                    name={`${education}.dateTo`}
                    type="date"
                    component={renderField}
                    label="XX/XXXX"/>
                     </FormGroup>
              </Col> 
            </Row>              
          </ListGroupItem>
        )}
        <ListGroupItem>
          <Button type="button" className="float-left" color="success" onClick={() => fields.push({})}>Add Education</Button>
          {touched && error && <span>{error}</span>}
        </ListGroupItem>
      </ListGroup>
    )

  const renderMultiselect = ({ input, ...rest }) =>
    <Multiselect {...input}
      onBlur={() => input.onBlur()}
      value={input.value || []} // requires value to be an array
      {...rest}/>

  return (
    <Form onSubmit={handleSubmit(submitForm)}> 
     <Label>Profile</Label>
     <Card>   
      <CardBody>
  
      <FormGroup>          
          <Field
            name="header.name"
            component={renderField}
            type="text"
            label="Name"
          /> 
      </FormGroup> 
      <FormGroup>          
          <Field
            name="header.email"
            component={renderField}
            type="email"
            label="Email"
          />  
       </FormGroup> 
       <FormGroup>        
          <Field
            name="header.phone"
            component={renderField}
            type="number"
            label="Phone"
          /> 
       </FormGroup> 
       <FormGroup>           
          <Field
            name="header.address"
            component={renderField}
            type="text"
            label="Address"
          />
        </FormGroup>
        </CardBody>
      </Card>     
        
      <Label>Work experience</Label>
      <FieldArray name="experience" component={renderJobs}/>

      <Label>Education</Label>
      <FieldArray name="education" component={renderEducation}/>

      <Label>Skills</Label>
      <FormGroup>
      <Field
          name="skills"
          component={renderMultiselect}
          data={[ 'HTML', 'CSS', 'Angular','React','PHP','jQuery','vuejs','Bootstrap' ]}/>
      </FormGroup>
      
      <div className="clearfix" style={{ padding: '.5rem' }}>
        <Button type="submit" className="float-left" color="primary" disabled={pristine || submitting}>
              Submit
        </Button>
        <Button type="button" className="float-right" color="danger" disabled={submitting} onClick={resetForm} >
              Clear Values
        </Button>
      </div>        
    </Form>
  )
}

export default reduxForm({
  form: 'resume',
  initialValues: Resume// a unique identifier for this form
})(Editor)