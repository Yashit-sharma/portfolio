import React from 'react'
import '../Styles/About.css'
import {motion} from 'framer-motion'
export default function About() {
  let Width = window.innerWidth > 600 ? true : false;
  return (
    <>
    <div className="wrapper-about" id='about'>
        <div className="left-about">
          <motion.span
          whileInView={{scale:[0,1]}}
          transition={{duration:1}}
          viewport={{once:true}}
          >About <span className="blue">Me</span></motion.span>
          <motion.p
          whileInView={{opacity:[0,1]}}
          transition={{duration:1}}
          viewport={{once:true}}
          >I'm not just a developer, I'm someone who's genuinely passionate about crafting digital experiences that people love. With a strong foundation in React, HTML, CSS, and JavaScript, I bring technical skills to the table that help bring ideas to life. What sets me apart is my commitment to creating designs that look great and feel intuitive and engaging. I take pride in my ability to work effectively in teams, as great things happen when people collaborate. I'm excited about the chance to join and be a part of a team that values creativity, innovation, and the pursuit of excellence. I'm not just looking for a job, I want to be a valuable team member, contributing my skills and passion to help you reach your goals.
           {/* <span style={{color:"#EEE",paddingLeft:"10px"}}>...Read more</span> */}
           </motion.p>
        </div>
        <div className="intro-right right-about ">
            <motion.img 
             whileInView={Width ? { x:["-100px","100px","-100px"]} : {}}
             transition={{
                 x:{
                 duration:15, repeat:Infinity,yoy:Infinity,ease:"linear"
                 }
             }}
            className='bg-circle' src="../Images/bg-square.png" alt="" height='230' />
            <motion.img
             whileInView={{y:["0px","-20px","0px"]}}
             transition={{duration:5,repeat:Infinity}}
            className='person-1 sleep' src="../Images/2.png" alt="" height="280"/>
        </div>
    </div>
    </>
  )
}
