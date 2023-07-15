import React from "react";

const data = [
  { rank:1,name: " Rohin Mehrotra", username: "rohin079", points: 300 },
  { rank:2,name: " Vinay Thapa", username: "ThapaVinay", points: 205 },
  { rank:3,name: " Shivansh Goel", username: "Shivansh175", points: 85},
  { rank:4,name: " Akash Mishra", username: "helloakash1701", points: 75 },
  { rank:5,name: " Yash Khattar", username: "Yash-Khattar", points: 65 },
  { rank:6,name: " Gagan Chaudhary", username: "GaganChaudhary6378", points: 65 },
  { rank:7,name: " Ananya Mathur", username: "Anabot12", points: 55 },
  { rank:8,name: " Omar Hammoud", username: "Mumbzi96", points: 45 },
  { rank:9,name: " Charu", username: "Charu-2718", points: 20 },
  { rank:10,name: " Kruthardh Tirunahari", username: "Kruthardh11", points: 20 },
  { rank:11,name: " Shreyas", username: "shreyas2711", points: 20 },

]

function SingleArea() {
  return (
    <section className="open-single-area pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="open-single-content">
              <div className="upcoming-open-head">
                <div className="uc-open-head-title">
                  <span>07-07-2023 to 07-08-2023</span>
                  <h4>OPEN Summer Of Code 2023</h4>
                </div>
                <div className="uc-open-price">
                  <h5>Leaderboard</h5>
                </div>
        </div>
                <table>
                <thead>
                  <tr>
                    <th>Current Rank</th>
                    <th>Name</th>
                    <th>Github Username</th>
                    <th>OsoC'23 Points</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((val, key) => (
                    <tr key={key}>
                      <td className={getRankClass(val.rank)}>{val.rank}</td>
                      <td>{val.name}</td>
                      <td>
                        <a
                          href={`https://github.com/${val.username}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="github-link"
                        >
                          {val.username}
                        </a>
                      </td>
                      <td>{val.points}{" "}
                      <img
                          src="/assets/img/logo.png"
                          alt="Logo"
                          className="logo-image"
                        /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
      {/* </div>  */}

      </div>
            </div>
          </div>
        
        </div> 

      
    </section>
  );
}

function getRankClass(rank) {
  if (rank === 1) {
    return "rank-one";
  } else if (rank === 2) {
    return "rank-two";
  } else if (rank === 3) {
    return "rank-three";
  } else {
    return "";
  }
}
export default SingleArea;