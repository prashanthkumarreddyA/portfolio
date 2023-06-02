import React from "react";
import {
    FaYoutube,
    FaGithub,
    FaLinkedinIn,
   
    FaInstagram,
} from "react-icons/fa";

import Section from "../shared/section";

import SocialIcon from "./social-icon";
import { scrollToSection } from "../utils/helpers";

import "./style.scss";

const Footer = () => {
    return (
        <Section
            background="dark"
            className="footer"
        >
            <div className="footer-content-wrapper">
               <ul className="footer-menu-items">
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("skills")}
                    >
                        Skills
                    </li>
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("portfolio")}
                    >
                        Portfolio
                    </li>
                   
                    <li
                        className="footer-menu-item"
                        action={() => {
                            scrollToSection("contact");
                        }}
                    >
                        Contact me
                    </li>
                </ul>
                <div className="social-icons">
                <SocialIcon
                        color="#E84C88"
                        icon={<FaInstagram />}
                        link="https://www.instagram.com/sanket_patil1606/"
                    />
                    <SocialIcon
                        color="#FF0000"
                        icon={<FaYoutube />}
                        link="https://www.youtube.com/"
                    />
                    <SocialIcon
                        color="#0D2636"
                        icon={<FaGithub />}
                        link="https://github.com/sanketudaypatil"
                    />
                    <SocialIcon
                        color="#0A66C2"
                        icon={<FaLinkedinIn />}
                        link="https://www.linkedin.com/in/sanketudaysinhapatil"
                    />
                    
                    
                </div>
                <div className="bottom-bar">
                    <div className="copyright-text">
                        Copyright 2023 Sanket Udaysinha Patil | All Rights Reserved
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Footer;