import React from 'react';
import Nav from './components/Nav';
import Courses from './components/Courses';

function App() {
  
  const courseCategories = [ {id: 2, name: "Sports", course_count: 6 }, 
  {id: 1, name: "Technology", course_count: 7 }, 
  {id: 6, name: "Trade Analysis", course_count: 10 }, 
  {id: 3, name: "Trading.", course_count: 8 },
  { id: 5, name: "Invest.", course_count: 7 },
  { id: 4, name: "Knowledge", course_count: 17 },
  { id: 7, name: "Marketing", course_count: 11 }]
  
  const popularCourses = [{"id":2,"image":"https://akm-img-a-in.tosshub.com/indiatoday/images/story/201…/online-3412473_1920_1.jpeg?tz.RfsTe_UTLHiDqxmpG7PY_nTIBjwF7","name":"The Complete Foundation for Stock trading 01","category_ids":[2,1],"categories":[{"id":1,"category":"Technology"},{"id":2,"category":"Sports"}],"language_id":1,"language":"English","duration":"02:00","rating":4.5,"discount_id":null,"discount":0,"description":"<p>Testing course details</p>\n","last_published":"July 14 2020","creator_id":3,"creator":"Marques Brownlee","creator_image":"https://yt3.ggpht.com/a/AATXAJwIHOTspfmIL24Bcr_aIor6CI-Q0zifWQ7vIA=s240-c-k-c0xffffffff-no-rj-mo","creator_code":"MKBHD","is_bookmarked":false,"published":true,"total_reviews":3,"progress":0,"modules_left":0,"free":false,"featured":false,"offer":true,"module_count":3,"video_count":3,"view_count":32,"enrolled_count":9,"price":200,"offer_price":190,"total_gst":34.199999999999996,"total_amount":224.2,"cgst":0,"sgst":0,"igst":34.199999999999996},{"id":23,"image":"https://dfykghjw1h3ub.cloudfront.net/card/images/Rectangle_184_2020-08-25_11_41_10.808848_2020-10-16_12:44:42.154340.png","name":"Strategies in Swing Trading - Part 1","category_ids":[1,4],"categories":[{"id":1,"category":"Technology"},{"id":4,"category":"Knowledge"}],"language_id":1,"language":"English","duration":"4 hours","rating":5,"discount_id":null,"discount":0,"description":null,"last_published":"October 16 2020","creator_id":3,"creator":"Marques Brownlee","creator_image":"https://yt3.ggpht.com/a/AATXAJwIHOTspfmIL24Bcr_aIor6CI-Q0zifWQ7vIA=s240-c-k-c0xffffffff-no-rj-mo","creator_code":"MKBHD","is_bookmarked":false,"published":true,"total_reviews":10,"progress":0,"modules_left":0,"free":false,"featured":true,"offer":true,"module_count":1,"video_count":2,"view_count":17,"enrolled_count":8,"price":1000,"offer_price":950,"total_gst":171,"total_amount":1121,"cgst":0,"sgst":0,"igst":171},{"id":3,"image":"https://akm-img-a-in.tosshub.com/indiatoday/images/story/201…/online-3412473_1920_1.jpeg?tz.RfsTe_UTLHiDqxmpG7PY_nTIBjwF7","name":"Testing featured without published","category_ids":[7,6,5,4,3,2],"categories":[{"id":2,"category":"Sports"},{"id":3,"category":"Trading."},{"id":4,"category":"Knowledge"},{"id":5,"category":"Invest."},{"id":6,"category":"Trade Analysis"},{"id":7,"category":"Marketing"}],"language_id":1,"language":"English","duration":"4 hours","rating":4.7,"discount_id":null,"discount":0,"description":"<p><strong>Hey</strong> How are you?</p>\n","last_published":"July 17 2020","creator_id":3,"creator":"Marques Brownlee","creator_image":"https://yt3.ggpht.com/a/AATXAJwIHOTspfmIL24Bcr_aIor6CI-Q0zifWQ7vIA=s240-c-k-c0xffffffff-no-rj-mo","creator_code":"MKBHD","is_bookmarked":false,"published":true,"total_reviews":1,"progress":0,"modules_left":0,"free":false,"featured":true,"offer":true,"module_count":3,"video_count":6,"view_count":26,"enrolled_count":6,"price":399,"offer_price":319.2,"total_gst":57.455999999999996,"total_amount":376.656,"cgst":0,"sgst":0,"igst":57.455999999999996},{"id":16,"image":"https://dfykghjw1h3ub.cloudfront.net/card/images/Capture_2020-07-13_02:10:50.215796.PNG","name":"Test Free Course","category_ids":[4],"categories":[{"id":4,"category":"Knowledge"}],"language_id":1,"language":"English","duration":"4 hours","rating":5,"discount_id":6,"discount":0,"description":null,"last_published":"July 17 2020","creator_id":3,"creator":"Marques Brownlee","creator_image":"https://yt3.ggpht.com/a/AATXAJwIHOTspfmIL24Bcr_aIor6CI-Q0zifWQ7vIA=s240-c-k-c0xffffffff-no-rj-mo","creator_code":"MKBHD","is_bookmarked":false,"published":true,"total_reviews":2,"progress":0,"modules_left":0,"free":true,"featured":false,"offer":false,"module_count":1,"video_count":2,"view_count":15,"enrolled_count":5,"price":0,"offer_price":0,"total_gst":0,"total_amount":0,"cgst":0,"sgst":0,"igst":0}];
  const featuredCourses = [{"id":2,"image":"https://akm-img-a-in.tosshub.com/indiatoday/images/story/201…/online-3412473_1920_1.jpeg?tz.RfsTe_UTLHiDqxmpG7PY_nTIBjwF7","name":"The Complete Foundation for Stock trading 01","category_ids":[2,1],"categories":[{"id":1,"category":"Technology"},{"id":2,"category":"Sports"}],"language_id":1,"language":"English","duration":"02:00","rating":4.5,"discount_id":null,"discount":0,"description":"<p>Testing course details</p>\n","last_published":"July 14 2020","creator_id":3,"creator":"Marques Brownlee","creator_image":"https://yt3.ggpht.com/a/AATXAJwIHOTspfmIL24Bcr_aIor6CI-Q0zifWQ7vIA=s240-c-k-c0xffffffff-no-rj-mo","creator_code":"MKBHD","is_bookmarked":false,"published":true,"total_reviews":3,"progress":0,"modules_left":0,"free":false,"featured":false,"offer":true,"module_count":3,"video_count":3,"view_count":32,"enrolled_count":9,"price":200,"offer_price":190,"total_gst":34.199999999999996,"total_amount":224.2,"cgst":0,"sgst":0,"igst":34.199999999999996},{"id":23,"image":"https://dfykghjw1h3ub.cloudfront.net/card/images/Rectangle_184_2020-08-25_11_41_10.808848_2020-10-16_12:44:42.154340.png","name":"Strategies in Swing Trading - Part 1","category_ids":[1,4],"categories":[{"id":1,"category":"Technology"},{"id":4,"category":"Knowledge"}],"language_id":1,"language":"English","duration":"4 hours","rating":5,"discount_id":null,"discount":0,"description":null,"last_published":"October 16 2020","creator_id":3,"creator":"Marques Brownlee","creator_image":"https://yt3.ggpht.com/a/AATXAJwIHOTspfmIL24Bcr_aIor6CI-Q0zifWQ7vIA=s240-c-k-c0xffffffff-no-rj-mo","creator_code":"MKBHD","is_bookmarked":false,"published":true,"total_reviews":10,"progress":0,"modules_left":0,"free":false,"featured":true,"offer":true,"module_count":1,"video_count":2,"view_count":17,"enrolled_count":8,"price":1000,"offer_price":950,"total_gst":171,"total_amount":1121,"cgst":0,"sgst":0,"igst":171},{"id":3,"image":"https://akm-img-a-in.tosshub.com/indiatoday/images/story/201…/online-3412473_1920_1.jpeg?tz.RfsTe_UTLHiDqxmpG7PY_nTIBjwF7","name":"Testing featured without published","category_ids":[7,6,5,4,3,2],"categories":[{"id":2,"category":"Sports"},{"id":3,"category":"Trading."},{"id":4,"category":"Knowledge"},{"id":5,"category":"Invest."},{"id":6,"category":"Trade Analysis"},{"id":7,"category":"Marketing"}],"language_id":1,"language":"English","duration":"4 hours","rating":4.7,"discount_id":null,"discount":0,"description":"<p><strong>Hey</strong> How are you?</p>\n","last_published":"July 17 2020","creator_id":3,"creator":"Marques Brownlee","creator_image":"https://yt3.ggpht.com/a/AATXAJwIHOTspfmIL24Bcr_aIor6CI-Q0zifWQ7vIA=s240-c-k-c0xffffffff-no-rj-mo","creator_code":"MKBHD","is_bookmarked":false,"published":true,"total_reviews":1,"progress":0,"modules_left":0,"free":false,"featured":true,"offer":true,"module_count":3,"video_count":6,"view_count":26,"enrolled_count":6,"price":399,"offer_price":319.2,"total_gst":57.455999999999996,"total_amount":376.656,"cgst":0,"sgst":0,"igst":57.455999999999996},{"id":16,"image":"https://dfykghjw1h3ub.cloudfront.net/card/images/Capture_2020-07-13_02:10:50.215796.PNG","name":"Test Free Course","category_ids":[4],"categories":[{"id":4,"category":"Knowledge"}],"language_id":1,"language":"English","duration":"4 hours","rating":5,"discount_id":6,"discount":0,"description":null,"last_published":"July 17 2020","creator_id":3,"creator":"Marques Brownlee","creator_image":"https://yt3.ggpht.com/a/AATXAJwIHOTspfmIL24Bcr_aIor6CI-Q0zifWQ7vIA=s240-c-k-c0xffffffff-no-rj-mo","creator_code":"MKBHD","is_bookmarked":false,"published":true,"total_reviews":2,"progress":0,"modules_left":0,"free":true,"featured":false,"offer":false,"module_count":1,"video_count":2,"view_count":15,"enrolled_count":5,"price":0,"offer_price":0,"total_gst":0,"total_amount":0,"cgst":0,"sgst":0,"igst":0}];
  const offerCourses = [{"id":2,"image":"https://akm-img-a-in.tosshub.com/indiatoday/images/story/201…/online-3412473_1920_1.jpeg?tz.RfsTe_UTLHiDqxmpG7PY_nTIBjwF7","name":"The Complete Foundation for Stock trading 01","category_ids":[2,1],"categories":[{"id":1,"category":"Technology"},{"id":2,"category":"Sports"}],"language_id":1,"language":"English","duration":"02:00","rating":4.5,"discount_id":null,"discount":0,"description":"<p>Testing course details</p>\n","last_published":"July 14 2020","creator_id":3,"creator":"Marques Brownlee","creator_image":"https://yt3.ggpht.com/a/AATXAJwIHOTspfmIL24Bcr_aIor6CI-Q0zifWQ7vIA=s240-c-k-c0xffffffff-no-rj-mo","creator_code":"MKBHD","is_bookmarked":false,"published":true,"total_reviews":3,"progress":0,"modules_left":0,"free":false,"featured":false,"offer":true,"module_count":3,"video_count":3,"view_count":32,"enrolled_count":9,"price":200,"offer_price":190,"total_gst":34.199999999999996,"total_amount":224.2,"cgst":0,"sgst":0,"igst":34.199999999999996},{"id":23,"image":"https://dfykghjw1h3ub.cloudfront.net/card/images/Rectangle_184_2020-08-25_11_41_10.808848_2020-10-16_12:44:42.154340.png","name":"Strategies in Swing Trading - Part 1","category_ids":[1,4],"categories":[{"id":1,"category":"Technology"},{"id":4,"category":"Knowledge"}],"language_id":1,"language":"English","duration":"4 hours","rating":5,"discount_id":null,"discount":0,"description":null,"last_published":"October 16 2020","creator_id":3,"creator":"Marques Brownlee","creator_image":"https://yt3.ggpht.com/a/AATXAJwIHOTspfmIL24Bcr_aIor6CI-Q0zifWQ7vIA=s240-c-k-c0xffffffff-no-rj-mo","creator_code":"MKBHD","is_bookmarked":false,"published":true,"total_reviews":10,"progress":0,"modules_left":0,"free":false,"featured":true,"offer":true,"module_count":1,"video_count":2,"view_count":17,"enrolled_count":8,"price":1000,"offer_price":950,"total_gst":171,"total_amount":1121,"cgst":0,"sgst":0,"igst":171},{"id":3,"image":"https://akm-img-a-in.tosshub.com/indiatoday/images/story/201…/online-3412473_1920_1.jpeg?tz.RfsTe_UTLHiDqxmpG7PY_nTIBjwF7","name":"Testing featured without published","category_ids":[7,6,5,4,3,2],"categories":[{"id":2,"category":"Sports"},{"id":3,"category":"Trading."},{"id":4,"category":"Knowledge"},{"id":5,"category":"Invest."},{"id":6,"category":"Trade Analysis"},{"id":7,"category":"Marketing"}],"language_id":1,"language":"English","duration":"4 hours","rating":4.7,"discount_id":null,"discount":0,"description":"<p><strong>Hey</strong> How are you?</p>\n","last_published":"July 17 2020","creator_id":3,"creator":"Marques Brownlee","creator_image":"https://yt3.ggpht.com/a/AATXAJwIHOTspfmIL24Bcr_aIor6CI-Q0zifWQ7vIA=s240-c-k-c0xffffffff-no-rj-mo","creator_code":"MKBHD","is_bookmarked":false,"published":true,"total_reviews":1,"progress":0,"modules_left":0,"free":false,"featured":true,"offer":true,"module_count":3,"video_count":6,"view_count":26,"enrolled_count":6,"price":399,"offer_price":319.2,"total_gst":57.455999999999996,"total_amount":376.656,"cgst":0,"sgst":0,"igst":57.455999999999996},{"id":16,"image":"https://dfykghjw1h3ub.cloudfront.net/card/images/Capture_2020-07-13_02:10:50.215796.PNG","name":"Test Free Course","category_ids":[4],"categories":[{"id":4,"category":"Knowledge"}],"language_id":1,"language":"English","duration":"4 hours","rating":5,"discount_id":6,"discount":0,"description":null,"last_published":"July 17 2020","creator_id":3,"creator":"Marques Brownlee","creator_image":"https://yt3.ggpht.com/a/AATXAJwIHOTspfmIL24Bcr_aIor6CI-Q0zifWQ7vIA=s240-c-k-c0xffffffff-no-rj-mo","creator_code":"MKBHD","is_bookmarked":false,"published":true,"total_reviews":2,"progress":0,"modules_left":0,"free":true,"featured":false,"offer":false,"module_count":1,"video_count":2,"view_count":15,"enrolled_count":5,"price":0,"offer_price":0,"total_gst":0,"total_amount":0,"cgst":0,"sgst":0,"igst":0}];
  
  return (
    <div className="container-fluid p-0">
    <Nav />
    <div className="container-fluid bg-warning position-relative"
      style={{ height: "588px", background: "linear-gradient(90deg, #46C212 -0.66%, #065CAB 100%)" }}>
      <figure className="coverRings d-none d-sm-block">
        <img src="svgs/Ellipse 1.svg" alt="" />
        <img src="svgs/Ellipse 2.svg" alt="" />
        <img src="svgs/Ellipse 3.svg" alt="" />
      </figure>
      <div className="container h-100 d-flex align-items-center px-0">
        <div className="card bg-transparent border-0 text-white w-100 px-0" style={{ maxWidth: "538px" }}>
          <div className="card-body px-0">
            <h5 className="coverTitle mb-2">Watch & Learn from Experts.</h5>
            <p className="card-text font-16 my-2" style={{ lineHeight: "28px" }}>Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
        Avitae, quis arcu donec risus vestibulum.</p>
            <a href="#"
              className="btn btn-primary buttonPrimary coverButton mt-4 font-16 d-flex align-items-center justify-content-between">
              Login with Gmail <img src="svgs/Arrow 1.svg" alt="" /> </a>
          </div>
        </div>
        <img className="coverImage d-none d-xl-block" src="Rectangle 101.png" alt="" />
      </div>
    </div>
    <div className="container-fluid featuredCourses">
      <Courses data={featuredCourses} name="Featured Courses" />
    </div>
    <div className="container-fluid courseCategories position-relative">
      <figure className="rings">
        <img src="svgs/Ellipse 4.svg" alt="" />
        <img src="svgs/Ellipse 5.svg" alt="" />
      </figure>
      <div className="container py-5 position-relative zindex-dropdown px-0">
        <div className="container coursesHeader d-flex justify-content-between pt-5 pb-4 px-0">
          <h2 className="font-28">Courses Categories</h2>
          <span className="font-16 d-flex justify-content-between align-items-center" style={{ width: "101px" }}>
            View all
      <img src="svgs/Arrow 1.svg" alt="" />
          </span>
        </div>
        <div className="container pt-3 pb-5 px-0">
          <div className="row my-4 mx-0 cardGrid">
            {
              courseCategories.map(category => (
                <button
                  className="btn badge-pill btn-outline-primary categoriesCard bg-transparent font-weight-bold font-16 d-flex align-items-center justify-content-center">Business
                  {category.name}</button>
              ))
            }
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid popularCourses">
      <Courses data={popularCourses} name="Popular Courses" />
    </div>
    <div className="container-fluid coursesWithOffer">
      <Courses data={offerCourses} name="Courses with Offer" />
    </div>
    <div className="containerFluid appLink position-relative">
      <figure className="rings">
        <img src="svgs/Ellipse 11.svg" alt="" />
        <img src="svgs/Ellipse 12.svg" alt="" />
      </figure>
      <div className="container px-sm-0 py-5">
        <div className="card bg-transparent border-0 text-white w-100 px-0 py-5" style={{ maxWidth: "538px" }}>
          <div className="card-body px-0">
            <h5 className="appLinkTitle">Get our mobile app</h5>
            <p className="card-text font-16 py-3 m-0" style={{ lineHeight: "28px", opacity: "0.67" }}>Download our mobile app for
            more personalised experience.</p>
            <p className="card-text font-16 pt-4 pb-3 m-0" style={{ lineHeight: "28px", opacity: "0.67" }}>Available on</p>
            <figure className="store d-flex align-items-center justify-content-between m-0 pb-3">
              <img src="svgs/Google Play - eng.svg" alt="" />
              <img src="svgs/App Store - eng.svg" alt="" />
            </figure>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid footer py-5">
      <div className="container px-0">
        <button className="btn d-flex rounded-0 align-items-center justify-content-center btn-primary font-12 logo"
          href="#">Logo</button>
      </div>
      <div className="container px-0 d-flex align-items-center justify-content-between pt-4">
        <p className="font-12 m-0">©2020 All rights reserved | Terms & Conditions | Privacy Policy</p>
        <p className="font-12 m-0">Powered by <strong>Evoque Innovative Lab</strong></p>
      </div>
    </div>
  </div>
  );
}

export default App;
