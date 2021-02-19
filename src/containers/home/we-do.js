import React from 'react';
// import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';

/*Import Assets*/
import Wedo from '../../assets/images/content/we-do-banner.png';
import PrimaryColoredV from '../../assets/images/branding-elements/primary-colored-v.svg';

function WeDo(props){
  // const ZoomInScrollOut = batch( FadeIn(), ZoomIn());
  // const FadeUp = batch(Fade(), Move());

  return(
      <section className="e-wedo position-relative"> 
        <div className="e-line-branding"></div>
        <div className="container p-0">
          <div className="row">
            <div className="col-lg-10">
              <ScrollAnimation animateIn='fadeInUp' delay={5}>
                <h5 className="mb-5">We do</h5>
              </ScrollAnimation>
              <ScrollAnimation animateIn='fadeInUp' delay={15}>
                <h2>Redefining digital experiences in BFSI.</h2>
              </ScrollAnimation>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-6 col-md-6 text-right">
              <img className="e-banner" src={Wedo} alt="Visionet Services"/>
              <img className="e-primary-branding" src={PrimaryColoredV} alt="Visionet - Digital Services in BFSI"/>
            </div>
            <div className="col-lg-6 col-md-6 pt-5">
              <ScrollAnimation animateIn='fadeInUp' duration={.8} delay={0}>
                <div className="e-wedo-content">
                  <Link to="/demo">
                    <h3 className="e-link-arrow-black"><span>Technology Services</span></h3>
                  </Link>
                  <p className="pt-4">Providing custom solutions using BI, Data Science, Cloud Engineering and Testing to outperform the market.</p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animateIn='fadeInUp' duration={.8} delay={5}>
                <div className="e-wedo-content">
                  <Link to="/demo">
                    <h3 className="e-link-arrow-black"><span>Digital Operations</span></h3>
                  </Link>
                  <p className="pt-4">Maximising business efficiency and profitability via services like Mortgage Processing, Title & Settlement, Valuation and ODC.</p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animateIn='fadeInUp' duration={.8} delay={10}>
                <div className="e-wedo-content mb-0">
                  <Link to="/demo">
                    <h3 className="e-link-arrow-black"><span>Complete Solutions</span></h3>
                  </Link>
                  <p className="pt-4">Providing built-in solutions like VisiLoanReview, D-TRAC, Loangility, AtClose, Digital QC and Vendor Metrics.</p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
  )
}

export default WeDo;


