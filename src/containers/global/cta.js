import React from 'react';
import $ from 'jquery';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';

export default class CTA extends React.Component{
  componentDidMount() {
    
  }

  searchClick(){
    $(".e-search").trigger("click");
  }

  render(){
    return(
      <section className="container-fluid e-cta">
        <div className="row">
          <div className="col-lg-6 col-sm-6 col-12 e-cta-content d-flex justify-content-center">
            <ScrollAnimation animateIn='fadeInLeftSmall' delay={0}>
              <div className="align-self-center e-cta-search-wrap" onClick={this.searchClick.bind(this)}>
                <span className="e-cta-search">Search for more</span>
              </div>
            </ScrollAnimation>
          </div>
          <div className="col-lg-6 col-sm-6 col-12 e-cta-content d-flex justify-content-center">
            <ScrollAnimation animateIn='fadeInLeftSmall' delay={150}>
              <div>
                <h5 className="">Next</h5>
                <Link className="e-cta-link" to="/demo">Who We are.</Link>
                <span className="e-link-arrow position-relative"></span>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    )
  }
}

