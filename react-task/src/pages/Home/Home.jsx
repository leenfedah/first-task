import React from "react";
import Nav from "../../Components/Nav/Nav"
import Hero from "../../Components/Hero/Hero";
import Brands from "../../Components/Brands/Brands";
import "bootstrap/dist/css/bootstrap.min.css"
import Businesses from "../../Components/Businesses/Businesses";
import Awesome from "../../Components/Awesome/Awesome";
import Featured from "../../Components/Featured/Featured";
import Footer from "../../Components/Footer/Footer";
import Latest from "../../Components/Latest/Latest";

export default function Home(){
    return(
        <>
         <Nav/>
         <Hero/>
         <Brands/>
        <Businesses/>
        <Awesome/>
        <Latest/>
        <Featured/>
       <Footer/>
        
        </>
    )
}