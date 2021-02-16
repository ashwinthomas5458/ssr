import React from 'react';

const Nav = () =>(
    <div className="container-fluid fixed-top bg-white shadow">
    <div className="container font-12 navContainer px-0">
      <nav className="navbar navbar-expand-xl navbar-light px-0">
        <a className="btn d-flex align-items-center justify-content-center btn-primary font-12 logo buttonPrimary"
          href="#">LOGO</a>
        <button className="navbar-toggler border-0" type="button" data-toggle="collapse"
          data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <div className="navicon ">
            <div className="line1 item"></div>
            <div className="line2 item"></div>
            <div className="line3 item"></div>
          </div>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item d-flex m-2 categoriesLink justify-content-between my-2 ml-xl-5 mr-xl-4">
              <a href="#"> <img src="svgs/categories.svg" alt=""/> Categories <span className="sr-only">(current)</span></a>
            </li>
          </ul>
          <form className="form-inline my-2 my-xl-0 mr-xl-auto w-100 position-relative" style={{maxWidth : "398px"}}>
            <input className="form-control mr-sm-2 w-100 pl-5 font-12" type="search"
              placeholder="What do you want to learn?" aria-label="Search"/>
            <button className="btn position-absolute searchButton" type="submit"> <img src="svgs/Search.svg" alt=""/>
            </button>
          </form>
          <ul className="navbar-nav align-items-xl-center">
            <li className="nav-item d-flex my-2">
              <a className="tutor px-0" href="#"> Join as Tutor <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item d-flex mx-xl-2 my-2">
              <a className="btn d-flex align-items-center justify-content-center buttonPrimary colorPrimary btn-outline-primary font-12 signup"
                href="#"> Signup <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item d-flex my-2">
              <a className="btn d-flex align-items-center justify-content-center btn-primary font-12 login buttonPrimary"
                href="#"> Login with Gmail <span className="sr-only">(current)</span></a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
);

export default Nav;