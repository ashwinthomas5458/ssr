import React from 'react';
import { Link } from 'react-router-dom';

/*Import Components*/
import HeroSlider from '../../components/sliders/hero';

/*Import Assets*/
import Logo from '../../assets/images/logo.png';
import BannerBranding from '../../assets/images/branding-elements/banner-v.svg';


function Hero(props){
  return(
    <section className="e-hero-banner"> 
      <div className="container p-0 position-relative">
        <HeroSlider/>
      </div>
    </section>
  )
}

export default Hero;




