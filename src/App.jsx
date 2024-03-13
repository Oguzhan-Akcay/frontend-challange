import React, { useState, useEffect } from 'react';
import './App.css'
import Mode from './coponents/mode/Mode'
import Header from './coponents/header/Header'
import Hero from './coponents/hero/Hero'
import Skills from './coponents/skills/Skills'
import Profile from './coponents/profile/Profile'
import Projects from './coponents/projects/Projects'
import Footer from './coponents/footer/Footer'
import { DataContext } from "./context/DataContext";
import { languages } from "./data/languages";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const storedLang = localStorage.getItem("lang");
  const defaultLang = storedLang ? storedLang : "en";
  const storedMode = localStorage.getItem("darkMode");
  const defaultMode = storedMode ? storedMode : "false";
  const [langPre, setLangPre] = useState(defaultLang);
  const [darkMode, setDarkMode] = useState(defaultMode);

  useEffect(() => {
    if (!storedMode) {
      localStorage.setItem("darkMode", defaultMode);
    }
  }, [storedMode, defaultMode]);

  const langHandler = () => {
    const newLang = langPre === "en" ? "tr" : "en";
    setLangPre(newLang);
    localStorage.setItem("lang", newLang);
  };

  const toggleDarkMode = () => {
    const newMode = darkMode === "false" ? "true" : "false";
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
  };


  const content = langPre === "tr" ? languages.tr : languages.en;
  const contentProjects = langPre === "tr" ? "tr" : "en";
  const data = {
    content,
    contentProjects,
    langHandler,
    langPre,
    darkMode,
    toggleDarkMode
  };

  useEffect(() => {
    if (!storedLang) {
      localStorage.setItem("lang", defaultLang);
    }
  }, [storedLang, defaultLang]);

  useEffect(() => {
    toast.success("Başarılı bir şekilde girdiniz");
  }, []);

  return (
    <DataContext.Provider value={data}>
      <div>
        <Mode />
        <Header />
        <Hero />
        <Skills />
        <Profile />
        <Projects />
        <Footer />
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </DataContext.Provider>
  );
}

export default App;
