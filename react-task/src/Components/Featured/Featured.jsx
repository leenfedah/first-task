import React from "react";
import { Col, Row } from "react-bootstrap";
import photo13 from './../../assets/images/blogThumb1_2.webp' 
import photo14 from './../../assets/images/blogThumb1_3.webp' 
import photo15 from './../../assets/images/blogThumb1_1.webp' 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Featured.css'



export default function(){
    return(
 <>
 <p className="t2">Blog &news</p>
 
 <h2 className="t3">Featured News And Insights</h2>
 <div>
<Row>
<Col md={4}>
<img src={photo13}/>

</Col>
<Col md={4}>
<img src={photo14}/>

</Col>

<Col md={4}>
<img src={photo15}/>

</Col>
</Row>

</div>
 
 </>
 
 

    )
}