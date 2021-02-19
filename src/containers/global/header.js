import React from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';


/*Import Assets*/
import SocialMedia from '../../components/widgets/social-media';
import Logo from '../../assets/images/logo.png';


var aboutArray =[
  {title: "Who we are", content: "Visionet is the preferred ODC partner for financial institutions across geographies."},
  {title: "Experts Speaks", content: "Hear from the eminent personalities of the finance world. They have the knowledge & experiences to share with you."},
  {title: "Culture", content: "We at Visionet believe in a value-based, honest, innovative, and consistent approach to our work and our customers."},
  {title: "Career", content: "Become part of a growing, vibrant team of professionals that delivers excellence across the globe."},
]
var serviceArray =[
  {title: "Digital Technology", content: "Our expertise include:", links: ["BI & Data Science", "Cloud Enablement", "Quality Assurance", "Enterprise Automation", "Contact Center"]},
  {title: "Digital Operations", content: "Our expertise include:", links: ["Mortgage Processing", " Title & Settlement", "Valuation", "Offshore Delivery Center"]},
]

var solutionsArray =[
  {title: "VisiLoanReview (VLR)", content: "A loan processing solution that leverages AI/ML-based OCR technology to deliver over 98% accuracy."},
  {title: "D-TRAC", content: "D-TRAC transforms Title Search by leveraging AI/ML to deliver improved accuracy at reduced costs."},
  {title: "Loangility", content: "Predict and improve sales conversion, ensure consistent communication."},
  {title: "AtClose", content: "AtClose is an end-to-end cloud-based title closing software."},
  {title: "Digital QC", content: "A configurable & complete pre-funding underwriting QC solution."},
  {title: "Vendor Metrics", content: "A powerful and affordable vendor management platform."},
  {title: "VisiRelease", content: "VisiRelease suite offers an advanced technology solution in Lien Release, Recording & Assignment processing."},
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
      activeNavItem: null,
      menuActive: false,
      keyword: "",
      searchActive: false
    }
  }

  closeMenu =() =>{
    this.setState({index: 0, activeArray: aboutArray, activeNavItem: null })
  }

  render(){
    return(
      <header>
        <div className={this.state.activeNavItem || this.state.searchActive ? "e-header-wrap e-active" : "e-header-wrap"}>
          <div className="container">
            <div className="row e-t-d-none">
              <div className="col-lg-2 col-md-4">
                <img src={Logo} alt="Visionet"/>
              </div>
              <div className="col-lg-10 col-md-8 text-right">
                <span className={this.state.activeNavItem == "About us" ? "e-nav-item e-active mr-5 d-inline-block" : "e-nav-item mr-5 d-inline-block"} onClick={() => this.setState({activeNavItem: "About us", activeArray:  aboutArray, searchActive: false})}>About us</span>
                <span className={this.state.activeNavItem == "Services" ? "e-nav-item e-active mr-5 d-inline-block" : "e-nav-item mr-5 d-inline-block"} onClick={() => this.setState({activeNavItem: "Services", activeArray:  serviceArray, searchActive: false })}>Services</span>
                <span className={this.state.activeNavItem == "Solutions" ? "e-nav-item e-active mr-5 d-inline-block" : "e-nav-item mr-5 d-inline-block"} onClick={() => this.setState({activeNavItem: "Solutions", activeArray:  solutionsArray, searchActive: false })}>Solutions</span>
                <span className={this.state.activeNavItem == "Explore more" ? "e-nav-item e-active mr-5 d-inline-block" : "e-nav-item mr-5 d-inline-block"} onClick={() => this.setState({activeNavItem: "Explore more", activeArray:  exploreArray, searchActive: false })}>Explore more</span>
                <span className="e-nav-item mr-5 d-inline-block"><Link to="/demo">Contact us</Link></span>
                {
                  this.state.searchActive ?
                    <span className="e-search e-close" onClick={() => this.setState({searchActive: !this.state.searchActive, activeNavItem: null, menuActive: false})}></span>
                  :
                    <span className="e-search" onClick={() => this.setState({searchActive: !this.state.searchActive, activeNavItem: null, menuActive: false})}></span>
                }
              </div>
            </div>
            <div className="d-none e-t-d-block">
              {
                this.state.menuActive ?
                  <div className="row">
                    <div className="col-12">
                      <span className={this.state.activeNavItem == "About us" ? "e-nav-item e-active mr-5 d-inline-block" : "e-nav-item mr-5 d-inline-block"} onClick={() => this.setState({activeNavItem: "About us", activeArray:  aboutArray, searchActive: false, index: 0})}>About us</span>
                      <span className={this.state.activeNavItem == "Services" ? "e-nav-item e-active mr-5 d-inline-block" : "e-nav-item mr-5 d-inline-block"} onClick={() => this.setState({activeNavItem: "Services", activeArray:  serviceArray, searchActive: false, index: 0 })}>Services</span>
                      <span className={this.state.activeNavItem == "Solutions" ? "e-nav-item e-active mr-5 d-inline-block" : "e-nav-item mr-5 d-inline-block"} onClick={() => this.setState({activeNavItem: "Solutions", activeArray:  solutionsArray, searchActive: false, index: 0 })}>Solutions</span>
                      <span className={this.state.activeNavItem == "Explore more" ? "e-nav-item e-active mr-5 d-inline-block" : "e-nav-item mr-5 d-inline-block"} onClick={() => this.setState({activeNavItem: "Explore more", activeArray:  exploreArray, searchActive: false, index: 0 })}>Explore</span>
                      <span className="e-nav-item mr-5 d-inline-block"><Link to="/demo">Contact us</Link></span>
                      <span className="e-menu-close float-right" onClick={() => this.setState({menuActive: !this.state.menuActive, activeNavItem: null})}></span>
                    </div>
                  </div>
                :
                  <div className="row">
                    <div className="col-6">
                      <img src={Logo} alt="Visionet"/>
                    </div>
                    <div className="col-6 text-right">
                      <span onClick={() => this.setState({menuActive: !this.state.menuActive, activeNavItem: null})} className="e-hamburger"></span>
                    </div>
                  </div>
              }
            </div>
          </div>
        </div>
        <div className="container e-menu-wrap">
          {
            this.state.activeNavItem ?
                <div className="e-menu fadeInUp">
                  <div className="row">
                    <div className="col-lg-3 pr-0">
                      <div className="e-left-menu">
                        <h6 className="mb-5">{this.state.activeNavItem}</h6>
                          {
                            this.state.activeArray.map((item, index) => {
                              return(
                                <div className="mb-4">
                                  <Link onMouseEnter={() => {
                                    this.setState({ index: null });
                                    setTimeout( function() {
                                      this.setState({index: index });
                                    }.bind(this), 50);
                                  }  } className={this.state.index == index ? "e-menu-link e-active" : "e-menu-link"} to="/demo">{item.title}</Link>
                                </div>
                                );
                            })
                          }
                        <div className="mt-5 pt-4">
                          <h5 className="mb-4">Connect with us</h5>
                          <SocialMedia menu={true}/>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-9 p-0 e-t-d-none">
                      {
                        this.state.index != null ?
                          <div className="e-right-menu fadeInUp">
                            <span className="e-close" onClick={this.closeMenu}></span>
                            <h6>{this.state.activeArray[this.state.index].title}</h6>
                            <p className="my-4">{this.state.activeArray[this.state.index].content}</p>
                            {
                              this.state.activeNavItem == "Services" && this.state.activeArray[this.state.index].links ?
                                <ul className="mb-4">
                                  {
                                    this.state.activeArray[this.state.index].links.map((item, index) => {
                                      return(
                                        <li><Link to="/demo">{item}</Link></li>
                                      );
                                    })
                                  }
                                  
                                </ul>
                              :
                                null
                            }
                            <Link className="e-link-arrow e-link-arrow-black">Learn More</Link>
                          </div>
                        :
                          null
                      }
                    </div>
                  </div>
                </div>
            :
              null
          }
          {
            this.state.searchActive ?
              <div className="e-menu e-search-wrap fadeInUp">
                <div className="row">
                  <div className="offset-7 col-lg-5 p-0">
                    <div className="e-search-input">
                      <input value={this.state.keyword} autoFocus onChange={(e) => this.setState({keyword: e.target.value})} type="text" placeholder="Search visionet"/>
                    </div>
                  </div>
                </div>
              </div>
            :
              null
          }
        </div>
        {
          this.state.searchActive || this.state.activeNavItem ? 
            <div className="e-menu-overlay" onClick={() => this.setState({searchActive: false, activeNavItem: null, menuActive: false})}></div>
          :
            null
        }
      </header>
    )
  }
}