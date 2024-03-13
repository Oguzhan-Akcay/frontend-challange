
import React, { useContext } from "react";
import './profile.css'
import { DataContext } from "../../context/DataContext";


function Profile() {
    const { content, darkMode } = useContext(DataContext);

    return (
        <div className={`header-profile ${darkMode === "true" ? "thema-profile" : ""}`} id="profile">
            <h1 className={`profile-h1 ${darkMode === "true" ? "thema-profile-h1" : ""}`}>
                {content.profile}
            </h1>
            <div
                className={`profile-container ${darkMode === "true" ? "thema-profile-container" : ""}`}
                id="profile-info"
            >
                <div className={`profile-section ${darkMode === "true" ? "thema-profile-section" : ""}`}>
                    <span className={`profile-title ${darkMode === "true" ? "thema-profile-title" : ""}`}>
                        {content.profile}
                    </span>

                    <div
                        id="infos"
                        className={`profile-divider ${darkMode === "true" ? "thema-profile-divider" : ""}`}
                    >
                        <div className={`profile-section-titles ${darkMode === "true" ? "thema-profile-section-titles" : ""}`}>
                            <p>{content.aboutSection.bdaytitle}</p>
                            <p>{content.aboutSection.cityTitle}</p>
                            <p>{content.aboutSection.educationTitle}</p>
                            <p>&nbsp;</p>
                            <p>{content.aboutSection.roleTitle}</p>
                        </div>
                        <div className={`profile-section-info ${darkMode === "true" ? "thema-profile-section-info" : ""}`}>
                            <p>{content.aboutSection.bday}</p>
                            <p>{content.aboutSection.city}</p>
                            <p>{content.aboutSection.education.uni}</p>
                            <p>{content.aboutSection.role}</p>

                        </div>
                    </div>
                </div>
                <div className={`about-section ${darkMode === "true" ? "thema-about-section" : ""}`}>
                    <span className={`about-section-header ${darkMode === "true" ? "thema-about-section-header" : ""}`}>
                        {content.aboutSection.section}
                    </span>

                    <div className={`about-section-info ${darkMode === "true" ? "thema-about-section-info" : ""}`}>
                        {content.aboutSection.aboutMe.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;

