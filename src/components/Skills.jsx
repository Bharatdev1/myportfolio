import React from 'react'
import './CSS/Skills.css'
const Skills = () => {


  return (
<div className='container containerhead'>
<h2 className='SkillsHead' >Skills</h2>
<div className="row ">

<div className="skillcard skillIcon col-lg-4 col-md-6"  style={{textAlign:"center",color:'white'}}>
    <img data-aos="fade-right" src="./images/reactjs.png" className='img-fluid ' alt="" />
    <p>React JS</p>
</div>

<div className="skillcard skillIcon col-lg-3 col-md-6"style={{textAlign:"center",color:'white'}}>
    <img data-aos="fade-right" src="./images/mongodb.png" className='img-fluid' alt="" />
    <p>MongoDB</p>
</div>

<div className=" skillcard skillIcon col-lg-3 col-md-6"style={{textAlign:"center",color:'white'}}>
    <img data-aos="fade-right"  src="./images/node.png" className='img-fluid' alt="" />
    <p>Node JS</p>
</div>

<div className="skillcard skillIcon col-lg-3 col-md-6"style={{textAlign:"center",color:'white'}}>
    <img data-aos="fade-left" src="./images/javascript.png" className='img-fluid' alt="" />
    <p>JavaScript</p>

</div>
<div className="skillcard skillIcon col-lg-3 col-md-6" style={{textAlign:"center",color:'white'}}>
    <img data-aos="fade-left" src="./images/css.png" className='img-fluid' alt="" />
    <p>CSS</p>
</div>

<div className="skillcard skillIcon col-lg-3 col-md-6" style={{textAlign:"center",color:'white'}} >
    <img data-aos="fade-left" src="./images/bootstrap.png"  style={{width:"128px"}} className='img-fluid' alt="" />
    <p>Bootstrap</p>

</div>

</div>

<div className="row ">

<div className="skillcard skillIcon col-lg-3 col-md-6"style={{textAlign:"center",color:'white'}}>
    <img data-aos="fade-right" src="./images/gitlogo.png" style={{width:"128px"}} className='img-fluid' alt="" />
    <p>Git</p>
</div>

<div className="skillcard skillIcon col-lg-3 col-md-6"style={{textAlign:"center",color:'white'}}>
    <img data-aos="fade-right" src="./images/sass.png" style={{width:"128px"}} className='img-fluid' alt="" />
    <p>SASS</p>
</div>

<div className="skillcard skillIcon col-lg-3 col-md-6"style={{textAlign:"center",color:'white'}}>
    <img data-aos="fade-left" src="./images/TailwindCSS.png" style={{width:"128px"}} className='img-fluid' alt="" />
    <p>Tailwind CSS</p>
</div>


<div className="skillcard skillIcon col-lg-3 col-md-6"style={{textAlign:"center",color:'white'}}>
    <img data-aos="fade-left" src="./images/MaterialUI.png" style={{width:"128px"}} className='img-fluid' alt="" />
    <p>Material UI</p>
</div>

</div>

<h2 className='SkillsHead' >Tools and Software</h2>

<div className="row ">
<div className="skillcard skillIcon col-lg-3 col-md-6"style={{textAlign:"center",color:'white'}}>
    <img data-aos="fade-left" src="./images/VSCode.png" style={{width:"128px"}} className='img-fluid' alt="" />
    <p>VS Code</p>
</div>

<div className="skillcard skillIcon col-lg-3 col-md-6"style={{textAlign:"center",color:'white'}}>
    <img data-aos="fade-left" src="./images/MongoDBCompas.png" style={{width:"128px"}} className='img-fluid' alt="" />
    <p>Mongodb Compass</p>
</div>

<div className="skillcard skillIcon col-lg-3 col-md-6"style={{textAlign:"center",color:'white'}}>
    <img data-aos="fade-left" src="./images/Postman.png" style={{width:"128px"}} className='img-fluid' alt="" />
    <p>Postman</p>
</div>

</div>
</div>
  )
}

export default Skills