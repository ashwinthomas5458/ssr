import React from "react";
import { Link } from 'react-router-dom';

// import assets
import BrandingElement from '../../assets/images/branding-elements/half-v.svg';

function UpdateCard(props){

  return (
    <Link to="/">
    	<div className="e-latest-stories-card">
        <img className="e-branding" src={BrandingElement} alt="Visionet branding-elements"/>
        <img className="e-content-banner" src={props.img} alt="Visionet latest news"/>
        <span className="e-overlay"></span>
        <h4><span>{props.data}</span></h4>
      </div>
    </Link>
  );
 }

 export default UpdateCard;