import React from 'react'
import '../Styles/About.css'
export default function About() {
  return (
    <>
    <div className="wrapper-about" id='about'>
        <div className="left-about">
          <span>About <span className="blue">Me</span></span>
          <p>I'm not just a developer, I'm someone who's genuinely passionate about crafting digital experiences that people love. With a strong foundation in React, HTML, CSS, and JavaScript, I bring technical skills to the table that help bring ideas to life. What sets me apart is my commitment to creating designs that look great and feel intuitive and engaging. I take pride in my ability to work effectively in teams, as great things happen when people collaborate. I'm excited about the chance to join and be a part of a team that values creativity, innovation, and the pursuit of excellence. I'm not just looking for a job, I want to be a valuable team member, contributing my skills and passion to help you reach your goals.
           {/* <span style={{color:"#EEE",paddingLeft:"10px"}}>...Read more</span> */}
           </p>
        </div>
        <div className="intro-right right-about ">
            <img className='bg-circle' src="../Images/bg-square.png" alt="" height='230' />
            <img className='person-1 sleep' src="../Images/2.png" alt="" height="280"/>
        </div>
    </div>
    </>
  )
}
