import React from 'react';
import { Link } from 'react-router-dom';

function CTA(props){
	return(
		<section className="container-fluid e-cta">
			<div className="row">
				<div className="col-lg-6 e-cta-content d-flex justify-content-center">
          <div className="align-self-center">
				    <span className="e-cta-search">Search for more</span>
          </div>
				</div>
				<div className="col-lg-6 e-cta-content d-flex justify-content-center">
          <div>
            <h5 className="">Next</h5>
            <Link className="e-cta-link" to="/">Who We are.</Link>
            <span className="e-link-arrow position-relative"></span>
          </div>
				</div>
			</div>
		</section>
	)
}

export default CTA;