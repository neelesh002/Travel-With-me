import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import A11 from "../images/A11.avif"; 
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service(){

    return(
        <>
         <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg={A11}
        title="Service"
        
        btnClass="hide"
        
        />
        <Trip/>
        <Footer/>
      </>
    )

}

export default Service;