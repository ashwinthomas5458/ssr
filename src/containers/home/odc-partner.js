import React from 'react';
// import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
import ScrollAnimation from 'react-animate-on-scroll';

/*Import Assets*/
import OdcPartner from '../../assets/images/content/odc-partner-banner.png';
import Branding from '../../assets/images/branding-elements/white-v.png';

function ODCPartner(props){
  return(
    <section className="e-odc-partner position-relative"> 
      <div className="e-line-branding"></div>
      <div className="container p-0">
        <div className="row">
          <div className="col-lg-12">
            <ScrollAnimation animateIn='fadeInUp' delay={5}>
              <h5 className="mb-5">Your ODC partner</h5>
            </ScrollAnimation>
          </div>
          <div className="col-lg-7">
            <ScrollAnimation animateIn='fadeInUp' delay={15}>
              <h2>Right-sized ODC partner.</h2>
            </ScrollAnimation>
            <div className="col-lg-10 p-0">
              <ScrollAnimation animateIn='fadeInUp' delay={20}>
                <p className="pt-5 pb-3">Visionet is the preferred ODC partner for financial institutions across geographies.</p>
                <a href="/demo" className="e-link-arrow-blue e-hover">Learn more</a>
                <span className="d-inline-block"></span>
              </ScrollAnimation>
              <ScrollAnimation animateIn='fadeInUp' delay={30}>
                <div className="e-outcomes mt-4">
                  <h3 className="mb-4">Driving Outcomes</h3>
                  <p className="m-0">Delivering a scalable solution to manage high volume operations for a leading US Bank.</p>
                </div>
              </ScrollAnimation>

              <div className="row mt-4">
                <div className="col-lg-4 col-4">
                  <ScrollAnimation animateIn='fadeInUp' delay={100}>
                    <div className="e-outcome-percentage">
                      30 <span>%</span>
                    </div>
                    <p className="e-outcome-text mt-2">TAT Improvement</p>
                  </ScrollAnimation>
                </div>
                <div className="col-lg-4 col-4">
                  <ScrollAnimation animateIn='fadeInUp' delay={250}>
                    <div className="e-outcome-percentage">
                      40 <span>%</span>
                    </div>
                    <p className="e-outcome-text mt-2">Productivity Increase</p>
                  </ScrollAnimation>
                </div>
                <div className="col-lg-4 col-4">
                  <ScrollAnimation animateIn='fadeInUp' delay={350}>
                    <div className="e-outcome-percentage">
                      98 <span>%</span>
                    </div>
                    <p className="e-outcome-text mt-2">Delivery Accuracy</p>
                  </ScrollAnimation>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 text-right e-t-d-none">
            <img src={OdcPartner} alt="Visionet- ODC partner for financial institutions"/>
            <img className="e-branding" src={Branding} alt="Visionet ODC partners"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ODCPartner;


