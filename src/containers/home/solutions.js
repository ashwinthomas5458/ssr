import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

/*Import Components*/
import SliderSolution from '../../components/sliders/solution';

function Solutions(props){
  return(
    <section className="e-solutions"> 
      <div className="container">
        <div className="row">
          <div className="col-lg-10">
            <ScrollAnimation animateIn="fadeInUp" delay={100}>
              <h5 className="mb-5">Solutions</h5>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" delay={200}>
              <h2>our solutions.</h2>
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <SliderSolution/>
    </section>
  )
}

export default Solutions;


