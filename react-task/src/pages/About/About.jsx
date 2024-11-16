import React from "react";
import Nav from "../../Components/Nav/Nav"
import "bootstrap/dist/css/bootstrap.min.css"
import Myhero from "../../Components/Myhero/Myhero";
import Footer from "../../Components/Footer/Footer";
import End from "../../Components/End/End";


export default function About(){
    return(
        <>
       
          <Nav/> 
          <Myhero/>
          
          <Footer/>
        </>
    )
}