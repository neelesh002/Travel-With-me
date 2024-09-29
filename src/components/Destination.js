import A4 from "../images/A4.avif";
import A5 from "../images/A5.avif";
import A6 from "../images/A6.webp";
import A7 from "../images/A7.jpg";


import DestinationData from "./DestinationData";

import "./Destination.css";


const Destination =()=>{
    return(
         <div className="destination">
            <h1>Popular Destination</h1>
            <p>Tours give you the Opportunity to see a lot, within a time frame.</p>
            
            <DestinationData
            className="first-des"
            heading= "Taj Mahal, Agra"
            text="The Taj Mahal, located in Agra, India, is a stunning white marble mausoleum built by Emperor Shah Jahan in memory of his wife, Mumtaz Mahal. Completed in 1653, it is a UNESCO World Heritage Site and an iconic symbol of love. Its intricate architecture and beautiful gardens attract millions of visitors each year."
            img1={A4}
            img2={A5}
            />
             <DestinationData
             className="first-des-reverse"
            heading= "Duaadhar, Jabalpur"
            text="Duaadhar, located near Jabalpur in Madhya Pradesh, is a stunning natural rock formation and a popular tourist destination. Known for its unique twin waterfalls that cascade over cliffs, it offers breathtaking views and serene surroundings. The site is ideal for picnics and nature walks, attracting adventure seekers and families alike. Surrounded by lush greenery, Duaadhar provides a peaceful escape from city life. Its proximity to Jabalpur makes it an accessible getaway for locals and visitors."
            img1={A6}
            img2={A7}
            />

         </div>

    );
}

export default Destination;