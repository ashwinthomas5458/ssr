import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import SliderNews from '../../components/sliders/news';


function LatestUpdates(props){
	return(
		<section className="e-latest-stories">
			<div className="container p-0">
				<div className="row">
					<div className="col-lg-12">
            <ScrollAnimation animateIn='fadeInUp' delay={50}>
              <h5 className="mb-5">News</h5>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeInUp' delay={200}>
              <h2>Latest stories.</h2>
            </ScrollAnimation>
					</div>
				</div>
				<div className="row mt-5">
					<div className="col-lg-12">
						<SliderNews/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default LatestUpdates;


