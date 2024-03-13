import React, { useContext } from 'react';
import './header.css';
import { DataContext } from "../../context/DataContext";


//<a key={index} href="#">{link}</a>
function Header() {
    const { content,darkMode } = useContext(DataContext);
    const navigationLinks = content?.headerData?.navigationLinks || [];
    return (
        <nav className={`header-container ${darkMode === "true" ? "thema-header-container" : ""}`}>
            <div className={`custom-container ${darkMode === "true" ? "thema-custom-container" : ""}`}>
                <a>O.A</a>
            </div>
            <div className={`navigation-bar ${darkMode === "true" ? "thema-navigation-bar" : ""}`}>
                {navigationLinks.map((link, index) => (
                     <a key={index} href={`#${link.toLowerCase()}`}>{link}</a>
                    
                ))}
            </div>
        </nav>
    );
}

export default Header;


