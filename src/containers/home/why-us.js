import React from 'react';
// import $ from 'jquery';
// import { Controller, Scene } from 'react-scrollmagic';
// import { Tween, Timeline } from 'react-gsap';
// import ScrollMagic from 'scrollmagic';




import BrandingV from '../../assets/images/branding-elements/gradient-v.svg';


import WhyExpertise from '../../assets/images/content/whyus-expertise.png';
import WhyTechnology from '../../assets/images/content/whyus-technology.png';
import WhyDelivery from '../../assets/images/content/whyus-delivery.png';
import WhyCompliance from '../../assets/images/content/whyus-compliance.png';

export default class WhyUs extends React.Component{

	componentDidMount() {

        // build scenes
        // new ScrollMagic.Scene({triggerElement: "#trigger", duration: 150})
        //     .setPin("#pin")
        //     .setClassToggle("#pin", "green")
        //     .on("enter leave", this.updateBox)
        //     .addIndicators() // add indicators (requires plugin)
        //     .addTo(this.controller);

    // new ScrollMagic.Scene({
    //   triggerElement: "#scrollStarts",
    //   duration: 400, // scroll distance
    //   offset: 200 // start this scene after scrolling for 50px
    // })
    //   .setTween("#myElement", {
    //     scale: 0.5,
    //     color: "red"
    //   })
    //   .setPin("#myElement") // pins the element for the the scene's duration
    //   .addTo(this.controller); // assign the scene to the controller
   


   }

   updateBox(){
   	console.log("inside");
   }
	
	render(){

		{/*<Controller>
      <Scene duration={600} triggerHook ={0.9}>


      	
      	<div id="trigger" className="e-branding-v-wrap ">
      		<Tween
	          staggerFrom={{
	            opacity: 0,
	            
	          }}
	          stagger={0.1}
	        >
        		<img id="pin" src={BrandingV}/>
        	</Tween>
        </div>
        


      </Scene>
    </Controller> */}


		return(

			<React.Fragment>
				
				<section className="e-why-us"> 
		      <div className="container p-0">
		        <div className="row">
		          <div className="col-lg-10">
		            <h5 className="mb-5">Why us</h5>
		            <h2 className="mb-4">Delivering Unmatched Value to the BFSI Industry.</h2>
		          </div>
		        </div>
		        <div className="row pt-5">
		          <div className="col-lg-6 position-relative e-item-wrap">
		            <img className="e-why-us-content-img" src={WhyExpertise} alt="Expertise in BFSI Industry"/>
		            <div className="offset-lg-4 col-lg-8 col p-0">

		            	<div className="e-why-us-content">
		                <h5 className="mb-3">Expertise</h5>
		                <h3>Deep<br/> Domain Expertise</h3>
		                <p className="mt-4">Provide unmatched value to our customers with  25 years of experience in serving global BFSI players.</p>
		              </div>
		            </div>
		          </div>
		          <div className="col-lg-6 text-right e-item-wrap">
		            <img src={WhyTechnology} alt="Expertise in BFSI Industry"/>
		            <div className="col-lg-8 p-0 ">
		              <div className="e-why-us-content text-left">
		                <h5 className="mb-3">Technology</h5>
		                <h3>Seamless<br/> Technology Adoption</h3>
		                <p className="mt-4">Disruption-free adoption and integration of technology to accelerate your digital transformation journey.</p>
		              </div>
		            </div>
		          </div>
		          <div className="col-lg-6 position-relative mt-4 e-item-wrap">
		            <img className="e-why-us-content-img" src={WhyCompliance} alt="Expertise in BFSI Industry"/>
		            <div className="offset-lg-4 col-lg-8 p-0 ">
		              <div className="e-why-us-content e-top">
		                <h5 className="mb-3">Expertise</h5>
		                <h3>Deep<br/> Domain Expertise</h3>
		                <p className="mt-4">Provide unmatched value to our customers with  25 years of experience in serving global BFSI players.</p>
		              </div>
		            </div>
		          </div>
		          <div className="col-lg-6 text-right position-relative mt-4 e-item-wrap">
		            <img className="e-why-us-content-img" src={WhyDelivery} alt="Expertise in BFSI Industry"/>
		            <div className="col-lg-8 p-0 ">
		              <div className="e-why-us-content text-left e-top">
		                <h5 className="mb-3">Expertise</h5>
		                <h3>Deep<br/> Domain Expertise</h3>
		                <p className="mt-4">Provide unmatched value to our customers with  25 years of experience in serving global BFSI players.</p>
		              </div>
		            </div>
		          </div>
		        </div>
		      </div>
		    </section>
		  </React.Fragment>
		)
	}

}





