import React, { useState } from "react";

import Section from "../shared/section";
import Filters from "./filters";
import Showcase from "./showcase";

import "./style.scss";

const projectsData = [
    {
        id: 1,
        name: "Healthy Food Restraunt",
        tags: ["web-app", "mobile-app"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-7.jpg"),
        },
        web_link: "https://tryoutfoodmunch.ccbp.tech"
    },
    {
        id: 2,
        name: "Wikipedia Search Application",
        tags: ["web-page","web-app", "mobile-app"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-2.png"),
        },
        web_link:"https://wikipediadecode.ccbp.tech"
    },
    {
        id: 3,
        name: "Todo Website",
        tags: ["web-page","web-app", "mobile-app"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-8.jpg"),
        },
        web_link:"https://sankettodo.ccbp.tech/"
    },
    {
        id: 4,
        name: "Movix App",
        tags: ["web-app", "mobile-app" ,"React"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-1.webp"),
        },
        web_link:"https://movix-app-mocha.vercel.app/"
    },
    {
        id: 5,
        name: "Jobby App",
        tags: ["web-app", "mobile-app" ,"React"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-6.png"),
        },
        web_link:"https://jobbyappweb.ccbp.tech"
    },
    {
        id: 6,
        name: "IPL Dashboard",
        tags: ["React", "web-app", "mobile-app"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-4.jpg"),
        },
        web_link:"https://sanketipl.ccbp.tech/"
    },
    {
        id: 7,
        name: "You Tube Clone",
        tags: ["React", "web-app", "mobile-app"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-3.jpg"),
        },
        web_link:"https://sanket-youtube-clone.netlify.app/"
    },
    {
        id: 8,
        name: "Nxt Watch",
        tags: ["web-app", "mobile-app", "web-page"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-5.webp"),
        },
        web_link:"https://nxtwatchsanket.ccbp.tech/login"
    },
    {
        id: 9,
        name: "Doctors",
        tags: ["web-app", "mobile-app", "web-page","React"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-9.jpg"),
        },
        web_link:"https://kratin-llc.vercel.app/"
    },
];

const Portfolio = () => {
    const [projects, setProjects] = useState(projectsData);
    const [transition, setTransition] = useState(false);

    const filterProjects = (tag) => {
        setTransition("zoomout");

        setTimeout(() => {
            if (tag !== "all") {
                const filteredProjects = projectsData.filter((f) =>
                    f.tags.includes(tag)
                );
                setProjects(filteredProjects);
            } else {
                setProjects(projectsData);
            }
            setTransition("zoomin");
        }, 200);

        setTimeout(() => {
            setTransition(false);
        }, 600);
    };

    return (
        <Section
            id="portfolio"
            title="Check My Portfolio"
            background="light"
        >
            <div className="portfolio-content-wrapper">
                <Filters filterProjects={(tag) => filterProjects(tag)} />
                <Showcase
                    data={projects}
                    transition={transition}
                />
            </div>
        </Section>
    );
};

export default Portfolio;