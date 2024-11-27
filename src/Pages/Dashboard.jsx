import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Dashboard.css'

export default function Dashboard() {
  return (
    <>
    <div>Dashboard</div>
    <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#doctor">Doctor</Nav.Link>
            <Nav.Link href="#nurse">Nurse</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
  )
}
