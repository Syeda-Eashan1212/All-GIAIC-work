import "../styles/hero.css";
import "../styles/about.css"
import Image from "next/image";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import Link from "next/link";


function About(){
   
return(
<div className="hero-boxes">
  <div className="hero-boxes-container">
    <div>
     {/*right side*/}
        <Image 
        src={"/images/profile.jpg"} 
        width={300} 
        height={300} 
        alt="me"
        className="hero-image"/>
            <div className="social-icons-cont">
                <Link href={"https://facebook/SyedaEashan"}> <FaFacebookSquare className="social-icons"/> </Link>   
                <Link href={"https://github.com/Syeda-Eashan1212"}> <FaSquareGithub className="social-icons"/> </Link>
                <Link href={"https://linkedin.com/SyedaEashan" }> <FaLinkedin  className="social-icons"/> </Link>
            </div>
                
     </div>
        {/*left side*/}
     <div className="hero-right-div">
          <h2 className="hero-text"> Hello!<br/> I 'm Syeda Eashan... </h2>
            <p className="desc-hero"> I thrive on new experiences and stepping out of my comfort zone
              to learn what my strengths and weakness are, not only in work but in all aspects of life.
            </p>
     </div>
        
       </div>
</div>
)
}
export default About;