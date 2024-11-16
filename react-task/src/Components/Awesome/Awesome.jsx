import React from "react";
import photo11 from './../../assets/images/pricingIcon1_2.svg'
import photo12 from './../../assets/images/pricingShape1_1.webp'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col ,Row} from "react-bootstrap";
import photo28 from './../../assets/images/pricingIcon1_1.svg';
import photo29 from './../../assets/images/ctaThumb1_1.webp'
import Nav from 'react-bootstrap/Nav';

import './Awesome.css'

export default  function (){
    return(

   <>

     <h4 className="a1">OURPRICING</h4>
     <h2 className="a2">OUr Awesome Pricing PLans</h2>
    <Row className="a7">
      <Col md="5"></Col>
      <Col md="3">
    <Button variant="outline-dark" className="a3"><Button variant="primary" className="a4">Primary</Button><Button variant="outline-primary" className="a5">yearly</Button> </Button></Col>
    <Col md="1" ><img src={photo11}/></Col>
     <Col md="1" className="a6"><p>save 25%</p></Col>
     <Col md={2}></Col>
     </Row>
    
      <div className="a9">
        <Row>
      <Col md={2} className="a15"><img src={photo12} className="a8"/></Col>
      <Col md={3} className="a14">
      
      <Card style={{ width: '18rem',  }}>
        <Card  className="a10">
          <Row>
            <Col md={10}><h3 className="a13" >Regular Plans</h3>
            <h2 className="a13">$49</h2><p className="a13">/Month</p></Col>
            <Col md={2}><img src={photo28} className="a11"/></Col>
          </Row>
    </Card>
      <Card.Body>
        <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link eventKey="link-1">100 GB SSD Storage</Nav.Link>
      <Nav.Link eventKey="link-2">Weekly Backups</Nav.Link>
      <Nav.Link eventKey="link-2">Unlimited Free SSL</Nav.Link>
      <Nav.Link eventKey="link-2">24/7 System Monitoring</Nav.Link>
      <Nav.Link eventKey="link-2">Free Domain ($9.99 Value)</Nav.Link>
      <Nav.Link eventKey="link-2">Frame164236</Nav.Link>
      <Nav.Link eventKey="link-2">20+Payment Methods</Nav.Link>
      </Nav>
       <div className="a12">
        <Button variant="outline-primary" >Get Started Now</Button></div>
      </Card.Body>
    </Card>
      </Col>
      <Col md={3} className="a14"> <Card style={{ width: '18rem',  }}>
        <Card  className="a10">
          <Row>
            <Col md={10}><h3 className="a13" >Regular Plans</h3>
            <h2 className="a13">$49</h2><p className="a13">/Month</p></Col>
            <Col md={2}><img src={photo28} className="a11"/></Col>
          </Row>
    </Card>
      <Card.Body>
        <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link eventKey="link-1">100 GB SSD Storage</Nav.Link>
      <Nav.Link eventKey="link-2">Weekly Backups</Nav.Link>
      <Nav.Link eventKey="link-2">Unlimited Free SSL</Nav.Link>
      <Nav.Link eventKey="link-2">24/7 System Monitoring</Nav.Link>
      <Nav.Link eventKey="link-2">Free Domain ($9.99 Value)</Nav.Link>
      <Nav.Link eventKey="link-2">Frame164236</Nav.Link>
      <Nav.Link eventKey="link-2">20+Payment Methods</Nav.Link>
      </Nav>
       <div className="a12">
        <Button variant="outline-primary" >Get Started Now</Button></div>
      </Card.Body>
    </Card>

      </Col>
      <Col md={3} className="a14">
      <Card style={{ width: '18rem',  }}>
        <Card  className="a10">
          <Row>
            <Col md={10}><h3 className="a13" >Regular Plans</h3>
            <h2 className="a13">$49</h2><p className="a13">/Month</p></Col>
            <Col md={2}><img src={photo28} className="a11"/></Col>
          </Row>
    </Card>
      <Card.Body>
        <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link eventKey="link-1">100 GB SSD Storage</Nav.Link>
      <Nav.Link eventKey="link-2">Weekly Backups</Nav.Link>
      <Nav.Link eventKey="link-2">Unlimited Free SSL</Nav.Link>
      <Nav.Link eventKey="link-2">24/7 System Monitoring</Nav.Link>
      <Nav.Link eventKey="link-2">Free Domain ($9.99 Value)</Nav.Link>
      <Nav.Link eventKey="link-2">Frame164236</Nav.Link>
      <Nav.Link eventKey="link-2">20+Payment Methods</Nav.Link>
      </Nav>
       <div className="a12">
        <Button variant="outline-primary" >Get Started Now</Button></div>
      </Card.Body>
    </Card>
      </Col>
     </Row>
    </div>
    <div className="a21">
    <Card className="a16">
      <Row>
       
        <Col md={1}></Col>
        <Col md={2}><img src={photo29} className="a17"/></Col>
        <Col md={4}><p className="a20">contact us</p>
        <h2 className="a19">24/7 Expert Hosting Support Our Customers Love</h2>
        </Col>
        <Col md={2}></Col>
        <Col md={2}><Button variant="light" className="a18">Talk to specialist</Button></Col>
        <Col md={1}></Col>
      </Row>
    </Card>
    </div>
    



    


     </>


    )
}