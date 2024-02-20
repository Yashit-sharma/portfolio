import React from 'react'
import '../Styles/Intro.css'
export default function Intro() {
  return (
    <>
    <div className="intro--wrap" id='home'>
        <div className="intro-left">
            <div className="left--items">
                <p>Front End <br></br> <span className='blue'>Developer</span></p>
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
        <div className="intro-right">
            <img className='bg-circle' src="../Images/bg-circle.png" alt="" height='300' />
            <img className='person-1' src="../Images/1.png" alt="" height="300" />
        </div>
    </div>
    </>
  )
}
