
import React from "react"; 
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default class SliderReviews extends React.Component{

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
      slidesToScroll: 1,
      cssEase: "ease",
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: true,
      arrow: false

    };

    return (
      <div className="e-testimonial-card text-center" >
        <Slider className="" {...settings} beforeChange={this.slideAutoChange}>
          <div>
            <p className="e-testimonial-content pb-4">Visionet has been a fantastic partner of mine for many years. Their service levels and turn times have always been outstanding, and during this current COVID-19 pandemic, they haven’t missed a beat. There is no way I could have scaled my business as quickly as I have if I didn’t have Visionet as a partner.</p>
            <h6 className="pb-2">President & General Counsel</h6>
            <p className="e-testimonial-designation">National Provider of Title Insurance and Settlement Services</p>
          </div>
          <div>
            <p className="e-testimonial-content pb-4">Visionet has been a fantastic partner of mine for many years. Their service levels and turn times have always been outstanding, and during this current COVID-19 pandemic, they haven’t missed a beat. There is no way I could have scaled my business as quickly as I have if I didn’t have Visionet as a partner.</p>
            <h6 className="pb-2">President & General Counsel</h6>
            <p className="e-testimonial-designation">National Provider of Title Insurance and Settlement Services</p>
          </div>
          <div>
            <p className="e-testimonial-content pb-4">Visionet has been a fantastic partner of mine for many years. Their service levels and turn times have always been outstanding, and during this current COVID-19 pandemic, they haven’t missed a beat. There is no way I could have scaled my business as quickly as I have if I didn’t have Visionet as a partner.</p>
            <h6 className="pb-2">President & General Counsel</h6>
            <p className="e-testimonial-designation">National Provider of Title Insurance and Settlement Services</p>
          </div>
        </Slider>
      </div>
    );
  }
}