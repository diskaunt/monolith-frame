import React from "react";
import Projects from "../components/Projects/Projects";
import { getProjects } from "@/data-access/projects";
import Nav from "../components/Navbar/Nav";

const ProjectsPage = async () => {
  const projects = await getProjects();
  return (
    <section className="relative">
      <div className="white-theme fixed left-[80px] top-[20px] z-20 black-theme">
        <Nav projects={projects} />
      </div>
      <Projects projects={projects} />
    </section>
  );
};

export default ProjectsPage;
