"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion"; 

const projectsData = [
  {
    id: 1,
    title: "Caesar cipher",
    description:
      "Program to encrypt text messages with the Caesar cipher method made with Vanilla JavaScript, HTML and CSS.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/KDBaron426/BOG004-cipher",
    previewUrl: "https://kdbaron426.github.io/BOG004-cipher/index.html",
  },
  {
    id: 2,
    title: "Data Lovers",
    description:
      "Data lover is a project done in the bootcamp of Laboratoria, the idea of the project is to visualize a set of data that adapts to what a user needs. It is made with vanilla JavaScript, HTML and CSS.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/KDBaron426/BOG004-data-lovers",
    previewUrl: "https://kdbaron426.github.io/BOG004-data-lovers/src/index",
  },
  {
    id: 3,
    title: "Social Network",
    description: "A social app made with Firebase and vanilla Javascript.",
    image: "/images/projects/3.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/KDBaron426/BOG004-social-network",
    previewUrl: "https://kdbaron426.github.io/BOG004-social-network/src/index#/",
  },
  {
    id: 4,
    title: "MD Links",
    description:
      "This library was designed to read files with extension -.md- (markdown) and extract all links, within the directory path provided by the user. In order that the user can visualize which link is still up or which ones are down. In this project I made use of two libraries which are chalk and fetch.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/KDBaron426/BOG004-md-links",
    previewUrl: "https://www.npmjs.com/package/md-links-kdbaron",
  },
  {
    id: 5,
    title: "Template landing page - PUFI",
    description:
      "A landing page created from scratch, made with React JS and Boostrap.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/KDBaron426/Pufi-store",
    previewUrl: "https://pufi-itglobers.netlify.app/",
  },
  {
    id: 6,
    title: "VTEX Homecenter template",
    description:
      "An e-commerce page created with VTEX IO, based on Homecenter. To view this repository you need to have a workspace in VTEX IO",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/KDBaron426/VTEXHomecenter",
    previewUrl: "https://github.com/KDBaron426/VTEXHomecenter",
  },
  {
    id: 7,
    title: "VTEX Add to Cart Info",
    description:
      "This component will display additional information when the user add a new item to the shopping list, made with React and Typescript. To view this repository you need to have a workspace in VTEX IO",
    image: "/images/projects/7.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/KDBaron426/itgloberspartnercl-add-to-cart-info",
    previewUrl: "https://github.com/KDBaron426/itgloberspartnercl-add-to-cart-info",
  },
  {
    id: 8,
    title: "VTEX Bullets Diagramation",
    description:
      "Component that allows the creation of bullets that target different categories, made with React and Typescript. To view this repository you need to have a workspace in VTEX IO",
    image: "/images/projects/8.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/KDBaron426/itgloberspartnerc-bullets-diagramation",
    previewUrl: "https://github.com/KDBaron426/itgloberspartnerc-bullets-diagramation",
  },
  {
    id: 9,
    title: "VTEX WhatsApp Button",
    description:
      "This component allows you to display a button that takes the user to a help chat in WhatsApp. To view this repository you need to have a workspace in VTEX IO",
    image: "/images/projects/9.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/KDBaron426/itgloberspartnerc-WhastApp-btn",
    previewUrl: "https://github.com/KDBaron426/itgloberspartnerc-WhastApp-btn",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
