import React from "react";
import { Col , Row} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './Started.css'


export default function Started(){
   return(
       <>
       <div>
        <Row>
          <Col md={2}></Col>
          <Col md={4}>
          <Card style={{ width: '20rem' }} className="s1">
      <ListGroup variant="flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        <div className="s2">
<iframe width="320" height="315" src="https://www.youtube.com/embed/l-aV3qt6dKw?si=7zYt5jVzuWrfJtcJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="v1"></iframe>
</div>
      </ListGroup>
    </Card>
          
          </Col>
          <Col md={4}>
          <h2>Ready to Get Started?</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit
             Quaerat non sit, blanditiis earum accusantium culpa.</p>
             <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Your Name*</Form.Label>
          <Form.Control type="name" placeholder="" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>You Email*</Form.Label>
          <Form.Control type="email" placeholder="" />
        </Form.Group>
      </Row> 
      </Form>

             <FloatingLabel controlId="floatingTextarea2" label="">Write Meesage*
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
        
          
      <Button variant="primary" type="submit">
       Send Message
      </Button>
     

          </Col>
          <Col md={2}></Col>
        </Row>
      </div>
      
      </>

  )
  
  }

 
 
 
 
 
 
 
 
 