import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import A3 from "../images/A3.jpg"; 
import ContactForm from "../components/ContactForm";

function Contact(){

    return(
        <>
         <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg={A3}
        title="Contact Me"
        
        btnClass="hide"
        
        />
        <ContactForm/>
        <Footer/>
        </>
    );

}

export default Contact;