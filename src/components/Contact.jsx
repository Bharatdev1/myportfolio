import React from 'react'
import './CSS/Contact.css'



const Contact = () => {
  return (
<div className="container">
<h1 className='contacdheading' style={{textAlign:"center"}}>Get in Touch</h1>
    <div className=' contacthead'>
        <div className="contactchild1">
           <a target='blank' href="https://github.com/Bharatdev1"><img src="./images/contactgit.svg" style={{width:"70px"}} alt="" /></a>
           <a target='blank' href="https://www.linkedin.com/in/bharat-vasnani-4497a6112/">   <img src="./images/linkedin.svg" style={{width:"70px"}} alt="" /></a>
           <a href="mailto:your-bharatvasnani007@gmail.com?subject=Hello&body=I%20wanted%20to%20reach%20out%20to%20you.">  
            <img src="./images/mail.svg" style={{width:"70px"}} alt="" /></a>
         
        </div>
        <div className="contactchild2" >
        
            <form className="form-group " action="https://formspree.io/f/mvgodeoj" method='POST'>
            <div class="form-group" style={{marginBottom:"5px"}}>
                <input type="text"
                className='form-control'
                name="usermane"
                placeholder='Name'
                autoComplete='off'
                required
                />
            </div>
            <div class="form-group" style={{marginBottom:"5px"}}x   >
                <input type="email"
                className='form-control'
                name="Email"
                placeholder='Email'
                autoComplete='off'
                required
                />
            </div>

            <div class="form-group messagediv" style={{marginBottom:"5px"}}>
                <textarea className="form-control"name="message" cols="30" rows="6" id="" autoComplete='off' placeholder='message'
                required></textarea>
            </div>
            <div class="form-group" style={{marginBottom:"5px",textAlign:"center"}}>
                <input  value="Send" type='button' className='btn btn-dark' style={{fontSize:"1.3em"}}/>
            </div>
            </form>
        </div>

    </div>
</div>
  )
}

export default Contact