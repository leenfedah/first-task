import React from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import photo6 from './../../assets/images/serviceIcon1_1.svg'
import photo7 from './../../assets/images/serviceIcon1_2.svg'
import photo8 from './../../assets/images/serviceIcon1_3.svg'
import photo9 from './../../assets/images/serviceIcon1_4.svg'
import photo10 from './../../assets/images/ctaShape1_1.webp'
import './Businesses.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Businesses(){
  return(

       <>
       <div>
       <h6 className="u1">OURSERVICES</h6>
       <h2 className="u2">ELEVATing Businesses With IT Ingenutity</h2></div>
       <div className="row">
       
     
      <div className="col-2">
      <Card style={{ width: '16rem' }} className="u4">
        <div className="u6">
        <Card className="u5"><img src={photo6} className="u3"/></Card></div>
      <Card.Body>
        <Card.Title>WOO Com</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        <Card.Text>
        collaboratively forulate principle capital. 
            progressively evolve user revolutionary hosting services.
        </Card.Text>
        <Button variant="outline-dark" className="u7">READ MORE</Button>
      </Card.Body>
    </Card>
 </div>
 <div className="col-1"></div>
      <div className="col-2">
      <Card style={{ width: '16rem' }}className="u4">
      <div className="u6"><Card className="u5">  <img src={photo7} className="u3"/></Card></div>
      <Card.Body>
        <Card.Title>WOO Com</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        <Card.Text>
        collaboratively forulate principle capital. 
            progressively evolve user revolutionary hosting services.
        </Card.Text>
        <Button variant="outline-dark" className="u7">READ MORE</Button>
      </Card.Body>
    </Card>
      </div>
     <div className="col-1"></div>
      <div className="col-2">
      <Card style={{ width: '16rem' }} className="u4">
      <div className="u6"><Card className="u5">  <img src={photo8} className="u3"/></Card></div>
      <Card.Body>
        <Card.Title>WOO Com</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        <Card.Text>
        collaboratively forulate principle capital. 
            progressively evolve user revolutionary hosting services.
        </Card.Text>
        <Button variant="outline-dark" className="u7">READ MORE</Button>
      </Card.Body>
    </Card>
      </div>
      <div className="col-1"></div>
      <div className="col-2">
      <Card style={{ width: '16rem' }} className="u4">
      <div className="u6"><Card className="u5">  <img src={photo9} className="u3"/></Card></div>
      <Card.Body>
        <Card.Title>WOO Com</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        <Card.Text>
        collaboratively forulate principle capital. 
            progressively evolve user revolutionary hosting services.
        </Card.Text>
        <Button variant="outline-dark" className="u7">READ MORE</Button>
      </Card.Body>
    </Card>
      </div>
     
    </div>
    <div>
<div className="v2">
<iframe width="760" height="315" src="https://www.youtube.com/embed/l-aV3qt6dKw?si=7zYt5jVzuWrfJtcJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="v1"></iframe>
</div>
     <div className="v3"> 

<card className='row'>
<card className= 'col-2'></card>
  <card className='col-2'>
    <h3 className="v5">Requirement</h3>
    <p className="v4">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
       Possimus aliquam odio quod ad voluptates.</p>
  </card>
  <card className='col-2'>
    <h3 className="v5">UI/UXDesign</h3>
    <p className="v4">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
       Possimus aliquam odio quod ad voluptates.</p>
  </card>
  <card className='col-2'>
    <h3 className="v5">Prototype</h3>
    <p className="v4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus aliquam odio quod ad voluptates.
       </p>
  </card>
  <card className='col-2'>
    <h3 className="v5">Development</h3>
    <p className="v4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus aliquam odio quod ad voluptates.
      </p>
  </card>
<card className='col-2'></card>
</card>
</div>
</div>
      
       
       
       </>

  )
}