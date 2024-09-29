import { Component } from "react";
import "./Destination.css";


class DestinationData extends Component{
    render (){
        return(
            <div className="destination">
            
            <div className={this.props.className}>
                <div className="dis-text">
                    <h2>{this.props.heading} </h2>
                    <p>{this.props.text}</p>
                </div>
                <div className="image">
                    <img alt="img" src={this.props.img1}/>
                    <img alt="img" src={this.props.img2}/>
                </div>

            </div>

         </div> 
         )
    }
}
export default DestinationData;