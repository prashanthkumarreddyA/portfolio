import React from "react";
import { BsAwardFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

import girl from "../../../images/girl.png";
import hand from "../../../images/hand.png";


import "./style.scss";

const IntroContent = () => {
    return (
        <div className="intro-content">
            <div className="layout">
                <div className="left-col">
                    <h1 className="title">
                        <span className="small-text">
                            <span className="text">Hello</span>
                            <span className="icon">
                                <img src={hand} alt="" />
                            </span>
                            <span className="text">, I Am</span>
                        </span>
                        <span className="big-text">Prashanth Kumar Reddy Addula</span>
                    </h1>
                    <p className="title">
                    Full Stack Development Trainee | CCBPian | Frontend Developer | React JS | Express JS | Node JS | JavaScript | HTML | CSS | Bootstrap | Python | SQL |
                    </p>
                    
                </div>
                <div className="right-col">
                    <img
                        src={girl}
                        alt="Hello I am Keniya Andrew"
                    />

                    <div className="highlights horizontal">
                        <div className="icon">
                            <BsAwardFill />
                        </div>
                        <div className="text">Best Student Award</div>
                    </div>

                    <div className="highlights verticle">
                        <div className="icon">
                            <FaUser />
                        </div>
                        <div className="text">
                            <span>Coder</span>
                            Best Coder Award
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroContent;