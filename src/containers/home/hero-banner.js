import React from 'react';
import { Link } from 'react-router-dom';

/*Import Assets*/
import Logo from '../../assets/images/logo.png';
import BannerBranding from '../../assets/images/branding-elements/banner-v.svg';
// import Banner from '../../assets/videos/banner.mp4';

import HeroSlider from '../../components/sliders/hero';

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




