import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import A1 from "../images/A1.avif"; 
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Home(){

    return(
        <>
        <Navbar/>
        <Hero
        cName="hero"
        heroImg={A1}
        title="Your Life Your Destination"
        text="Choose Your Favourite Destination."
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
        
        />
        <Destination/>
        <Trip/>
        <Footer/>
        </>
    );

}

export default Home;