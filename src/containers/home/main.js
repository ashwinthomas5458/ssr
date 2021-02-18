import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';



/*Import components*/
import SliderSolution from '../../components/sliders/solution';

import Header from '../global/header';
import Hero from './hero-banner';
import WhyUs from './why-us';
import Testimonials from './testimonials';
import LatestUpdates from './latest-updates';
import CTA from '../global/cta';
import Footer from '../global/footer';


/*Import Assets*/
import Logo from '../../assets/images/logo.png';


import Wedo from '../../assets/images/content/we-do-banner.svg';
import PrimaryColoredV from '../../assets/images/branding-elements/primary-colored-v.svg';
import GradientV from '../../assets/images/branding-elements/gradient-v.svg';

import OdcPartner from '../../assets/images/content/odc-partner-banner.png';




import SliderBg1 from '../../assets/images/content/solution-vlr.png';
import SliderBg2 from '../../assets/images/content/solution-dtrac.png';

export default class Home extends React.Component{

	constructor(props){
		super(props);
		this.state={
			
		}
	}


	

	render(){
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
		return(
			<React.Fragment>
        <Header/>
        <Hero/>

				

        <section className="e-wedo position-relative"> 
          <div className="e-line-branding"></div>
          <div className="container p-0">
            <div className="row">
              <div className="col-lg-10">
                <h5 className="mb-5">We do</h5>
                <h2>Redefining digital experiences in BFSI.</h2>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-lg-6 col-md-6 text-right">
                <img className="e-banner" src={Wedo} alt="Visionet Services"/>
                <img className="e-primary-branding" src={PrimaryColoredV} alt="Visionet - Digital Services in BFSI"/>
              </div>
              <div className="col-lg-6 col-md-6 pt-5">
                <div className="e-wedo-content">
                  <h3 className="e-link-arrow-black">Technology Services</h3>
                  <p className="pt-4">Providing custom solutions using BI, Data Science, Cloud Engineering and Testing to outperform the market.</p>
                </div>
                <div className="e-wedo-content">
                  <h3 className="e-link-arrow-black">Digital Operations</h3>
                  <p className="pt-4">Maximising business efficiency and profitability via services like Mortgage Processing, Title & Settlement, Valuation and ODC.</p>
                </div>
                <div className="e-wedo-content mb-0">
                  <h3 className="e-link-arrow-black">Complete Solutions</h3>
                  <p className="pt-4">Providing built-in solutions like VisiLoanReview, D-TRAC, Loangility, AtClose, Digital QC and Vendor Metrics.</p>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="e-odc-partner position-relative"> 
          <div className="e-line-branding"></div>
          <div className="container p-0">
            <div className="row">
              <div className="col-lg-12">
                <h5 className="mb-5">Your ODC partner</h5>
              </div>
              <div className="col-lg-7">
                <h2>Right-sized ODC partner.</h2>
                <div className="col-lg-10 p-0">
                  <p className="pt-5 pb-3">Visionet is the preferred ODC partner for financial institutions across geographies.</p>
                  <a href="/" className="e-link-arrow-blue">Learn more</a>
                  <div className="e-outcomes mt-4">
                    <h3 className="mb-4">Driving Outcomes</h3>
                    <p className="m-0">Delivering a scalable solution to manage high volume operations for a leading US Bank.</p>
                  </div>

                  <div className="row mt-4">
                    <div className="col-lg-4 col-4">
                      <div className="e-outcome-percentage">
                        30 <span>%</span>
                      </div>
                      <p className="e-outcome-text mt-2">TAT Improvement</p>
                    </div>
                    <div className="col-lg-4 col-4">
                      <div className="e-outcome-percentage">
                        40 <span>%</span>
                      </div>
                      <p className="e-outcome-text mt-2">Productivity Increase</p>
                    </div>
                    <div className="col-lg-4 col-4">
                      <div className="e-outcome-percentage">
                        98 <span>%</span>
                      </div>
                      <p className="e-outcome-text mt-2">Delivery Accuracy</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 text-right e-t-d-none">
                <img src={OdcPartner} alt="Visionet- ODC partner for financial institutions"/>
              </div>
            </div>

            
          </div>
        </section>


        <WhyUs/>

        <section className="e-solutions"> 
          <div className="container">
            <div className="row">
              <div className="col-lg-10">
                <h5 className="mb-5">Solutions</h5>
                <h2>our solutions.</h2>
              </div>
            </div>
          </div>
          <SliderSolution/>
        </section>





				<Testimonials/>

				
        <LatestUpdates/>
				<CTA/>
				<Footer/>
			</React.Fragment>
		)
	}
}






