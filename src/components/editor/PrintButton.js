import React from 'react'
import { Button } from 'reactstrap';

export default function PrintButton(props){
  return (
    <div className="resume-tools-print-button">
    <Button color="primary" style={{ width: '100%' }} className="float-left" onClick={ () => window.print()}>Print</Button>
  </div>
  );
}