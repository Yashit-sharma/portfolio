import React from 'react'
import '../Styles/Projects.css'
import {motion} from 'framer-motion'
export default function Projects() {
    const Data = [
    {
        id:4,
        Image:'images/Landing.png',
        Name:'Landing-pro',
        Link:"landing-1-pro.netlify.app"
    },
    {
        Id : 1,
        Image :'Images/Stocks--app.png',
        Name : 'Stock Grapher',
        Link : "stock-info-assignment.netlify.app/"
    },
    {
        id : 2,
        Image:'images/Notes--keeper.png',
        Name:'Color-Notes',
        Link:"notes-keeper-assignment.netlify.app"
    },
    {
        id:3,
        Image:'images/hang-man.png',
        Name:'Hang-Man',
        Link:"my-hang-man.netlify.app",
    },
]
  return (
    <>
    <div className="wrapper-proj">
        <div className="heading-proj">
            <span>My recent <span className="blue">works</span>
            </span>
            <div className="proj-cards" id='work'>
                {
                    Data.map((ele,index) =>{
                        return(
                            <>
                            <motion.div
                            whileHover={{scale:0.85}}
                            transition={{duration:0.3}}
                            className="cards">
                                <a href={'http://'+ele.Link}>
                                <div className="image">
                                    <h3 className='title'>{ele.Name}</h3>
                                    <img className='img-map' src={ele.Image} alt="" />
                                </div>
                                </a>
                            </motion.div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    </div>
    </>
  )
}
