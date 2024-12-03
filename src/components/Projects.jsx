import React from 'react'
import './CSS/Project.css'

const Projects = () => {
  return (
    <div className="container">
      <h1 className='projectheading'>Projects</h1>
      <div className="row projecthead">

    <div className=" skillIcon col-lg-4 col-md-6">

    <div className="card uppercard" style={{ width: "18rem", height:"26rem"}}>
    <a target='blank' href="https://louisesannti.com/"> <img className="card-img-top" src="./images/website2.png" alt="Card image cap" /> </a>
        <div className="card-body">
            <h5 className="card-title">Wine Louise Santi Product Information Website </h5>
            <p className="card-text">
            Designed and developed a product information website for Louise Santi, 
            showcasing fresh and fine wines
    </p>
            <a target='blank' href="https://louisesannti.com/" className="btn btn-dark">
              View
            </a>
    </div>

      </div>
    </div> 
    <div className=" skillIcon col-lg-4 col-md-6">

<div className="card" style={{ width: "18rem", height:"26rem"}}>
    <a target='blank' href="https://animaldata.org.uk/insurance"> <img  className="card-img-top" src="./images/Animaldata.png" alt="Card image cap" /></a>
    <div className="card-body">
        <h5 className="card-title"> Git Contribution: UI Enhancements for AnimalData Insurance Website</h5>
        <p className="card-text">
        Contributed via Git to redesign and optimize the AnimalData insurance platform, focusing on responsive design, accessibility, and usability.
</p>
        <a target='blank' href="https://animaldata.org.uk/insurance" className="btn btn-dark">
          View
        </a>
</div>

  </div>
</div> 

  </div>
    </div>
  )
}

export default Projects