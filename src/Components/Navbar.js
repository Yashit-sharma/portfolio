import React from 'react'
import '../Styles/Navbar.css'

export default function Navbar() {
  // const scrollToSection = (sectionId) => {
  //   console.log(sectionId);
  //   const section = document.getElementById(sectionId);
  //   console.log(section);
  //   if (section) {
  //     section.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };
  const scrollToSection = (sectionId, duration) => {
    const targetSection = document.getElementById(sectionId);
    if (!targetSection) return;
    const targetPosition = targetSection.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const startTime = performance.now();
    const easeInOutQuad = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    const scroll = (currentTime) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      window.scrollTo(0, startPosition + distance * easeInOutQuad(progress));
      if (timeElapsed < duration) {
        requestAnimationFrame(scroll);
      }
    };
    requestAnimationFrame(scroll);
  };
  return (
    <>
    <div className="wrapper">
        <div className="logo">
        <p>Port-Folio</p>
        </div>
        <div className="nav-list">
            <ul className='nav-ul'>
                <li onClick={()=>{scrollToSection('home',650)}} className='items'>Home</li>
                <li onClick={()=>{scrollToSection('about',650)}} className='items'>About Me</li>
                <li onClick={()=>{scrollToSection('work',650)}} className='items'>Work</li>
            </ul>
        </div>
        <div className="buttons">
            <a href='https://drive.google.com/file/d/1jReR9TeK1aN_sZs-EVOj4TQB7Npg4icr/view?usp=drivesdk' target='_blank' rel="noreferrer"><button id='btn2'>Reśume</button></a>
        </div>
    </div>
    </>
  )
}
