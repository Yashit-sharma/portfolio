import React from 'react'
import '../Styles/Intro.css'
import {motion} from 'framer-motion'
export default function Intro() {
    let Width = window.innerWidth > 600 ? true : false;
  return (
    <>
    <div className="intro--wrap" id='home'>
        <div className="intro-left">
            <div className="left--items">
                <motion.p
                animate={{scale: [0,1]}}
                transition={{duration:1}}
                >Front End <br></br> <span className='blue'>Developer</span></motion.p>
                <div className="buttons">
                    <a className='a_btn_intro' href='https://drive.google.com/file/d/1jReR9TeK1aN_sZs-EVOj4TQB7Npg4icr/view?usp=drivesdk' target='_blank' rel="noreferrer">
                    <button style={{backgroundColor:"#00ADB5"}} id="btn">
                        Hire Me
                    </button>
                    </a>
                    <a className='a_btn_intro' href='https://drive.google.com/file/d/1jReR9TeK1aN_sZs-EVOj4TQB7Npg4icr/view?usp=drivesdk' target='_blank' rel="noreferrer">
                    <button style={{backgroundColor:"rgba(57, 62, 70, 0.75)"}} id="btn">
                        Get CV
                    </button>
                    </a>
                </div>
            </div>

        </div>
        <motion.div
        className="intro-right">
            <motion.img
            whileInView={Width ? { x:["-100px","100px","-100px"],rotate:[0,360]} : {}}
            transition={{
                rotate : {
                duration:20, repeat:Infinity,
                },
                x:{
                duration:15, repeat:Infinity,yoy:Infinity,ease:"linear"
                }
            }}
            className='bg-circle' src="../Images/bg-circle.png" alt="" height='300' />
            <motion.img 
            whileInView={{y:["0px","-20px","0px"]}}
            transition={{duration:5,repeat:Infinity}}
            className='person-1' src="../Images/1.png" alt="" height="300" />
        </motion.div>
    </div>
    </>
  )
}
