import React from "react";
import {useState,useEffect} from 'react';
import axios from 'axios';

function RegisterArea() {
    const[name,setName]=useState('');
    const[sapid,setSapid]=useState('');
    // const[email,setEmail]=useState('');
    // const[contact,setContact]=useState('');
    // const[github,setGithub]=useState('');
    // const[university,setUniversity]=useState('');
    const[year,setYear]=useState('');
    const[branch,setBranch]=useState('');
    const[roll,setRoll]=useState('');
    const [successMessage, setSuccessMessage] = useState('');
  
    const [isLoading, setIsLoading] = useState(false); // New loading state

    const handleSubmit=(e)=>{
      e.preventDefault();
      setIsLoading(true); // Set loading to true before making the request
      console.log(name,sapid,roll,year,branch);
      const data={
        "Name":name,
         "SapId":sapid,
         "Roll":roll,
        "Year":year,
        "Branch":branch,
      }
    //   axios.post(process.env.REACT_APP_KEY,data).then((response)=>{
    //     console.log(response);
    //     setSuccessMessage("Registration successful!");
    //     setName('');
    //     setEmail('');
    //     setContact('');
    //     setGithub('');
    //     setUniversity('');
    //     setYear('');
    //   })
    // }
    axios.post(process.env.REACT_APP_KEY, data)
      .then((response) => {
        console.log(response);
        setSuccessMessage('Registration successful!');
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false); // Set loading to false after the request is complete
      });
  };
  useEffect(() => {
    if (successMessage) {
      setName('');
      setSapid('');
      setRoll('');
      setBranch('');
      setYear('');
    }
  }, [successMessage]);

return (
    <section className="contact-area pt-120 pb-120">
      <div className="container">
        
        <div className="row justify-content-center">
          <div className="col-lg-6 pl-45 pt-50">
              <div className="section-title text-center title-style-three mb-20">
                
              <h2>Register</h2>
            </div>
            <div className="contact-info-list text-center mb-40">
              <ul>
                <li>
                  <i className="fas fa-map-marker-alt" />
                  Bidholi Campus, UPES, Dehradun, India
                </li>
                <li>
                  <i className="fas fa-envelope" />
                  upesopen@gmail.com
                </li>
              </ul>
            </div>
            <div className="contact-form">
              <form onSubmit={handleSubmit} method="POST">
                <div className="row">
                  <input type="text" placeholder="Your Name" required onChange={(e)=>setName(e.target.value)} value={name}/>
                </div>
                <div className="row">
                  <input
                    type="text"
                    inputMode="numeric"
                    // pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
                    placeholder="Your Sapid"
                    required
                    value={sapid}
                    onChange={(e)=>setSapid(e.target.value)}
                  />
                </div>
                {/* <div className="row">
                  <input
                    type="tel"
                    //pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
                    maxLength="12"
                    title="Ten digits code"
                    placeholder="Your contact"
                    required
                    value={contact}
                    onChange={(e)=>setContact(e.target.value)}
                  />
                </div> */}
                {/* <div className="row">
                  <input type="url" placeholder="Github Link" required value={github} onChange={(e)=>setGithub(e.target.value)}/>
                </div>
                <div className="row">
                  <input type="text" placeholder="Your University" required value={university} onChange={(e)=>setUniversity(e.target.value)} />
                </div> */}
                  <div className="row">
                  <input type="text" placeholder="Your Rollno." required value={roll} onChange={(e)=>setRoll(e.target.value)}/>
                </div>
                <div className="row">
                  <input type="text" placeholder="Your Branch" required value={branch} onChange={(e)=>setBranch(e.target.value)}/>
                </div>
                <div className="row">
                  <input type="text" inputMode="numeric" placeholder="Year of Graduation" required value={year} onChange={(e)=>setYear(e.target.value)}/>
                </div>
                <br />
                <br />
                <div className="row justify-content-center">
                {isLoading ? (
                  <button type="submit" className="register btn btn-style-two" disabled>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" style={{color:'black'}}></span>
                    Loading...
                  </button>
                ) : (
                  <button type="submit" className="register btn btn-style-two">Register</button>
                )}
                </div>
                <br />
                {successMessage && (
          <div>
            <span id="msg" style={{ color: 'black' }}>{successMessage}</span> {/* Display the success message */}
            <p style={{ color: 'black', fontSize:'25px'}}>Click <a style={{ color: 'red' }} href="https://discord.gg/FyFgtY27Wf">here</a> to join the discord server.</p> {/* Display the join link */}
          </div>
        )}
              </form>
              <span id="msg"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisterArea;
