
import React from "react"; 
import Slider from "react-slick";
import ScrollAnimation from 'react-animate-on-scroll';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import UpdateCard from '../cards/news-updates';

import NewsContentImg1 from '../../assets/images/content/latest-updates-1.png';
import NewsContentImg2 from '../../assets/images/content/latest-updates-2.png';
import NewsContentImg3 from '../../assets/images/content/latest-updates-3.png';
import NewsContentImg4 from '../../assets/images/content/latest-updates-4.png';

export default class SliderNews extends React.Component{

  constructor(props){
    super(props);
    this.state={
      
    }
  }
  
  slideAutoChange(){

  }
  
  render(){
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      cssEase: "ease",
      infinite: false,
      autoplay: true,
      autoplaySpeed: 5000000,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1.5,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1.2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          }
        }
      ]

    };

    return (
      <div className="text-center" >
        <Slider className="" {...settings} beforeChange={this.slideAutoChange}>
          <ScrollAnimation animateIn='fadeInUp' delay={0}>
            <UpdateCard img={NewsContentImg1} data="Tackle Origination Costs this 2021- Leverage Tech" to="/demo"/>
          </ScrollAnimation>

          <ScrollAnimation animateIn='fadeInUp' delay={100}>
            <UpdateCard img={NewsContentImg2} data="How the US Housing Market will React to a COVID Vaccine" to="/demo"/>
          </ScrollAnimation>

          <ScrollAnimation animateIn='fadeInUp' delay={200}>
            <UpdateCard img={NewsContentImg3} data="Residential Mortgage – Things to Expect with the New President-Elect Joe Biden Taking Over" to="/demo"/>
          </ScrollAnimation>

          <ScrollAnimation animateIn='fadeInUp' delay={300}>
            <UpdateCard img={NewsContentImg4} data="Visionet Systems Joins the Google Cloud Partner Advantage Program to Extend.." to="/demo"/>
          </ScrollAnimation>
          
        </Slider>
      </div>
    );
  }
}