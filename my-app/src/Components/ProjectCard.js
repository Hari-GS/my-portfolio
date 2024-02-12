import {Component} from "react";
import { useState } from "react";
import "./ProjectCard.css"

const ProjectCard = (props) => {
    
    const [showDetails, setShowDetails] = useState(true);
  
    
    const toggleDetails = () => {
      setShowDetails(!showDetails);
    };
  
    return (
      <div className={showDetails?"card-on":"card-off"}>
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
            <p>Github link: 
            <p>{props.front}</p>
            <a style={{ display: 'inline', color:'yellow'}} href={props.gitlink} target="_blank">{props.gitlinksText}</a>
            <p>{props.back}</p>
            <a style={{ display: 'inline', color:'yellow'}} href={props.gitlink2} target="_blank">{props.gitlinksText2}</a>
            </p>

            <p>Live link URL : <a style={{color:'yellow'}}href={props.livelink} target="_blank"> {props.livelinktext}</a></p>
            
          </p>  
          )}
        
        </div>
      
    );
  };
  
  export default ProjectCard;