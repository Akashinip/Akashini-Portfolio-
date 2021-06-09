import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn} from "@fortawesome/free-brands-svg-icons";


const Services = () => {
    return (
       <div className ="coursework">
         <h1 className="py-5">Other Content</h1>
             <div className = "container">
                 <div className="row">
                  <div className="col-md-3 col-sm-6">
                      <div className="box">
                      <div className ="circle" ><FontAwesomeIcon className ="icon" icon={faDesktop} size ="2x" /></div>
                        <h3> Web Design</h3>
                        <p>Master's Degree Coursework</p>    
                      </div>
                    </div>
                {/*  */}
                <div className="col-md-3 col-sm-6">
                      <div className="box">
                      <div className ="circle" ><FontAwesomeIcon className ="icon" icon={faFileCode} size ="2x" /></div>
                        <h3>Web Development</h3>  
                            <p> Website build with an new proven technologies</p>
                            
                      </div>
                </div>
                {/*  */}
                <div className="col-md-3 col-sm-6">
                      <div className="box">
                      <div className ="circle" ><FontAwesomeIcon className ="icon" icon={faLinkedinIn} size ="2x" /></div>
                        <h3>Social Media</h3>
                            <p> Linked Profile</p>
                              
                      </div>
                  </div>
                 </div>
             </div>
             </div>  
       
    )
}

export default Services
