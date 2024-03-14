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
  const localLanguage = localStorage.getItem("lang");
  const defaultLang = localLanguage ? localLanguage : "en";
  const storedMode = localStorage.getItem("darkMode");
  const defaultMode = storedMode ? storedMode : "false";
  const [languageValue, setLanguageValue] = useState(defaultLang);
  const [darkMode, setDarkMode] = useState(defaultMode);

  useEffect(() => {
    if (!storedMode) {
      localStorage.setItem("darkMode", defaultMode);
    }
  }, [storedMode, defaultMode]);

  const changeLanguage = () => {
    const newLang = languageValue === "en" ? "tr" : "en";
    setLanguageValue(newLang);
    localStorage.setItem("lang", newLang);
  };

  const toggleDarkMode = () => {
    const newMode = darkMode === "false" ? "true" : "false";
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
  };


  const content = languageValue === "tr" ? languages.tr : languages.en;
  const contentProjects = languageValue === "tr" ? "tr" : "en";
  const data = {
    content,
    contentProjects,
    changeLanguage,
    languageValue,
    darkMode,
    toggleDarkMode
  };

  useEffect(() => {
    if (!localLanguage) {
      localStorage.setItem("lang", defaultLang);
    }
  }, [localLanguage, defaultLang]);

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
