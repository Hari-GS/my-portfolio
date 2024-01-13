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
          <img className={showDetails?"image-big":"image-small"} alt={`project ${props.heading}`} src={props.img} />
          
          <div className="title-text">
            <h2 className={showDetails?"pro-heading-on":"pro-heading-off"}>{props.heading}</h2>
        
            {showDetails && (
            <p className={showDetails?"para-on":"para-off"}>{props.text}</p> 
            )}
          </div>
          
        
        
          {showDetails && (
          <p className={showDetails?"links-on":"links-off"} >
            
            <strong>Tech Stack : {props.techstack}</strong>
            <p>Github link : <a href={props.gitlink} target="_blank"> {props.gitlinksText}</a></p>
            <p>Live link URL : <a href={props.livelink} target="_blank"> {props.livelinktext}</a></p>
            
          </p>  
          )}
        
        </div>
      
    );
  };
  
  export default ProjectCard;