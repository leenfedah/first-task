import React from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import photo1 from './../../assets/images/brandLogo1_1.svg'
import photo2 from './../../assets/images/brandLogo1_2.svg'
import photo3 from './../../assets/images/brandLogo1_3.svg'
import photo4 from './../../assets/images/brandLogo1_4.svg'
import photo5 from './../../assets/images/brandLogo1_5.svg'
import photo27 from './../../assets/images/heroShape1_3.webp'
import './Brands.css'
export default function Brands(){
    return(
        <>
        <div className="b3">
        <img src={photo27} className="b2"/></div>
      <Row className="row" >

         <Col md={1}></Col>
        <Col md={2} >
          <img src={photo1}  className="b1" />
        </Col>
        <Col md={2}>
          <Image src={photo2} className="b1"  />

        </Col>
        <Col  md={2} >
          <Image src={photo3} className="b1" />
          
        </Col>
        <Col  md={2}>
          <Image src={photo4} className="b1" />
          
        </Col>
        <Col  md={2} >
        
          <Image src={photo5} className="b1"/>
          
        </Col>
        <Col md={2}></Col>
       
        
      </Row>
   
        
        
        </>
    )
}