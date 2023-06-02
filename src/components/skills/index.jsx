import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";

import CallToAction from "../shared/CallToAction";
import TechIcons from "../../images/tech-icons.png";
import Section from "../shared/section";


import "./style.scss";

const Skills = () => {
    return (
        <Section
            background="dark"
            id="skills"
        >
            <div className="skills-content-wrapper">
                <div className="left-col">
                    <img
                        src={TechIcons}
                        alt="JavaScript, React, CSS, HTML, SASS, Photoshop, Figma"
                    />
                </div>
                <div className="right-col">
                    <h2>Skills</h2>
                    <p>
                    Frontend: HTML, CSS, Bootstrap, JavaScript, React.js<br/>
                    Backend: Python, Express, Node.js<br/>
                    Databases: SQLite
                    </p>
                    
                    <CallToAction
                        text="Download CV"
                        icon={<AiOutlineCloudDownload />}
                        // action={() => window.open(Resume)}
                    />
                    
                </div>
            </div>
        </Section>
    );
};

export default Skills;