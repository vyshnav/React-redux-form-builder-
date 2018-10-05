import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

export default class NavBar extends React.Component {
  render() {
    return (
      <div>
        <Navbar color="white" white className="navbar-fixed-top" expand="md">
          <NavbarBrand href="/">React redux resume builder !</NavbarBrand>          
        </Navbar>
      </div>
    );
  }
}