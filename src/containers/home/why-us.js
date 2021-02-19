import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import BrandingV from '../../assets/images/branding-elements/light-gradient.png';
import WhyExpertise from '../../assets/images/content/whyus-expertise.png';
import WhyTechnology from '../../assets/images/content/whyus-technology.png';
import WhyDelivery from '../../assets/images/content/whyus-delivery.png';
import WhyCompliance from '../../assets/images/content/whyus-compliance.png';

export default class WhyUs extends React.Component{

   updateBox(){
   	console.log("inside");
   }
	
	render(){


		return(

			<React.Fragment>
				
				<section className="e-why-us"> 
		      <div className="container p-0">
		        <div className="row">
		          <div className="col-lg-10">
                <ScrollAnimation animateIn='fadeInUp' delay={50}>
		              <h5 className="mb-5">Why us</h5>
                </ScrollAnimation>
                <ScrollAnimation animateIn='fadeInUp' delay={200}>
		              <h2 className="mb-4">Delivering Unmatched Value to the BFSI Industry.</h2>
                </ScrollAnimation>
		          </div>
		        </div>
		        <div className="row pt-5">
              <div className="e-branding-wrap">
                <ScrollAnimation animateIn='ZoomIn' delay={200}>
                  <img className="e-branding" src={BrandingV} alt="Expertise in BFSI Industry"/>
                </ScrollAnimation>
              </div>
		          <div className="col-lg-6 position-relative e-item-wrap">
                <ScrollAnimation animateIn="fadeInLeft" delay={200}>
		              <img className="e-why-us-content-img" src={WhyExpertise} alt="Expertise in BFSI Industry"/>
                </ScrollAnimation>
                <div className="offset-lg-4 col-lg-8 col p-0">
                    
                    <div className="e-why-us-content">
                      <h5 className="mb-3">Expertise</h5>
                      <h3>Deep<br/> Domain Expertise</h3>
                      <p className="mt-4">Provide unmatched value to our customers with  25 years of experience in serving global BFSI players.</p>
                    </div>
                  
                </div>
		          </div>
		          <div className="col-lg-6 text-right e-item-wrap">
                <ScrollAnimation animateIn="fadeInRight" delay={200}>
		              <img src={WhyTechnology} alt="Expertise in BFSI Industry"/>
                </ScrollAnimation>
                <div className="col-lg-8 p-0 ">
                    <div className="e-why-us-content text-left">
                      <h5 className="mb-3">Technology</h5>
                      <h3>Seamless<br/> Technology Adoption</h3>
                      <p className="mt-4">Disruption-free adoption and integration of technology to accelerate your digital transformation journey.</p>
                    </div>
                  </div>
		          </div>
		          <div className="col-lg-6 position-relative mt-4 e-item-wrap">
                <ScrollAnimation animateIn="fadeInLeft" delay={200}>
		              <img className="e-why-us-content-img" src={WhyCompliance} alt="Expertise in BFSI Industry"/>
                </ScrollAnimation>
                <div className="offset-lg-4 col-lg-8 p-0 ">
                    <div className="e-why-us-content e-top">
                      <h5 className="mb-3">Compliance</h5>
                      <h3>Guaranteed<br/> Compliance</h3>
                      <p className="mt-4 pr-4">Our compliance solutions accurately verify hundreds of business rules and regulatory standards in moments.</p>
                    </div>
                  </div>
		          </div>
		          <div className="col-lg-6 text-right position-relative mt-4 e-item-wrap">
                <ScrollAnimation animateIn="fadeInRight" delay={200}>
		              <img className="e-why-us-content-img" src={WhyDelivery} alt="Expertise in BFSI Industry"/>
                </ScrollAnimation>
                <div className="col-lg-8 p-0 ">
                    <div className="e-why-us-content text-left e-top">
                      <h5 className="mb-3">Delivery</h5>
                      <h3>Predictable<br/> World Delivery</h3>
                      <p className="mt-4 pr-4">Visionet approaches technology delivery as a combination of high-value consulting and deep domain expertise.</p>
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





