import React from 'react'
import './CSS/Navbar.css'


const NavBar = () => {

  const scrollhandle = (elmref)=>{
    alert("Hello")
  }
  return (
    <nav className="navbar navbar-expand-lg ">
      <a className="navbar-brand text-light" href="#Home">
        DevBharat
      </a>
      <a className="resume navbar-brand text-light" target='blank' href="./Bharat_Vasnani_Resume.pdf">
        Resume
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ms-auto">
          <a className="nav-item nav-link text-light" href="#homesection">
            Home
          </a>
          <a onClick={()=>scrollhandle()} className="nav-item nav-link text-light" href="Skills/#skillscetion">
            Skills
          </a>
          <a className="nav-item nav-link text-light" href="#project">
            Projects
          </a>
          <a className="nav-item nav-link text-light" href="#project">
          Contact
          </a>
        </div>
      </div>
    </nav>
  )
}

export default NavBar