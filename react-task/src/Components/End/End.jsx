import React from "react";
import { Col, Row } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import photo38 from './../../assets/images/footerThumb1_1.webp'
import photo39 from './../../assets/images/footerThumb1_2.webp'
import { Link } from "react-router-dom";
import './End.css'
export default function End(){
    return(

    <>
     <div className="e1">
        <Row>
  <Col md={1} ></Col>
  <Col md={3}>
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eveniet eos recusandae non modi nemo illo aliquam aliquid consectetur eius sed maiores quidem
    incidunt deleniti ipsum, cupiditate esse eligendi porro.
  </Col>
  <Col md={1}>
  </Col>
  <Col md={1}>
  <h3>quick links</h3>
  <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/home">ExtechAbout</Nav.Link>
      <Nav.Link eventKey="link-1">ourservices</Nav.Link>
      <Nav.Link eventKey="link-2">ourblogs</Nav.Link>
      <Nav.Link eventKey="disabled" disabled>
        faq's
      </Nav.Link>
      <Nav.Link eventKey="link-2">Contactus</Nav.Link>
    </Nav>
  </Col>
  <Col md={1}>
  </Col>
  <Col md={2}>
  <h3>recent posts</h3>
  <img src={photo38}/>
  <p>15th April ,2024</p>
  <h4>top5mostfamous
    technology trend in 2024
  </h4>
  <img src={photo39}/>
  <p>20thjune,2024</p>
  <h4>thesurfing man will blow your mind</h4>
  </Col>
  <Col md={1}>
  </Col>
  <Col md={2}>
  <h3>contact us</h3>
  <p>info@example .com</p>
  <p>+208-6666-0112</p>
  <Button variant="light">your email addres</Button>
  <p>I agree to the <Link href='#'>Privacy policy</Link></p>
  </Col>
        </Row>
    </div>
    
    
    
    </>



    )
}