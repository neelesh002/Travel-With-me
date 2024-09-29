import "./Trip.css";
import TripData from "./TripData";
import A8 from "../images/A8.jpg";
import A9 from "../images/A9.avif";
import A10 from "../images/A10.avif";


function Trip(){
    return (
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps.</p>
            <div className="tripcard">
                <TripData
                
                image={A8}
                heading="Journey in jabalpur"
                text="Gwarighat, nestled along the serene banks of the Narmada River, is a tranquil haven where spirituality meets nature. The gentle lapping of water and the lush greenery create a peaceful atmosphere, inviting reflection and serenity. adding a sense of cultural richness and reverence to the stunning riverside views."
                 />

                  <TripData
                
                image={A9}
                heading="Trip in Jaipur"
                text="Jal Mahal, the stunning water palace in Jaipur, appears to float on Man Sagar Lake, showcasing exquisite Mughal architecture. Surrounded by picturesque hills, it serves as a breathtaking symbol of Rajasthan's rich heritage."
                 />
                 <TripData
                
                image={A10}
                heading="Journey in Punjab"
                text="The Golden Temple in Amritsar is a sacred Sikh shrine, renowned for its stunning golden architecture and serene reflection pool. It serves as a symbol of peace and inclusivity, welcoming visitors from all walks of life."
                 /> 
            </div>

        </div>
    );

}

export default Trip;