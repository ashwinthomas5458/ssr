
import React from "react"; 
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Banner1 from '../../assets/videos/banner-1.png';
import Banner2 from '../../assets/videos/banner-2.png';
import Banner3 from '../../assets/videos/banner-3.mp4';


import BannerBranding from '../../assets/images/branding-elements/banner-v.svg';


export default class HeroSlider extends React.Component{

  constructor(props){
    super(props);
    this.state={
      index: 1
    }
  }

  slideAutoChange =() =>{
    if(this.state.index == 3){
      this.setState({index: 1 })
    }
    else{
      this.setState({index: this.state.index + 1 })
    }
  }
  
  
  render(){
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      cssEase: "ease",
      infinite: true,
      autoplay: true,
      autoplaySpeed: 10000,
      pauseOnHover: false,
      arrow: true,
      cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
      fade: true,
    };

    return (
      <Slider className="e-hero-slider" {...settings} beforeChange={this.slideAutoChange} >
        <div className="position-relative">
          <img className="e-banner-image" src={Banner1} alt="Visionet - Agile, Nimble & Ready"/>
          <img className="e-branding" src={BannerBranding} alt="Visionet Branding"/>
          <div className="col-lg-10 col-sm-10 e-heading-wrap">
            <h1 data-parallax='{"y": -80}'>Agile, Nimble & Ready to Deliver.</h1>
          </div>
          <div className="e-expertise-wrap">
            <div className="row">
              <div className="col-lg-6 d-flex align-items-center">
                <span className="e-slide-indicator">0{this.state.index}/03</span>
              </div>
              <div className="col-lg-6 ">
                <div className="e-expertise">
                  <p className="pb-4">Our best mortgage technology and agile services help you scale up your operations in short notice.</p>
                  <a className="e-link-arrow" href="/">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="position-relative">
          <img className="e-banner-image" src={Banner2} alt="Visionet - Agile, Nimble & Ready"/>
          <img className="e-branding" src={BannerBranding} alt="Visionet Branding"/>
          <div className="col-lg-10 col-sm-10 e-heading-wrap">
            <h1 data-parallax='{"y": -80}'>Domain sensitized fully operational ODC</h1>
          </div>
          <div className="e-expertise-wrap">
            <div className="row">
              <div className="col-lg-6 d-flex align-items-center">
                <span className="e-slide-indicator">0{this.state.index}/03</span>
              </div>
              <div className="col-lg-6 ">
                <div className="e-expertise">
                  <p className="pb-4">Our best mortgage technology and agile services help you scale up your operations in short notice.</p>
                  <a className="e-link-arrow" href="/">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="position-relative">
          <video preload="metadata" className="e-banner-video float-right m-hide" playsInline autoPlay muted loop id="bannerVideo"> {/* poster={BannerBranding} */}
            <source src={Banner3} type="video/mp4"/>
          </video>
          <img className="e-branding" src={BannerBranding} alt="Visionet Branding"/>
          <div className="e-overlay"></div>
          <div className="col-lg-11 col-sm-11 e-heading-wrap">
            <h1 data-parallax='{"y": -80}'>Resilient enterprise automation solution.</h1>
          </div>
          <div className="e-expertise-wrap">
            <div className="row">
              <div className="col-lg-6 d-flex align-items-center">
                <span className="e-slide-indicator">0{this.state.index}/03</span>
              </div>
              <div className="col-lg-6">
                <div className="e-expertise">
                  <p className="pb-4">Our best mortgage technology and agile services help you scale up your operations in short notice.</p>
                  <a className="e-link-arrow" href="/">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    );
  }
}