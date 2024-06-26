import React from "react";
import "./About.css"
import Hi from "/src/assets/hi.png"
import Profile from "/src/assets/olawaleDaniel.png"
import Cv from "../../assets/walecv.pdf"

export default function About(){
    return(
        <>
        <div id="about">
            <div id="contain">
                <div id="abtText">
                    <p id="pp">Hi <img src={Hi} alt="" />, I'm a<br/><span>Software Developer</span></p>
                    
                    <p id="p2">
                        I'm <span>Olawale Daniel</span>, actively seeking opportunities to apply my acquired skills and knowledge to real-world projects.
                        I have gained practical experience through hands-on projects, both independently  and collaboratively.
                    </p>
                    <div id="btn">
                        <a id="btn1" href="#">Hire Me</a>
                        <a id="btn2" target="parent"  href={Cv} >Download my CV</a>
                    </div>
                </div>
                <div id="abtImage">
                <img src={Profile} alt="" />
                </div>
            </div>
        </div>
        </>
    )
}