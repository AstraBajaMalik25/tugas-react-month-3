import React from "react";
import { motion } from "framer-motion";
import "./About.css";

function About() {
  return (
    <motion.div
      className="about-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="about-content">
        <h1>About Me</h1>
        <p className="about-intro">
        16 Year Old trying to learn IT in his best way as possible.   
        </p>

        <div className="more-about">
          <h2>More About Me :D</h2>
          <div className="about-cards">
            <div className="card">
              <h3>Hobby</h3>
              <p><strong>I love playing games and Video Editing on premier pro!, i also love coding sometimes :]</strong></p>
            </div>
            <div className="card">
              <h3>Where i'm From?</h3>
              <p><strong>Bogor West Java!</strong></p>
            </div>
            <div className="card">
              <h3>Interest</h3>
              <p><strong>Video editing, Playing Games, 3D Modelling and cat addict :p</strong></p>   
            </div>

            <div className="card">    
            <h3>Goals</h3>
            <p><strong>I want to move out of indonesia to start a new journey in life!</strong></p>    
           </div> 
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
