import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Nav from "../../Components/Nav/Nav";
import Map from "./../../Components/Map/Map"
import Footer from "../../Components/Footer/Footer";
import Third from "../../Components/Third/Third";
import Started from "../../Components/Started/Started";

export default function Contact(){
    return(
       <>
        <Nav/>
      <Third/>
       <Started/>
       <Map/>
       <Footer/>
    
     </>



    )
}