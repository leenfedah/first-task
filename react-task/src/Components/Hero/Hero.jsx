import React from "react";
import { Row,Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import "./Hero.css"
import photo25 from './../../assets/images/heroThumb1_1.webp'
import Card from 'react-bootstrap/Card';
import photo26 from './../../assets/images/profileShape1_1.webp'


export default function Hero(){
    return(
       
     <>  
      <div className="H1">
       <Row>
        <Col md={6}>
        <Button variant="outline-light" className="H4">Every thing you need to create a website</Button>
            <h1 className="H5">Business Innovation with It services expertise</h1>
           <Row>
               
                <Col md={6} className="H5">
                    <ul>
                        <li>Deployment and Support </li>
                        <li>Discovry and Analisis</li>
                    </ul>

                </Col>
                <Col md={6} className="H5">
                    <ul>
                        <li> Flexbility and Adaptability</li>
                        <li> Compentitive Advantage</li>
                    </ul>
                    </Col>
                   
            </Row>
            <Button variant="danger" className="H3"> Get Started</Button>
        <Row>
            <Col md={1}></Col>
            <Col md={4}>
            <Card style={{ width: '16rem', height:'150px' }} className="H8">
      <Card.Body>
        <Card.Title className="H5">Trustipilot</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        <Card.Text>
            <Row>
                <Col md={5}>
         <img src={photo26} className="H6"/></Col>
         <Col md={7}>
         <p className="H7">450+review</p>
         </Col>
         </Row>
        </Card.Text>
        
      </Card.Body>
    </Card> 
            </Col>
            <Col md={1}></Col>
            <Col md={4}>
            <Card style={{ width: '16rem', height:'150px' }} className="H8">
      <Card.Body>
        <Card.Title className="H5">Google</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        <Card.Text>
            <Row>
                <Col md={5}>
         <img src={photo26} className="H6"/></Col>
         <Col md={7}>
         <p className="H7">450+review</p>
         </Col>
         </Row>
        </Card.Text>
        
      </Card.Body>
    </Card> 
            </Col>
            <Col md={2}></Col>
        </Row>
        </Col>
        <Col md={6}>
        <img  src={photo25} className="H2"/>
        </Col>
        </Row>
     
  </div>
</>
    )
}
