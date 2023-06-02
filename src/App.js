import React from "react";

import Intro from "./components/intro";
import Skills from "./components/skills";




import "./app.scss";
import Protfolio from "./components/portfolio";
import Contact from "./components/contact";
import Footer from "./components/footer";


const App = () => {
    return (
        <div>
            <Intro />
            <Skills />
            <Protfolio/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default App;