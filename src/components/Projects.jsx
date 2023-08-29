import React from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section>
      <SectionHeading>Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
