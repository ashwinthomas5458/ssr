import React from 'react';
import { Link } from 'react-router-dom';

import SocialMedia from '../../components/widgets/social-media';
import Logo from '../../assets/images/logo.png';

function Footer(props){
	return(
		<footer>
			<div className="container p-0">
				<div className="row">
					<div className="col-lg-6">
						<img src={Logo} alt="Visionet logo"/>
						<div className="align-self-baseline mt-4">
							<SocialMedia/>
						</div>
					</div>
					<div className="col-lg-6 text-right e-address-wrap">
						<p className="mb-4">
              <a href="https://www.google.com/maps/place/Visionet+Systems+Inc/@40.3313567,-74.5026826,17z/data=!3m1!4b1!4m5!3m4!1s0x89c3dc756a5fc61d:0xea808ec4d0c1f6b7!8m2!3d40.3313567!4d-74.5004939" target="_blank" className="e-link">
							<span>VISIONET SYSTEMS, INC 4 Cedarbrook Drive, Bldg. B<br/>
							Cranbury, NJ 08512</span>
              </a>
						</p>
						
            <a href="tel:609 452 0700" target="_blank" className="e-hover">609 452 0700</a><br/>
						<a href="mailto:info@visionet.com" target="_blank" className="e-hover">info@visionet.com</a>
						
					</div>
					<div className="col-lg-12 mt-4">
						<hr/>
					</div>
				</div>

				<div className="row mt-5">
					<div className="col-lg-4">
						<h6>Company</h6>
					</div>
					<div className="col-lg-2">
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
					<div className="col-lg-2">
						<div>
              <Link className="e-link e-hover" to="/">About us</Link>
            </div>
            <div>
						  <Link className="e-link e-hover" to="/">Services</Link>
            </div>
            <div>
						  <Link className="e-link e-hover" to="/">Solutions</Link>
            </div>
            <div>
						  <Link className="e-link e-hover" to="/">Contact</Link>
            </div>
            <div>
						  <Link className="e-link e-hover" to="/">Career</Link>
            </div>
					</div>
					<div className="col-lg-2">
            <div>
						  <Link className="e-link e-hover" to="/">Blog</Link>
            </div>
            <div>
						  <Link className="e-link e-hover" to="/">Terms of Use</Link>
            </div>
            <div>
						  <Link className="e-link e-hover" to="/">Privacy Policy</Link>
            </div>
					</div>
					<div className="col-lg-2">
            <div>
						  <Link className="e-link e-hover" to="/">BI & Data Science</Link>
            </div>
            <div>
						  <Link className="e-link e-hover" to="/">Cloud Enablement</Link>
            </div>
            <div>
						  <Link className="e-link e-hover" to="/">Quality Assurance</Link>
            </div>
            <div>
						  <Link className="e-link e-hover" to="/">Enterprise Automation</Link>
            </div>
            <div>
						  <Link className="e-link e-hover" to="/">Contact Center</Link>
            </div>
					</div>
					<div className="col-lg-2">
            <div>
						  <Link className="e-link e-hover" to="/">Mortgage Processing</Link>
            </div>
            <div>
						  <Link className="e-link e-hover" to="/">Title & Settlement</Link>
            </div>
            <div>
						  <Link className="e-link e-hover" to="/">Valuation</Link>
            </div>
            <div>
						  <Link className="e-link e-hover" to="/">Offshore Delivery Center</Link>
            </div>
					</div>
					<div className="col-lg-2">
            <div>
						  <Link className="e-link e-hover" to="/">VLR</Link>
            </div>
            <div>
						  <Link className="e-link e-hover" to="/">D-TRAC</Link>
            </div>
            <div>
						  <Link className="e-link e-hover" to="/">Loangility</Link>
            </div>
            <div>
						  <Link className="e-link e-hover" to="/">AtClose</Link>
            </div>
            <div>
						  <Link className="e-link e-hover" to="/">Digital QC</Link>
            </div>
					</div>
					<div className="col-lg-2">
            <div>
						  <Link className="e-link e-hover" to="/">Vendor Metrics</Link>
            </div>
            <div>
						  <Link className="e-link e-hover" to="/">VisiRelease</Link>
            </div>
					</div>
				</div>

				<div className="row mt-5">
					<div className="col-lg-12">
						<p className="e-rights">© 2020 Visionet Systems. All rights reserved.</p>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer;