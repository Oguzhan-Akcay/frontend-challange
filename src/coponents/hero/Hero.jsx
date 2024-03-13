import React, { useContext } from 'react';
import GithubLogo from '../../assests/github.svg'
import LinkedInLogo from '../../assests/linkedin-in.svg'
import './hero.css';
import { DataContext } from "../../context/DataContext";


function Hero() {

    const { content, darkMode } = useContext(DataContext);
    return (
        <div className={`hero-container ${darkMode === "true" ? "thema-hero" : ""}`}>
            <div className={`left-section ${darkMode === "true" ? "thema-left-section" : ""}`}>
                <p className={`hero-name ${darkMode === "true" ? "thema-hero-name" : ""}`}>{content.aboutSection.name}</p>
                {/* <h1 className="hero-h1">{content.title}</h1> */}
                <h1 className={`hero-h1 ${darkMode === "true" ? "thema-hero-h1" : ""}`}>
                {content.title.split(',').map((text, index) => (
                <span key={index}>{text}<br/></span>
                ))}
                </h1>
                <p className={`left-section-info ${darkMode === "true" ? "thema-left-section-info" : ""}`}>{content.description}</p>
                <div className={`button-container-hero ${darkMode === "true" ? "thema-button-container-hero" : ""}`}>
                    <button className={`hire-button ${darkMode === "true" ? "thema-hire-button" : ""}`}>{content.headerData.navigationLinks[2]}</button>
                    <button className={`github-button ${darkMode === "true" ? "thema-github-button" : ""}`}> <img src={GithubLogo} alt="Github Logo" />Github</button>
                    <button className={`linkedIn-button ${darkMode === "true" ? "thema-linkedIn-button" : ""}`}> <img src={LinkedInLogo} alt="Linkedin Logo" />Linkedin</button>
                </div>
            </div>
            <div className={` right-section ${darkMode === "true" ? "thema-right-section" : ""}`}>
                <img className={`hero-photo ${darkMode === "true" ? "thema-hero-photo" : ""}`} src="src/assests/Oguz.jpg" alt="Oğuzhan Akçay" />
            </div>
        </div>
    );
}

export default Hero;
