import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

/*Import Assets*/
import Banner1 from '../../assets/images/content/demo-banner.png';
import BannerBranding from '../../assets/images/branding-elements/banner-v.svg';



function DummyBanner(props){
	$("html, body").animate({ scrollTop: 0 }, "slow");
  return(
  	<section className="e-hero-banner e-demo-banner"> 
      <div className="container p-0 position-relative">
      	<div className="position-relative">
		      <img className="e-banner-image" src={Banner1} alt="Visionet - Agile, Nimble & Ready"/>
		      <img className="e-branding" src={BannerBranding} alt="Visionet Branding"/>
		        <div className="col-lg-10 col-sm-10 e-heading-wrap">
		        	<ScrollAnimation animateIn='fadeInLeftSmall' delay={0}>
		          	<h1 className="mb-4" data-parallax='{"y": -80}'>this is a demo redirection.</h1>
		          </ScrollAnimation>
		          <ScrollAnimation animateIn='fadeInLeftSmall' delay={200}>
			          <div className="e-back-wrap">
			          	<span className="e-left-arrow"></span>
			          	<Link to="/" className="e-back-link e-hover">Back to Home</Link>
			          </div>
			         </ScrollAnimation>
		        </div>
		    </div>
      </div>
    </section>
    
  )
}

export default DummyBanner;




