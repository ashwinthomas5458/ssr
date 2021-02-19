
import React from "react";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/*Import Assets*/
import SliderBg1 from '../../assets/images/content/solution-vlr.png';
import SliderBg2 from '../../assets/images/content/solution-dtrac.png';
import SliderBg3 from '../../assets/images/content/solution-qc.png';
import SliderBg4 from '../../assets/images/content/solution-atclose.png';
import SliderBg5 from '../../assets/images/content/solution-metrics.png';
import SliderBg6 from '../../assets/images/content/solution-loangility.png';
import SliderBg7 from '../../assets/images/content/solution-visirelease.png';

import RightArrow from '../../assets/images/icons/right-arrow-white.svg';
import LeftArrow from '../../assets/images/icons/left-arrow-white.svg';

export default class SliderSolution extends React.Component{

  constructor(props){
    super(props);
    this.state={
      bgImage: SliderBg1,
      index: 1
    }
  }

  slideAutoChange =(tempType) =>{
    switch(this.state.index) {
      case 1:{
        this.setState({bgImage: SliderBg2, index: 2})
        break;
      };
      case 2:{
        this.setState({bgImage: SliderBg3, index: 3})
        break;
      };
      case 3:{
        this.setState({bgImage: SliderBg4, index:4})
        break;
      };
      case 4:{
        this.setState({bgImage: SliderBg5, index: 5})
        break;
      };
      case 5:{
        this.setState({bgImage: SliderBg6, index: 6})
        break;
      };
      case 6:{
        this.setState({bgImage: SliderBg7, index: 7})
        break;
      };
      case 7:{
        this.setState({bgImage: SliderBg1, index: 1})
        break;
      };
    }
  }

  arrowClick(tempType){
    if(tempType == 2){
      this.slider.slickNext();
    }
    else{
      this.slider.slickNext();
    }
  }


  
  render(){
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      cssEase: "ease",
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: true,
      
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }
      ]

    };

    return (
      <div className="mt-5 e-bg-img-slider-wrap" style={{backgroundImage: "url(" + this.state.bgImage + ")"}} >
        <div className="container">
          <div className="row position-relative">
            <div className="e-arrow-wrap">
              <img className="e-left mr-5" src={LeftArrow} onClick={this.arrowClick.bind(this, 1)}/>
              <img className="e-right" src={RightArrow} onClick={this.arrowClick.bind(this, 2)}/>
            </div>
            <div className="col-lg-12">
              <Slider className="e-bg-img-slider" ref={c => (this.slider = c)} {...settings} beforeChange={this.slideAutoChange}> {/* afterChange={this.beforeAutoChange}  beforeChange={this.slideAutoChange beforeChange={this.slideAutoChange} */}
                
                <Link className="e-slider-content-link" to="/demo">
                  <div className="e-slider-content d-flex align-items-end" onMouseEnter={() => this.setState({bgImage: SliderBg1, index: 1}) }>
                    <div className="align-self-end ">
                      <ScrollAnimation animateIn='fadeInUp' delay={50}>
                        <h3 className="">VisiLoan Review (VLR)</h3>
                      </ScrollAnimation>

                      {
                        this.state.index == 1 ?
                          <React.Fragment>
                            <ScrollAnimation animateIn='fadeInUp' delay={100}>
                              <p>Loan processing solution that leverages AI/ML-based OCR technology to deliver over 98% accuracy.</p>
                              <span className="e-learn-more">Learn More</span>
                              <span></span>
                            </ScrollAnimation>
                          </React.Fragment>
                        :
                          <ScrollAnimation animateIn='fadeInUp' delay={100}>
                            <span className="e-white-wrrow ml-0"></span>
                          </ScrollAnimation>
                      }

                    </div>
                  </div>
                </Link>

                <Link className="e-slider-content-link" to="/demo">
                  <div className="e-slider-content d-flex align-items-end" onMouseEnter={() => this.setState({bgImage: SliderBg2, index: 2 }) }>
                    <div className="align-self-end ">
                      <ScrollAnimation animateIn='fadeInUp' delay={50}>
                        <h3 className="">D-TRAC</h3>
                      </ScrollAnimation>
                      {
                        this.state.index == 2 ?
                          <React.Fragment>
                            <ScrollAnimation animateIn='fadeInUp' delay={100}>
                              <p>Bulk title search solution with a search volume of 25,000/month with over 2 decades of title industry experience.</p>
                              <span className="e-learn-more">Learn More</span>
                              <span></span>
                            </ScrollAnimation>
                          </React.Fragment>
                        :
                          <ScrollAnimation animateIn='fadeInUp' delay={100}>
                            <span className="e-white-wrrow ml-0"></span>
                          </ScrollAnimation>
                      }
                    </div>
                  </div>
                </Link>

                <Link className="e-slider-content-link" to="/demo">
                  <div className="e-slider-content d-flex align-items-end" onMouseEnter={() => this.setState({bgImage: SliderBg3, index: 3 }) }>
                    <div className="align-self-end ">
                      <ScrollAnimation animateIn='fadeInUp' delay={50}>
                        <h3 className="">Digital QC</h3>
                      </ScrollAnimation>
                      {
                        this.state.index == 3 ?
                          <React.Fragment>
                            <ScrollAnimation animateIn='fadeInUp' delay={100}>
                              <p>Completely customizable QC platform to ensure a comprehensive pre-funding underwriting QC..</p>
                              <span className="e-learn-more">Learn More</span>
                              <span></span>
                            </ScrollAnimation>
                          </React.Fragment>
                        :
                          <ScrollAnimation animateIn='fadeInUp' delay={100}>
                            <span className="e-white-wrrow ml-0"></span>
                          </ScrollAnimation>
                      }
                    </div>
                  </div>
                </Link>

                <Link className="e-slider-content-link" to="/demo">
                  <div className="e-slider-content d-flex align-items-end" onMouseEnter={() => this.setState({bgImage: SliderBg1, index: 4 }) }>
                    <div className="align-self-end ">
                      <ScrollAnimation animateIn='fadeInUp' delay={50}>
                        <h3 className="">AtClose</h3>
                      </ScrollAnimation>
                      {
                        this.state.index == 4 ?
                          <React.Fragment>
                            <ScrollAnimation animateIn='fadeInUp' delay={100}>
                              <p>Cloud-based title closing software for automating appraisal, title, and settlement processes.</p>
                              <span className="e-learn-more">Learn More</span>
                              <span></span>
                            </ScrollAnimation>
                          </React.Fragment>
                        :
                          <ScrollAnimation animateIn='fadeInUp' delay={100}>
                            <span className="e-white-wrrow ml-0"></span>
                          </ScrollAnimation>
                      }
                    </div>
                  </div>
                </Link>

                <Link className="e-slider-content-link" to="/demo">
                  <div className="e-slider-content d-flex align-items-end" onMouseEnter={() => this.setState({bgImage: SliderBg5, index: 5 }) }>
                    <div className="align-self-end ">
                      <ScrollAnimation animateIn='fadeInUp' delay={50}>
                        <h3 className="">Vendor Metrics</h3>
                      </ScrollAnimation>
                      {
                        this.state.index == 5 ?
                          <React.Fragment>
                            <ScrollAnimation animateIn='fadeInUp' delay={100}>
                              <p>Powerful vendor management platform for automation and assistance in every aspect of vendor management.</p>
                              <span className="e-learn-more">Learn More</span>
                              <span></span>
                            </ScrollAnimation>
                          </React.Fragment>
                        :
                          <ScrollAnimation animateIn='fadeInUp' delay={100}>
                            <span className="e-white-wrrow ml-0"></span>
                          </ScrollAnimation>
                      }
                    </div>
                  </div>
                </Link>

                <Link className="e-slider-content-link" to="/demo">
                  <div className="e-slider-content d-flex align-items-end" onMouseEnter={() => this.setState({bgImage: SliderBg6, index: 6 }) }>
                    <div className="align-self-end ">
                      <ScrollAnimation animateIn='fadeInUp' delay={50}>
                        <h3 className="">LOANGILITY</h3>
                      </ScrollAnimation>
                      {
                        this.state.index == 6 ?
                          <React.Fragment>
                            <ScrollAnimation animateIn='fadeInUp' delay={100}>
                              <p>Covering the mortgage journey  from lead to closure and beyond.</p>
                              <span className="e-learn-more">Learn More</span>
                              <span></span>
                            </ScrollAnimation>
                          </React.Fragment>
                        :
                          <ScrollAnimation animateIn='fadeInUp' delay={300}>
                            <span className="e-white-wrrow ml-0"></span>
                          </ScrollAnimation>
                      }
                    </div>
                  </div>
                </Link>

                <Link className="e-slider-content-link" to="/demo">
                  <div className="e-slider-content d-flex align-items-end" onMouseEnter={() => this.setState({bgImage: SliderBg7, index: 7 }) }>
                    <div className="align-self-end ">
                      <ScrollAnimation animateIn='fadeInUp' delay={50}>
                        <h3 className="">VisiRelease</h3>
                      </ScrollAnimation>
                      {
                        this.state.index == 7 ?
                          <React.Fragment>
                            <ScrollAnimation animateIn='fadeInUp' delay={100}>
                              <p>VisiRelease suite offers an advanced technology solution in Lien Release, Recording & Assignment processing.</p>
                              <span className="e-learn-more">Learn More</span>
                              <span></span>
                            </ScrollAnimation>
                          </React.Fragment>
                        :
                          <ScrollAnimation animateIn='fadeInUp' delay={100}>
                            <span className="e-white-wrrow ml-0"></span>
                          </ScrollAnimation>
                      }
                    </div>
                  </div>
                </Link>

                

              </Slider>
            </div>

          </div>
        </div>
      </div>
      
    );
  }
}