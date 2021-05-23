import React from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import "./header.css";

const Header = (props) => {
  return (
    <div className="header">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="#home">MapBox-Babylon</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Project Name" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Rename</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Save As</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"> Export</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Create New Project
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#features">Select</Nav.Link>
            <Nav.Link href="#pricing">Draw</Nav.Link>
            <Nav.Link href="#pricing">Import</Nav.Link>
            <Nav.Link href="#pricing">Measure</Nav.Link>
            <Nav.Link href="#pricing">View</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              <i className="fas fa-eye"></i>
            </Nav.Link>
            <NavDropdown title="Export/Save" id="collasible-nav-dropdown" className="header-model header-color">
              <NavDropdown.Item href="#action/3.1">Export Model</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Share Model</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Create New Project
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
