import React from "react";
import './Mycard.css'
import { Card ,Row,Col } from "react-bootstrap";

export default function Mycard(){
return(
<>
<div>
    <Card>
      <Card.Body>
        <Row>
            <Col md={1}>
            </Col>
            <Col md={6}>
            <p>Address</p>
            <h4>4648 rocky road philadephia pa</h4>
            </Col>
            <Col md={2}>
            <p>send email</p>
            <h4>info@example.com</h4>
            </Col>
            <Col md={2}>
            <p>callemergency</p>
            <h4>+88 0123 654 99</h4>
            </Col>
            <Col md={1}>
            </Col>
            

        </Row>
      </Card.Body>
    </Card>
    </div>





</>



)
}