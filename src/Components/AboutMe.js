import React from "react";
import author from "../IMG_1906.png";

const AboutMe = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className ="col-lg-6 col-xm-12">
                 <div className="photo-wrap mb-5" >
                 <img className ="profile-img" src={author} alt="author..."/>
                 </div>
                </div>
                <div className ="col-lg-6 col-xm-12">
                    <h1 className="about-heading">About Me</h1>
                    <p>
                    About Me
Myself Akashini which means "Sky". My friends used to call me as Akash. I am from India is known as land of diversity. Currently pursuing a master’s degree in Computer Science at Rivier University. I always believe “Success is steady progress toward one's personal goals". If I could describe myself in three words it would be: Simple. Hungry. Smile. Just be Simple in life, Hungry to succeed, and Smile from the heart, always. 
More About Me


                    </p>
                </div>
             </div>
            
        </div>
    )
}

export default AboutMe
