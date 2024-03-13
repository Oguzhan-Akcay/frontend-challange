// import React, {useContext, useState, useEffect} from 'react';
// import './skills.css';
// import { DataContext } from "../../context/DataContext";
// import axios from 'axios';



// function Skills() {
//     const { content, darkMode } = useContext(DataContext);
//     const [skillsData, setSkillsData] = useState(null);

//     useEffect(() => {
//       axios.get('https://65f23824034bdbecc7647c89.mockapi.io/skillsDataHero')
//         .then(response => {
//             setSkillsData(response.data);
//         })
//         .catch(error => {
//           console.error('Error fetching data:', error);
//         });
//     }, []);
  
//     if (!skillsData) {
//       return null;
//     }
      
//     return (
//         <div id='skills' className={`skills ${darkMode === "true" ? "skills-thema" : ""}` }>
//             <h1 className={`skills-title ${darkMode === "true" ? "thema-skills-title" : ""}` }>{content.skill}</h1>
//             <div className="skills-container">
//                 {skillsData.map((skill, index) => (
//                     <div key={index} className="skill">
//                         <h2 className={`skill-title ${darkMode === "true" ? "thema-skill-title" : ""}` }>{skillsData.title}</h2>
//                         <p className={`skill-description ${darkMode === "true" ? "thema-skill-description" : ""}` }>{skill.description}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Skills;
import React, { useContext, useState, useEffect } from 'react';
import './skills.css';
import { DataContext } from "../../context/DataContext";
import axios from 'axios';

function Skills() {
    const { content, darkMode } = useContext(DataContext);
    const [skillsData, setSkillsData] = useState(null);

    useEffect(() => {
        axios.get('https://65f23824034bdbecc7647c89.mockapi.io/skillsDataHero')
            .then(response => {
                setSkillsData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    if (!skillsData) {
        return null;
    }

    return (
        <div id='skills' className={`skills ${darkMode === "true" ? "skills-thema" : ""}`}>
            <h1 className={`skills-title ${darkMode === "true" ? "thema-skills-title" : ""}`}>{content.skill}</h1>
            <div className="skills-container">
                {skillsData.map((skill, index) => (
                    <div key={index} className="skill">
                        <h2 className={`skill-title ${darkMode === "true" ? "thema-skill-title" : ""}`}>{skill.title}</h2>
                        <p className={`skill-description ${darkMode === "true" ? "thema-skill-description" : ""}`}>{skill.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
