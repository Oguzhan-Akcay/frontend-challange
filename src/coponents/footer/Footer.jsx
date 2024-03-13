import React, { useContext } from 'react';
import './footer.css';
import { DataContext } from "../../context/DataContext";


function Footer() {
  const { content, darkMode } = useContext(DataContext);
  return (
    <div id='HireMe' className={`footer-container ${darkMode === "true" ? "thema-footer-container" : ""}`}>
      <h2 className={`footer-title ${darkMode === "true" ? "thema-footer-title" : ""}`}>{content.footerSection.main}
      </h2>
      <div className={`contact-info ${darkMode === "true" ? "thema-contact-info" : ""}`}>
        <div className={`email-footer ${darkMode === "true" ? "thema-email-footer" : ""}`}>
          <a href="mailto:oguzhanakcay90@gmail.com">{content.footerData[0].email}</a>
          
        </div>
        <div className={`links ${darkMode === "true" ? "thema-links" : ""}`}>
          <a href={content.footerData[0].personalBlogLink}>Personal Blog</a>
          <a href={content.footerData[0].githubLink}>Github</a>
          <a href={content.footerData[0].linkedinLink}>Linkedin</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
