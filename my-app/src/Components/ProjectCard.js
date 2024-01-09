import {Component} from "react";
import { useState } from "react";
import "./ProjectCard.css"

const ProjectCard = (props) => {
    
    const [showDetails, setShowDetails] = useState(false);
  
    
    const toggleDetails = () => {
      setShowDetails(!showDetails);
    };
  
    return (
      <div className={showDetails?"card-on":"card-off"} onClick={toggleDetails}>
        <div className="img-title">
          <img className="image-small" alt={`project ${props.heading}`} src={props.img} />
          <h2 className={showDetails?"pro-heading-on":"pro-heading-off"}>{props.heading}</h2>
        </div>
          {showDetails && (
           <p className={showDetails?"para-on":"para-off"}>{props.text}</p> 
          )}
        </div>
      
    );
  };
  
  export default ProjectCard;