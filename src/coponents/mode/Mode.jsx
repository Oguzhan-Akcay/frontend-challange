import React, { useState, useEffect, useContext } from "react";
import "./mode.css";
import { DataContext } from "../../context/DataContext";


function Mode() {

  const { langHandler, langPre, toggleDarkMode, darkMode } = useContext(DataContext);

  return (
    // <div className="mode-container">
    <div className={`mode-container ${darkMode === "true" ? "thema-mode" : ""}`}>
      <div className="block">
        <label htmlFor="checkbox" className={`input-label ${darkMode === "true" ? "thema-input-labe" : ""}`}>
          <div className={`button-position ${darkMode === "true" ? "thema-button-position" : ""}`}>
            <input
              type="checkbox"
              id="checkbox"
              onChange={toggleDarkMode}
              checked={darkMode === "false"}
            />
          </div>
          <p className={`mod-thema ${darkMode === "true" ? "thema-mod-thema" : ""}`}>{darkMode === "true" ? "LIGHT" : "DARK"}</p>
          
          |
        </label>
      </div>

      <div>
        <div className={`lang-handler-div ${darkMode === "true" ? "thema-lang-handler-div" : ""}`}>

          <span
            className={`lang-handler-span ${darkMode === "true" ? "thema-lang-handler-span" : ""}`}
            onClick={langHandler}
          >
            {langPre === "en" ? "TÜRKÇE" : "İNGİLİZCE"}
          </span>
          'YE GEÇ
        </div>
      </div>
    </div>
  );
}

export default Mode;
