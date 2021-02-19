import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import Client from '../../components/cards/client';
import SliderReviews from '../../components/sliders/review';

import Client1 from '../../assets/images/clients/client-1.png';
import Client2 from '../../assets/images/clients/client-2.png';
import Client3 from '../../assets/images/clients/client-3.png';
import Client4 from '../../assets/images/clients/client-4.png';
import Client5 from '../../assets/images/clients/client-5.png';
import Client6 from '../../assets/images/clients/client-6.png';
import Client7 from '../../assets/images/clients/client-7.png';
import Client8 from '../../assets/images/clients/client-8.png';
import Client9 from '../../assets/images/clients/client-9.png';
import Client10 from '../../assets/images/clients/client-10.png';

function Testimonials(props){
	return(
		<section className="e-testimonials position-relative">
			<div className="container p-0">
				<div className="row">
					<div className="col-lg-6">
            <ScrollAnimation animateIn='fadeInUp' delay={50}>
              <h5 className="mb-5">People say</h5>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeInUp' delay={200}>
						  <h2>Clients & Testimonials.</h2>
            </ScrollAnimation>
					</div>
				</div>
				<div className="row justify-content-center mt-5">
					<div className="col-md-3 col-6">
            <ScrollAnimation animateIn='fadeInLeftSmall' delay={50}>
						  <Client img={Client1} alt="Visionet clients - steve madden"/>
            </ScrollAnimation>
					</div>
					<div className="col-md-3 col-6">
            <ScrollAnimation animateIn='fadeInLeftSmall' delay={100}>
						  <Client img={Client2} alt="Visionet clients - joice"/>
            </ScrollAnimation>
					</div>
					<div className="col-md-3 col-6">
            <ScrollAnimation animateIn='fadeInLeftSmall' delay={150}>
						  <Client img={Client3} alt="Visionet clients - freeman"/>
            </ScrollAnimation>
					</div>
					<div className="col-md-3 col-6">
            <ScrollAnimation animateIn='fadeInLeftSmall' delay={200}>
						  <Client img={Client4} alt="Visionet clients - dooney & bourke"/>
            </ScrollAnimation>
					</div>
					<div className="col-md-3 col-6">
            <ScrollAnimation animateIn='fadeInLeftSmall' delay={250}>
						  <Client img={Client5} alt="Visionet clients - qvc"/>
            </ScrollAnimation>
					</div>
					<div className="col-md-3 col-6">
            <ScrollAnimation animateIn='fadeInLeftSmall' delay={300}>
						  <Client img={Client6} alt="Visionet clients - tribune"/>
            </ScrollAnimation>
					</div>
					<div className="col-md-3 col-6">
            <ScrollAnimation animateIn='fadeInLeftSmall' delay={350}>
						  <Client img={Client7} alt="Visionet clients - kellwood"/>
            </ScrollAnimation>
					</div>
					<div className="col-md-3 col-6">
            <ScrollAnimation animateIn='fadeInLeftSmall' delay={400}>
						  <Client img={Client8} alt="Visionet clients - unti"/>
            </ScrollAnimation>
					</div>
					<div className="col-md-3 col-6">
            <ScrollAnimation animateIn='fadeInLeftSmall' delay={450}>
						  <Client img={Client9} alt="Visionet clients - ascena"/>
            </ScrollAnimation>
					</div>
					<div className="col-md-3 col-6">
            <ScrollAnimation animateIn='fadeInLeftSmall' delay={500}>
						  <Client img={Client10} alt="Visionet clients - vitamin world"/>
            </ScrollAnimation>
					</div>
				</div>

				<div className="row justify-content-center">
					<div className="col-lg-10">
						  <SliderReviews/>
					</div>
				</div>
			</div>
			<div className="e-overlay"></div>
		</section>
	)
}

export default Testimonials;



