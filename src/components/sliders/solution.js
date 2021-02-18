
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SliderBg1 from '../../assets/images/content/solution-vlr.png';
import SliderBg2 from '../../assets/images/content/solution-dtrac.png';
import SliderBg3 from '../../assets/images/content/solution-qc.png';


export default class SliderSolution extends React.Component{

  constructor(props){
    super(props);
    this.state={
      bgImage: SliderBg1,
      index: 1
    }
  }

  slideAutoChange =() =>{
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
        this.setState({bgImage: SliderBg1, index:4})
        break;
      };
      case 4:{
        this.setState({bgImage: SliderBg3, index: 5})
        break;
      };
      case 5:{
        this.setState({bgImage: SliderBg1, index: 1})
        break;
      };

    }
  }

  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  
  render(){
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      cssEase: "ease",
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            slidesToShow: 1
          }
        }
      ]

    };

    return (
      <div className="mt-5 e-bg-img-slider-wrap" style={{backgroundImage: "url(" + this.state.bgImage + ")"}} >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Slider className="e-bg-img-slider" {...settings} beforeChange={this.slideAutoChange}>
                <div className="e-slider-content d-flex align-items-end" onMouseEnter={() => this.setState({bgImage: SliderBg1, index: 1}) }>
                  <div className="align-self-end ">
                    <h3 className="">VisiLoan Review (VLR)</h3>

                    {
                      this.state.index == 1 ?
                        <React.Fragment>
                          <p>Loan processing solution that leverages AI/ML-based OCR technology to deliver over 98% accuracy.</p>
                          <a href="/" className="e-link-arrow">Learn More</a>
                        </React.Fragment>
                      :
                        <span className="e-white-wrrow ml-0"></span>
                    }

                  </div>
                </div>

                <div className="e-slider-content d-flex align-items-end" onMouseEnter={() => this.setState({bgImage: SliderBg2, index: 2 }) }>
                  <div className="align-self-end ">
                    <h3 className="">D-TRAC</h3>
                    {
                      this.state.index == 2 ?
                        <React.Fragment>
                          <p>Bulk title search solution with a search volume of 25,000/month with over 2 decades of title industry experience.</p>
                          <a href="/" className="e-link-arrow">Learn More</a>
                        </React.Fragment>
                      :
                        <span className="e-white-wrrow ml-0"></span>
                    }
                  </div>
                </div>

                <div className="e-slider-content d-flex align-items-end" onMouseEnter={() => this.setState({bgImage: SliderBg3, index: 3 }) }>
                  <div className="align-self-end ">
                    <h3 className="">Digital QC</h3>
                    {
                      this.state.index == 3 ?
                        <React.Fragment>
                          <p>Completely customizable QC platform to ensure a comprehensive pre-funding underwriting QC.</p>
                          <a href="/" className="e-link-arrow">Learn More</a>
                        </React.Fragment>
                      :
                        <span className="e-white-wrrow ml-0"></span>
                    }
                  </div>
                </div>

                <div className="e-slider-content d-flex align-items-end" onMouseEnter={() => this.setState({bgImage: SliderBg1, index: 4 }) }>
                  <div className="align-self-end ">
                    <h3 className="">AtClose</h3>
                    {
                      this.state.index == 4 ?
                        <React.Fragment>
                          <p>Completely customizable QC platform to ensure a comprehensive pre-funding underwriting QC.</p>
                          <a href="/" className="e-link-arrow">Learn More</a>
                        </React.Fragment>
                      :
                        <span className="e-white-wrrow ml-0"></span>
                    }
                  </div>
                </div>

                <div className="e-slider-content d-flex align-items-end" onMouseEnter={() => this.setState({bgImage: SliderBg1, index: 5 }) }>
                  <div className="align-self-end ">
                    <h3 className="">VisiLoan Review (VLR) 5</h3>
                    {
                      this.state.index == 5 ?
                        <React.Fragment>
                          <p>Completely customizable QC platform to ensure a comprehensive pre-funding underwriting QC.</p>
                          <a href="/" className="e-link-arrow">Learn More</a>
                        </React.Fragment>
                      :
                        <span className="e-white-wrrow ml-0"></span>
                    }
                  </div>
                </div>
              </Slider>
            </div>

          </div>
        </div>
      </div>
      
    );
  }
}