import React from 'react'
import { AluminiData } from '../../data/AluminiData';

function AluminiArea() {
  return (
	 <section className="team-area team-bg">
            <div className="container custom-container">
                <br /><br /><br /><br />
              <div className="row">
                <div className="col-12">
                  <div className="third-section-title text-center mb-60">
                    <h2>MEET <span>OUR</span> Alumnus</h2>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
              {AluminiData.map((data) => ( 
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                  <div className="third-team-item text-center mb-30">
                    <div className="third-team-img">
                      <img src={data.imageURL} height="300px" alt="" />
                    </div>
                    <div className="third-team-content">
                      <div className="main-bg" />
                      <div className="hover-bg" />
                      <h5><a href={data.LinkedIn}>{data.name}</a></h5>
                      <span>{data.designation}</span>
                    </div>
                  </div>
                </div>
              ))}
              </div>
            </div>
          </section>
  )
}

export default AluminiArea