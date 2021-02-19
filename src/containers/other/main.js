import React from 'react';
import $ from 'jquery';

/*Import components*/
import Header from '../global/header';
import DummyBanner from './banner';
import Footer from '../global/footer';

var lastScrollTop = 0;
export default class Dummy extends React.Component{

  constructor(props){
    super(props);
    this.state={
      
    }
  }

  componentWillMount() {
    window.addEventListener('scroll', this.handleScroll);
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
        <DummyBanner/>
        <Footer/>
      </React.Fragment>
    )
  }
}






