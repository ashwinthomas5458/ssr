import React from 'react';
import { Link } from 'react-router-dom';

import SocialMedia from '../../components/widgets/social-media';

/*Import Assets*/
import Logo from '../../assets/images/logo.png';

var aboutArray =[
  {title: "Who we are", content: "Visionet is the preferred ODC partner for financial institutions across geographies."},
  {title: "Experts Speaks", content: "Visionet is the preferred ODC partner for financial institutions across geographies."},
  {title: "Culture", content: "Visionet is the preferred ODC partner for financial institutions across geographies."},
  {title: "Career", content: "Visionet is the preferred ODC partner for financial institutions across geographies."},
]
var serviceArray =[
  {title: "Digital Technology", content: "Our expertise include:", links: ["BI & Data Science", "Cloud Enablement", "Quality Assurance", "Enterprise Automation", "Contact Center"]},
  {title: "Digital Operations", content: "Our expertise include:", links: ["Mortgage Processing", " Title & Settlement", "Valuation", "Offshore Delivery Center"]},
]

var solutionsArray =[
  {title: "VisiLoanReview (VLR)", content: "Visionet is the preferred ODC partner for financial institutions across geographies."},
  {title: "D-TRAC", content: "Visionet is the preferred ODC partner for financial institutions across geographies."},
  {title: "Loangility", content: "Visionet is the preferred ODC partner for financial institutions across geographies."},
  {title: "AtClose", content: "Visionet is the preferred ODC partner for financial institutions across geographies."},
  {title: "Digital QC", content: "Visionet is the preferred ODC partner for financial institutions across geographies."},
  {title: "Vendor Metrics", content: "Visionet is the preferred ODC partner for financial institutions across geographies."},
  {title: "VisiRelease", content: "Visionet is the preferred ODC partner for financial institutions across geographies."},
]

var exploreArray =[
  {title: "CSR", content: "Visionet is the preferred ODC partner for financial institutions across geographies."},
  {title: "Media Releases", content: "Visionet is the preferred ODC partner for financial institutions across geographies."},
]





export default class HeroSlider extends React.Component{

  constructor(props){
    super(props);
    this.state={
      index: 0,
      activeArray: aboutArray,
      activeNavItem: null
    }
    
  }

  

  closeMenu =() =>{
    this.setState({index: 0, activeArray: aboutArray, activeNavItem: null })
  }

  render(){

    
    return(
      <header>
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-4">
              <img src={Logo} alt="Visionet"/>
            </div>
            <div className="col-lg-10 col-md-8 text-right">
              <span className={this.state.activeNavItem == "About us" ? "e-nav-item e-active mr-5 d-inline-block" : "e-nav-item mr-5 d-inline-block"} onClick={() => this.setState({activeNavItem: "About us", activeArray:  aboutArray})}>About us</span>
              <span className={this.state.activeNavItem == "Services" ? "e-nav-item e-active mr-5 d-inline-block" : "e-nav-item mr-5 d-inline-block"} onClick={() => this.setState({activeNavItem: "Services", activeArray:  serviceArray })}>Services</span>
              <span className={this.state.activeNavItem == "Solutions" ? "e-nav-item e-active mr-5 d-inline-block" : "e-nav-item mr-5 d-inline-block"} onClick={() => this.setState({activeNavItem: "Solutions", activeArray:  solutionsArray })}>Solutions</span>
              <span className={this.state.activeNavItem == "Explore more" ? "e-nav-item e-active mr-5 d-inline-block" : "e-nav-item mr-5 d-inline-block"} onClick={() => this.setState({activeNavItem: "Explore more", activeArray:  exploreArray })}>Explore more</span>
              <Link className="e-nav-item mr-5 d-inline-block" to="/">Contact us</Link>
            </div>
          </div>
          {
            this.state.activeNavItem ?
              <div className="e-menu">
                <div className="row">
                  <div className="col-lg-3 pr-0">
                    <div className="e-left-menu">
                      <h6 className="mb-5">{this.state.activeNavItem}</h6>
                      {
                        this.state.activeArray.map((item, index) => {
                          return(
                            <div className="mb-4">
                              <Link onMouseEnter={() => this.setState({index: index }) } className={this.state.index == index ? "e-menu-link e-active" : "e-menu-link"} to="/">{item.title}</Link>
                            </div>
                            );
                        })
                      }

                      <div className="mt-5">
                        <h5 className="mb-4">Connect with us</h5>

                        <SocialMedia menu={true}/>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-9 p-0">
                    <div className="e-right-menu">
                      <span className="e-close" onClick={this.closeMenu}></span>
                      <h6>{this.state.activeArray[this.state.index].title}</h6>
                      <p className="my-4">{this.state.activeArray[this.state.index].content}</p>
                      {
                        this.state.activeNavItem == "Services" && this.state.activeArray[this.state.index].links ?
                          <ul className="mb-4">
                            {
                              this.state.activeArray[this.state.index].links.map((item, index) => {
                                return(
                                  <li><Link to="/">{item}</Link></li>
                                );
                              })
                            }
                            
                          </ul>
                        :
                          null
                      }
                      <Link className="e-link-arrow e-link-arrow-black">Learn More</Link>
                    </div>
                  </div>
                </div>
              </div>
            :
              null
          }
          
        </div>
      </header>
    )
  }
	
}