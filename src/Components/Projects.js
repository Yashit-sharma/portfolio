import React from 'react'
import '../Styles/Projects.css'
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
        <div className="heading-proj" id='work'>
            <span>My recent <span className="blue">works</span>
            </span>
            <div className="proj-cards">
                {
                    Data.map((ele,index) =>{
                        return(
                            <>
                            <div className="cards">
                                <a href={'http://'+ele.Link}>
                                <div className="image">
                                    <h3 className='title'>{ele.Name}</h3>
                                    <img className='img-map' src={ele.Image} alt="" />
                                </div>
                                </a>
                            </div>
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
