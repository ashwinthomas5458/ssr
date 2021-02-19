import React from 'react';
import $ from 'jquery';
// import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";


/*Import components*/
import Header from '../global/header';
import Hero from './hero-banner';
import WeDo from './we-do';
import ODCPartner from './odc-partner';
import Solutions from './solutions';
import WhyUs from './why-us';
import Testimonials from './testimonials';
import LatestUpdates from './latest-updates';
import CTA from '../global/cta';
import Footer from '../global/footer';

var lastScrollTop = 0;
// const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
// const FadeUp = batch(Fade(), Move(), Sticky());
export default class Home extends React.Component{

  constructor(props){
    super(props);
    this.state={
      
    }
  }

  componentWillMount() {
    // window.addEventListener('scroll', this.handleScroll);
    // $("html, body").animate({ scrollTop: 0 }, "slow");
  }

  
  handleScroll =() =>{
    var st = $(window).scrollTop();
    if(st <= 150){
      $("header").removeClass("e-show").removeClass("e-hide")
    }
    else if (st > lastScrollTop){
      $("header").removeClass("e-show").addClass("e-hide")
    } 
    else {
      $("header").removeClass("e-hide").addClass("e-show");
    }
    lastScrollTop = st;
  }

  render(){
    return(
      <React.Fragment>
        <Header/>
        <Hero/>
        <WeDo/>
        <ODCPartner/>
        <WhyUs/>
        <Solutions/>
        <Testimonials/>
        <LatestUpdates/>
        <CTA/>
        <Footer/>
      </React.Fragment>
    )
  }
}






