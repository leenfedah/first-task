import React from "react";
import { Col, Row } from "react-bootstrap";
import photo29 from './../../assets/images/testiThumb3_1.webp'
import photo30 from './../../assets/images/testiThumb3_2.webp'
import photo31 from './../../assets/images/testiThumb3_3.webp'
import './Latest.css'
import Card from 'react-bootstrap/Card';


export default function Latest(){
    return(

<>
<div>
<p className="l3">Testimonials</p>
<Row>
<h2 className="l4">Our Latest Client Feedback</h2>
<Col md={4}>
<Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Etech has completly transfarmed our process the user frendly interface and 
          poerful features mainainng our website highly recommended for all!
        </Card.Text>
       <Row>
        <Col md={2}>
        <img src={photo29}/>
        </Col>
        <Col md={10} >
        <h5 className="l1">Kristin Watson</h5>
        <p className="l1">web desinger</p>
        </Col>
       </Row>
      </Card.Body>
    </Card>
</Col>
<Col md={4}>

<Card style={{ width: '18rem' }} className="l2">
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        <Card.Text>
          Etech has completly transfarmed our process the user frendly interface and 
          poerful features mainainng our website highly recommended for all!
        </Card.Text>
       <Row>
        <Col md={2}>
        <img src={photo30}/>
        </Col>
        <Col md={10} >
        <h5 className="l1">theresa webb</h5>
        <p className="l1">tech enthusinst</p>
        </Col>
       
       </Row>
      </Card.Body>
    </Card>
</Col>
<Col md={4}>
<Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Etech has completly transfarmed our process the user frendly interface and 
          poerful features mainainng our website highly recommended for all!
        </Card.Text>
       <Row>
        <Col md={2}>
        <img src={photo31}/>
        </Col>
        <Col md={10} >
        <h5 className="l1">Ronald richeards</h5>
        <p className="l1">web Enterprrenuor</p>
        </Col>
        
       </Row>
      </Card.Body>
    </Card>
</Col>
</Row>
</div>


</>





    )
}