import React from "react";

// import assets

function Client(props){

  return (
  	<div className="e-client-card text-center">
      <img className="e-branding" src={props.img} alt={props.alt}/>
    </div>
  );
 }

 export default Client;