
import React from "react"; 
import Slider from "react-slick";
import $ from 'jquery';
import ScrollAnimation from 'react-animate-on-scroll';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/*Import Assets*/
import Banner1 from '../../assets/images/content/banner-1.png';
import Banner2 from '../../assets/images/content/banner-2.png';
import Banner3 from '../../assets/images/content/banner-3.mp4';
import VideoPoster from '../../assets/images/content/video-poster.png';
import BannerBranding from '../../assets/images/branding-elements/banner-v.svg';


export default class HeroSlider extends React.Component{

  constructor(props){
    super(props);
    this.state={
      index: 1
    }
  }

  componentDidMount() {
    $('#e-banner-video').get(0).play()
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
      autoplaySpeed: 1000000,
      pauseOnHover: false,
      arrow: true,
      cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
      fade: true,
    };

    return (
      <Slider className="e-hero-slider" {...settings} beforeChange={this.slideAutoChange} >
        <div className="position-relative">
          <video preload="metadata" className="e-banner-video float-right m-hide" poster={VideoPoster} playsInline autoPlay muted loop id="e-banner-video"> {/* poster={BannerBranding} */}
            <source src={Banner3} type="video/mp4"/>
          </video>
          <img className="e-branding" src={BannerBranding} alt="Visionet Branding"/>
          <div className="e-overlay"></div>
          <ScrollAnimation animateIn='fadeInLeftSmall' delay={800}>
            <div className="col-lg-11 col-sm-11 e-heading-wrap">
              <h1 data-parallax='{"y": -80}'>Resilient enterprise automation solution.</h1>
            </div>
          </ScrollAnimation>
          <div className="e-expertise-wrap">
            <div className="row">
              <div className="col-lg-6 d-flex align-items-center">
                <span className="e-slide-indicator">0{this.state.index}/03</span>
              </div>
              <div className="col-lg-6">
                <ScrollAnimation animateIn='fadeInLeftSmall' delay={1200}>
                  <div className="e-expertise">
                    <h5 className="mb-3">Expertise</h5>
                    <p className="pb-4">Our intelligent enterprise automation solution can enhance your business operations efficiently.</p>
                    <a className="e-hover e-blue-underline" href="/demo">Learn More</a>
                    <span className="e-link-arrow"></span>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>

        <div className="position-relative">
          <img className="e-banner-image" src={Banner1} alt="Visionet - Agile, Nimble & Ready"/>
          <img className="e-branding" src={BannerBranding} alt="Visionet Branding"/>
          <ScrollAnimation animateIn='fadeInLeftSmall' delay={800}>
            <div className="col-lg-10 col-sm-10 e-heading-wrap">
              <h1 data-parallax='{"y": -80}'>Agile, Nimble & Ready to Deliver.</h1>
            </div>
          </ScrollAnimation>
          <div className="e-expertise-wrap">
            <div className="row">
              <div className="col-lg-6 d-flex align-items-center">
               <span className="e-slide-indicator">0{this.state.index}/03</span>
              </div>
              <div className="col-lg-6 ">
                <ScrollAnimation animateIn='fadeInLeftSmall' delay={1200}>
                  <div className="e-expertise">
                    <h5 className="mb-3">Expertise</h5>
                    <p className="pb-4">Our best mortgage technology and agile services help you scale up your operations in short notice.</p>
                    <a className="e-hover e-blue-underline" href="/demo">Learn More</a>
                    <span className="e-link-arrow"></span>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>

        <div className="position-relative">
          <img className="e-banner-image" src={Banner2} alt="Visionet - Agile, Nimble & Ready"/>
          <img className="e-branding" src={BannerBranding} alt="Visionet Branding"/>
          <ScrollAnimation animateIn='fadeInLeftSmall' delay={800}>
            <div className="col-lg-10 col-sm-10 e-heading-wrap">
              <h1 data-parallax='{"y": -80}'>Domain sensitized fully operational ODC</h1>
            </div>
          </ScrollAnimation>
          <div className="e-expertise-wrap">
            <div className="row">
              <div className="col-lg-6 d-flex align-items-center">
                <span className="e-slide-indicator">0{this.state.index}/03</span>
              </div>
              <div className="col-lg-6 ">
                <ScrollAnimation animateIn='fadeInLeftSmall' delay={1200}>
                  <div className="e-expertise">
                    <h5 className="mb-3">Expertise</h5>
                    <p className="pb-4">Our technology-led, secure and agile ODC can delivery business  outcome at scale</p>
                    <a className="e-hover e-blue-underline" href="/demo">Learn More</a>
                    <span className="e-link-arrow"></span>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    );
  }
}