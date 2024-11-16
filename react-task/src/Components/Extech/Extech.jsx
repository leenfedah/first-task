import React from "react";
import './Extech.css'
import { Card, Col, Row } from "react-bootstrap";
import photo16 from "./../../assets/images/ctaThumb.webp"
import Button from 'react-bootstrap/Button';

export default function Extech(){
    return(
<>
<Card className="e1"> <Row>
    <Col md={2}></Col>
    <Col md={2}>
    <img src={photo16}/></Col>
    <Col md={2}>
    <h2>Stay Connected With Cuting Edge IT</h2></Col>
    <Col md={2}></Col>
    <Col md={2}> <Button variant="light">TALK TO A SPECIALIST</Button></Col>
    <Col md={2}></Col>
    </Row>


 </Card>





</>



    )
}