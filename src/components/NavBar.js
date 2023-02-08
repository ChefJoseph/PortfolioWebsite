import React, { useState, useEffect, useRef } from 'react'
import resume from '../assets/img/1_Resume_Joseph_Hirotsu_1_23.pdf'
function NavBar() {
    const [scrolled, setScrolled] = useState(false);
    const [openSlide, setOpenSlide] = useState(false);
    const menuRef = useRef()

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    useEffect(() => {
        const handleOutsideClicks = (e)=>{
            if(openSlide && menuRef.current && !menuRef.current.contains(e.target)){
              setOpenSlide(false);
            }
        }
        document.addEventListener('mousedown', handleOutsideClicks)
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', handleOutsideClicks);
        };
    })

   

  return (
    <nav className= {scrolled ? "navbar-shrink navbar navbar-expand-lg navbar-light fixed-top": "navbar navbar-expand-lg navbar-light fixed-top"} id="mainNav">
        <div className="container px-4 px-lg-5">
        {/* Home Button  */}
            <a className="navbar-brand" href="#page-top">Joseph Hirotsu</a>
        {/* Mobile View Menu Toggle */}
            <button className="navbar-toggler navbar-toggler-right " 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarResponsive" 
                aria-controls="navbarResponsive" 
                aria-expanded="false" 
                aria-label="Toggle navigation" 
                ref={menuRef}>
                Menu
            </button>
        {/* Nav links */}
            <div className="collapse navbar-collapse ms-auto" id="navbarResponsive">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item"><a className="nav-link" href="#about-scroll">About</a></li>
                    <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
                    <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                    <li className="nav-item"><a className="nav-link" href={resume} target="_blank" rel="noreferrer" download="1_Resume_Joseph_Hirotsu_1_23.pdf" >Resume PDF
                    <i className="fa-solid fa-arrow-down-to-line"></i></a>
 
 
 </li>
                </ul>
            </div>
        {/* social links  */}
            <div className="d-none d-lg-block d-xl-block social d-flex justify-content-center ">
                <a className="social-link mx-1" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/joseph-hirotsu/" title="Linkedin">
                    <i className="fab fa-linkedin fa-xl" title="Linkedin"></i>
                </a>
                <a className="social-link mx-1" target="_blank" rel="noreferrer" href="https://github.com/ChefJoseph" title="Github">
                    <i className="fab fa-github fa-xl" title="Github"></i>
                </a>
            </div>
        </div>
    </nav>
  )
}

export default NavBar