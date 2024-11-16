import React from "react";
import Button from 'react-bootstrap/Button';

import photo17 from './../../assets/images/breadcrumb.webp' 
import { Col, Row } from "react-bootstrap";
import photo18 from './../../assets/images/asterisk.svg'
import photo19 from './../../assets/images/04.webp'
import photo20 from './../../assets/images/05.webp'
import photo21 from './../../assets/images/06.webp'
import photo22 from './../../assets/images/07.webp'
import photo23 from './../../assets/images/brandLogo1_1.svg'
import photo34 from './../../assets/images/photo_2024-11-15_18-01-36.jpg'
import photo35 from './../../assets/images/photo_2024-11-15_17-59-44.jpg'

import './Myhero.css'

export default function Myhero(){

    return(

<>
<div>
    <h2>About Us</h2>
    <img src={photo17} />
</div>
<div>
    <Row>
    <Col md={3}>< img src={photo18} className="M1"/>
    <h2 className="m1">CyberSecurity</h2>
    </Col>
    <Col md={3}>
    <img src={photo18} className="M1"/>
    <h2 className="m1">IT Solution</h2>
    </Col>  
    <Col md={3}>
    <img src={photo18} className="M1"/>
    <h2 className="m1">Technology</h2>
    </Col>
    <Col md={3}>
    <img src={photo18}className="M1" />
     <h2 className="m1">Data Secui</h2>
    </Col>
    </Row>

</div>
<div>
<p>Team MEMBERS</p>
<h2>Our Dedicated Team Members</h2>
<Button variant="primary">Primary</Button>
<Row>
<Col md={2}></Col>
<Col md={2}>
<img src={photo19} className="M2"/>
</Col>
<Col md={2}>
<img src={photo20} className="M3"/>
</Col>
<Col md={2}>
<img src={photo21} className="M2"/>
</Col>
<Col md={2}>
<img src={photo22} className="M2"/>
</Col>
<Col md={2}></Col>
</Row>

</div>
<div>
<p>1k+Brands Trust Us</p>
<Row>
<Col md={1}></Col>
<Col md={2}>
<img src={photo34} className="M4"/>
</Col>
<Col md={2}>
<img src={photo34} className="M4"/></Col>
<Col md={2}>
<img src={photo35}/>
</Col>
<Col md={2}>
<img src={photo34} className="M4"/>
</Col>
<Col md={2}>
<img src={photo34} className="M4"/>
</Col>
<Col md={1}></Col>
</Row>



</div>



</>



    )

}