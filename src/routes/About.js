import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import A2 from "../images/A2.jpg";
import AboutUs from "../components/AboutUs";

function About(){

    return(
        <>
         <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg={A2}
        title="Read About Me"
        
        btnClass="hide"
        
        />
        <AboutUs/>
        <Footer/>
        </>     
        
    )

}

export default About;