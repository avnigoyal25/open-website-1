import React,{ useEffect } from 'react'
import WOW from "wowjs";

function UpcomingEvent() {
  useEffect(()=>{
    new WOW.WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: false,
      live: true,
      loop:Infinity,
    }).init();
  
    },[])
  return (
	<section className="inner-about-area fix">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-6 order-0 order-lg-2">
              <div className="inner-about-img">
                <img src="assets/img/images/inner_about_img01.png" className="wow fadeInRight" data-wow-delay=".3s" alt="" />
                <img src="assets/img/images/inner_about_img02.png" className="wow fadeInLeft" data-wow-delay=".6s" alt="" />
                <img src="assets/img/images/inner_about_img03.png" className="wow fadeInUp" data-wow-delay=".6s" alt="" />
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="section-title title-style-three mb-25">
                <h2>Upcoming <span>Event</span></h2>
              </div>
              <div className="inner-about-content">
                <h5>OPEN's 4th Anniversary</h5>
                <p>Compete with 100 players on a remote Lorem Ipsn gravida. Pro ain gravida nibh vel velit an auctor aliqueenean
                  ollicitudin ain gravida nibh vel version an ipsum.</p>
                <p>Lorem Ipsn gravida. Pro ain gravida nibh vevelit auctor aliqueenean ollicitudin ain gravida nibh vel version an ipsum.</p>
                <a href="/#" className="btn btn-style-two">Know More</a>
              </div>
            </div>
          </div>
        </div>
        <div className="inner-about-shape"><img src="assets/img/images/medale_shape.png" alt="" /></div>
      </section>
  )
}

export default UpcomingEvent