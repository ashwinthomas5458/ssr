import React from 'react';

const Card =({course})=>(
    <div className="card courseCard shadow">
            <img src={course.image} className="card-img-top courseCardImage" alt="..."/>
            {course.offer? <span className="offerLabel position-absolute badge badge-pill badge-danger font-10">offer</span>: null}
            {course.free? <span className="offerLabel position-absolute badge badge-pill badge-danger font-10">free</span>: null}
            {course.is_bookmarked? <span className="bookmarked position-absolute"><img src="svgs/Vector.svg" alt=""/></span>: null}
            <span className="authorName position-absolute font-12 py-2 px-3">{course.creator}</span>
            <div className="card-body px-2 py-3">
              <h5 className="card-title font-16 font-weight-bold">{course.name}</h5>
              <p className="card-text font-12 colorPrimary">{course.description? `${course.description.slice(0,20)}..`: "No description"}</p>
              <div className="container d-flex justify-content-between px-0 pt-3 align-items-start">
                <span className="rating d-flex justify-content-between mt-2 align-items-center">
                  <img src="svgs/Vector-1.svg" alt=""/>
                  <p className="m-0 font-weight-bold">4.5</p>
                </span>
                {!course.free?
                  <>
                {course.offer?
                    <span className="pricing d-flex justify-content-between align-items-center">
                  <p className="font-12 m-0 font-weight-bold textColorMuted"><del><span className="fontSecondary">₹ </span>
                  {course.price}</del></p>
                  <p className="font-16 m-0 font-weight-bold textColorOffer"><span className="fontSecondary">₹ </span> {course.offer_price}</p>
                </span>
                :
                <span className="pricing d-flex justify-content-between align-items-center">
                  <p className="font-12 m-0 font-weight-bold textColorMuted"><span className="fontSecondary">₹ </span>
                  {course.price}</p>
                </span>
                }
                </>
                :
                null}
              </div>
            </div>
          </div>
);

export default Card;