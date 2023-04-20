import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTags,
} from "@fortawesome/free-solid-svg-icons";

const Card = (props) => {
  return (
      <div className='card' style={{background:`${props.color}`,width:"100%",height:"100%"}}>
          <div className="card-icon">
              <FontAwesomeIcon icon={props.icons} className='card-inner-icon'/>
          </div>
          <p>{props.head }</p>
          <h1>${props.cost}</h1>        
      </div>
  )
}



export default Card