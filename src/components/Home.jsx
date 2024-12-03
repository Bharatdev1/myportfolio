import React,{useEffect} from 'react'
import './CSS/Home.css'


const Home = () => {
  useEffect(() => {
    // Ensure typewriter logic runs after component mounts
    const title = document.getElementById('headAnimation');
    let myTitle = "UI/UX Designer";
    let index = 1;
    
// Web Developer
    const typewriter = () => {
      
        let newTitle = myTitle.slice(0, index);
        title.innerText = newTitle;
        
        // index > myTitle.length ? index = 1 :index++;

        if (index > myTitle.length){
          index = 1
        }else{
          index++;
        }
          setTimeout(typewriter, 300); 
    };
    typewriter();
  }, []); 


  return (
  <div className="container">
  <div className="headerActar">

    <div className='headerchile1' >
        <h2 data-aos="fade-right" className=''>Welcome to my Portfolio</h2>
        <h1  data-aos="fade-left">Hi! I'm Bharat Vasnani <span id='headAnimation'></span>|</h1>
    </div>

    <div className="headerchile2">
      <img data-aos="fade-left" className='img-fluid myavtar' src="./images/bharat_Avtar.png" alt="" />
    </div>
  </div>
  <br/>
  <p className='abouttext'>Hi, I’m Bharat Vasnani, a passionate MERN stack developer dedicated to crafting seamless and innovative web applications. With expertise in React, Node.js, and UI/UX design, I transform creative ideas into functional solutions. Explore my skills, projects, and journey as I strive to make an impact through clean and efficient code.</p>
  </div>
)
}

export default Home