import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import { About } from "./components/sections/About";
import { Contact } from "./components/sections/Contact";
import { Education } from "./components/sections/Education";
import { Experience } from "./components/sections/Experience";
import { Hero } from "./components/sections/Hero";
import { Projects } from "./components/sections/Projects";
import { Skills } from "./components/sections/Skills";

export default function App() {
    return (
        <>
            <a
                href="#main"
                className="sr-only z-[60] rounded-md bg-accent px-4 py-2 font-medium text-accent-ink focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
            >
                Skip to content
            </a>
            <Navbar />
            <main id="main">
                <Hero />
                <About />
                <Experience />
                <Skills />
                <Projects />
                <Education />
                <Contact />
            </main>
            <Footer />
            <ToastContainer
                position="bottom-right"
                theme="dark"
                autoClose={5000}
            />
        </>
    );
}
