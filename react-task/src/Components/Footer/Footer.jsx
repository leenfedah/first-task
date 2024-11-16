import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Footer.css'


export default function Footer(){
    return(

   <div>
     <Navbar className="footer" >
      <Container>
        <Navbar.Brand href="#home"> <a className="f1">&copy All copyright 2024 by Extech</a> </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Row>
            <Col md={5}>
            <a >Terms&Condation</a></Col>
            <Col md={2}></Col>
            <Col md={5} >
             <a > PrivacyPolicy</a></Col>
             </Row>
            
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
      </Navbar>
      
    </div>


    )
}