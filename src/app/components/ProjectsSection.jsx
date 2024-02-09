"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Caesar cipher",
    description:
      "Program to encrypt text messages with the Caesar cipher method made with Vanilla JavaScript, HTML and CSS.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Data Lovers",
    description:
      "Data lover is a project done in the bootcamp of Laboratoria, the idea of the project is to visualize a set of data that adapts to what a user needs. It is made with vanilla JavaScript, HTML and CSS.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Social Network",
    description: "A social app made with Firebase and vanilla Javascript.",
    image: "/images/projects/3.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "MD Links",
    description:
      "This library was designed to read files with extension -.md- (markdown) and extract all links, within the directory path provided by the user. In order that the user can visualize which link is still up or which ones are down. In this project I made use of two libraries which are chalk and fetch.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Template landing page - PUFI",
    description:
      "A landing page created from scratch, made with React JS and Boostrap.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "VTEX Homecenter template",
    description:
      "An e-commerce page created with VTEX IO, based on Homecenter.",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Add to Cart Info",
    description:
      "This component will display additional information when the user add a new item to the shopping list, made with React and Typescript.",
    image: "/images/projects/7.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Bullets Diagramation",
    description:
      "Component that allows the creation of bullets that target different categories, made with React and Typescript.",
    image: "/images/projects/8.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "WhatsApp Button",
    description:
      "This component allows you to display a button that takes the user to a help chat in WhatsApp.",
    image: "/images/projects/9.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
  project.tag.includes(tag)
  );

  return (
    <>
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
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
