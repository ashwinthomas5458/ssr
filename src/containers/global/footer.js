import React from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

import SocialMedia from '../../components/widgets/social-media';
import Logo from '../../assets/images/logo.png';

function Footer(props){
	return(
		<footer>
			<div className="container p-0">
        
				<div className="row">
					<div className="col-lg-6 col-sm-5">
            <ScrollAnimation animateIn='fadeInLeftSmall' delay={10}>
						  <img src={Logo} alt="Visionet logo"/>
            </ScrollAnimation>
						<div className="align-self-baseline mt-4">
							<SocialMedia/>
						</div>
					</div>
					<div className="col-lg-6 col-sm-7 text-right e-address-wrap">
						<p className="mb-4">
              <ScrollAnimation animateIn='fadeInUp' delay={50}>
                <a href="https://www.google.com/maps/place/Visionet+Systems+Inc/@40.3313567,-74.5026826,17z/data=!3m1!4b1!4m5!3m4!1s0x89c3dc756a5fc61d:0xea808ec4d0c1f6b7!8m2!3d40.3313567!4d-74.5004939" target="_blank" className="e-link">
  							 <span>VISIONET SYSTEMS, INC 4 Cedarbrook Drive, Bldg. B<br/>Cranbury, NJ 08512</span>
                </a>
              </ScrollAnimation>
						</p>
						
            <ScrollAnimation animateIn='fadeInUp' delay={150}>
              <a href="tel:609 452 0700" target="_blank" className="e-hover">609 452 0700</a><br/>
              <a href="mailto:info@visionet.com" target="_blank" className="e-hover">info@visionet.com</a>
            </ScrollAnimation>
					</div>
					<div className="col-lg-12 mt-4">
						<hr/>
					</div>
				</div>
        
        <ScrollAnimation animateIn='fadeIn' delay={10}>
  				<div className="row mt-5 e-t-d-none">
  					<div className="col-lg-4">
  						<h6>Company</h6>
  					</div>
  					<div className="col-lg-2 ">
  						<h6>Digital Technology</h6>
  					</div>
  					<div className="col-lg-2">
  						<h6>Digital Operations</h6>
  					</div>
  					<div className="col-lg-4">
  						<h6>Platform Solutions</h6>
  					</div>
  				</div>

  				<div className="row mt-4">
  					<div className="col-lg-2 col-6 col-md-4 col-sm-4 mb-5">
              <div className="d-none e-t-d-block">
                <h6 className="mb-4">Company</h6>
              </div>
  						<div>
                <Link className="e-link e-hover" to="/demo">About us</Link>
              </div>
              <div>
  						  <Link className="e-link e-hover" to="/demo">Services</Link>
              </div>
              <div>
  						  <Link className="e-link e-hover" to="/demo">Solutions</Link>
              </div>
              <div>
  						  <Link className="e-link e-hover" to="/demo">Contact</Link>
              </div>
              <div>
  						  <Link className="e-link e-hover" to="/demo">Career</Link>
              </div>
  					</div>
  					<div className="col-lg-2 col-6 col-md-4 col-sm-4 mb-5">
              <div className="d-none e-t-d-block pt-4 mt-4">
                
              </div>
              <div>
  						  <Link className="e-link e-hover" to="/demo">Blog</Link>
              </div>
              <div>
  						  <Link className="e-link e-hover" to="/demo">Terms of Use</Link>
              </div>
              <div>
  						  <Link className="e-link e-hover" to="/demo">Privacy Policy</Link>
              </div>
  					</div>
  					<div className="col-lg-2 col-6 col-sm-4 mb-5">
              <div className="d-none e-t-d-block">
                <h6 className="mb-4">Digital Technology</h6>
              </div>
              <div>
  						  <Link className="e-link e-hover" to="/demo">BI & Data Science</Link>
              </div>
              <div>
  						  <Link className="e-link e-hover" to="/demo">Cloud Enablement</Link>
              </div>
              <div>
  						  <Link className="e-link e-hover" to="/demo">Quality Assurance</Link>
              </div>
              <div>
  						  <Link className="e-link e-hover" to="/demo">Enterprise Automation</Link>
              </div>
              <div>
  						  <Link className="e-link e-hover" to="/demo">Contact Center</Link>
              </div>
  					</div>
  					<div className="col-lg-2 col-6 col-sm-4 mb-5">
              <div className="d-none e-t-d-block">
                <h6 className="mb-4 ">Digital Operations</h6>
              </div>
              <div>
  						  <Link className="e-link e-hover" to="/demo">Mortgage Processing</Link>
              </div>
              <div>
  						  <Link className="e-link e-hover" to="/demo">Title & Settlement</Link>
              </div>
              <div>
  						  <Link className="e-link e-hover" to="/demo">Valuation</Link>
              </div>
              <div>
  						  <Link className="e-link e-hover" to="/demo">Offshore Delivery Center</Link>
              </div>
  					</div>
  					<div className="col-lg-2 col-6 col-sm-4 mb-5">
              <div className="d-none e-t-d-block">
                <h6 className="mb-4">Digital Operations</h6>
              </div>
              <div>
  						  <Link className="e-link e-hover" to="/demo">VLR</Link>
              </div>
              <div>
  						  <Link className="e-link e-hover" to="/demo">D-TRAC</Link>
              </div>
              <div>
  						  <Link className="e-link e-hover" to="/demo">Loangility</Link>
              </div>
              <div>
  						  <Link className="e-link e-hover" to="/demo">AtClose</Link>
              </div>
              <div>
  						  <Link className="e-link e-hover" to="/demo">Digital QC</Link>
              </div>
  					</div>
  					<div className="col-lg-2 col-6 col-sm-4 mb-5">
              <div className="d-none e-t-d-block pt-5 ">
                
              </div>
              <div>
  						  <Link className="e-link e-hover" to="/demo">Vendor Metrics</Link>
              </div>
              <div>
  						  <Link className="e-link e-hover" to="/demo">VisiRelease</Link>
              </div>
  					</div>
  				</div>

  				<div className="row">
  					<div className="col-lg-12">
  						<p className="e-rights">© 2021 Visionet Systems. All rights reserved.</p>
  					</div>
  				</div>
        </ScrollAnimation>
			</div>
		</footer>
	)
}

export default Footer;