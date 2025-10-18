import React from "react";
import { motion } from "framer-motion";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <motion.div
        className="hero"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1>
          Hi, I’m <span>Baja Malik</span>
        </h1>
        <p>
       <strong>Programmer From Indonesia</strong>
        </p>

        <motion.button
          className="cta-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => (window.location.href = "/contact")}
        >
         Contact Me
        </motion.button>
      </motion.div>

      {/* --- What I Do Section --- */}
      <motion.div
        className="features"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <h2>What I Do</h2>
        <ul>
        <li>I mostly do Coding, but i also spend rest of my time 3D modelling on <strong>Blender</strong>. I'm not a <strong>Fullstack Developer</strong> but i will always try my best!</li>
        </ul>
      </motion.div>

      {/* ✨ More About Me Section */}
      <motion.div
        className="about-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.8 }}
      >
        <h2 className="cta-button">My Skills</h2>
        

        <div className="about-cards">
          {[
            {
              title: "Blender/3D Modelling",
              text: "still very new to this but i could make a few Car Parts",
            },
            {
              title: "Video Editing",
              text: "Former archer — precision and patience shape how I code.",
            },
            {
              title: "(Ex) Archer Althele",
              text: "used to be an Archer before got into Computer stuff on P'Arc Bogor Archery Club",
            },
            {
              title: "Programming",
              text: "Most recent one so far",
            },
          ].map((card, index) => (
            <motion.div
              className="about-card"
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
