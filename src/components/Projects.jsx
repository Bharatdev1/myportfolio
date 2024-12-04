import React from 'react'
import './CSS/Project.css'

const Projects = () => {
  return (
    <div className="container">
      <h1 className='projectheading'>Projects</h1>
      <div className="row projecthead">

    <div className=" skillIcon col-lg-4 col-md-6">

    <div className="card uppercard" style={{ width: "18rem", height:"26rem"}}>
    <a target='blank' href="https://louisesannti.com/"> <img  className="card-img-top" src="./images/website2.png" alt="Card image cap" /> </a>
        <div className="card-body">
            <h5 className="card-title">Wine Louise Santi Product Information Website </h5>
            <p className="card-text">
            Designed and developed a product information website for Louise Santi, 
            showcasing fresh and fine wines
    </p>
            <br/>
            <br/>
            <a target='blank' href="https://louisesannti.com/" className="btn btn-dark">
              View
            </a>
    </div>

      </div>
    </div> 
    <div className=" skillIcon col-lg-4 col-md-6">

<div className="card uppercard" style={{ width: "18rem", height:"26rem"}}>
    <a style={{height:"39%"}} target='blank' href="https://ngx-stories.vercel.app/"> <img className="card-img-top" src="./images/Ngx-Stories.png" alt="Card image cap" /></a>
    <div className="card-body">
        <h5 className="card-title"> Open Source Contribution: Ngx-Stories Frontend Design</h5>
        <p className="card-text">
        Created responsive frontend designs for Ngx-Stories using CSS focusing on clean UI, usability, and seamless user experience.
</p>
        <a target='blank' href="https://ngx-stories.vercel.app/" className="btn btn-dark">
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