import React from 'react';

import UpdateCard from '../../components/cards/news-updates';
import NewsContentImg1 from '../../assets/images/content/latest-updates-1.png';
import NewsContentImg2 from '../../assets/images/content/latest-updates-2.png';
import NewsContentImg3 from '../../assets/images/content/latest-updates-3.png';

function LatestUpdates(props){
	return(
		<section className="e-latest-stories">
			<div className="container p-0">
				<div className="row">
					<div className="col-lg-12">
						<h2>Latest stories.</h2>
					</div>
				</div>
				<div className="row mt-5">
					<div className="col-lg-4">
						<UpdateCard img={NewsContentImg1} data="Tackle Origination Costs this 2021- Leverage Tech" to="/"/>
					</div>
					<div className="col-lg-4">
						<UpdateCard img={NewsContentImg2} data="How the US Housing Market will React to a COVID Vaccine" to="/"/>
					</div>
					<div className="col-lg-4">
						<UpdateCard img={NewsContentImg3} data="Residential Mortgage – Things to Expect with the New President-Elect Joe Biden Taking Over" to="/"/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default LatestUpdates;


