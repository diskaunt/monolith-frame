import React from 'react';
import { getProjects } from '@/data-access/projects';
import Projects from '../components/Projects/Projects';
import Nav from '../components/Navbar/Nav';

const ProjectsPage = async () => {
  const projects = await getProjects();
  return (
    <section className="relative">
      <div className="white-theme black-theme fixed left-[80px] top-[20px] z-20">
        <Nav projects={projects} />
      </div>
      <Projects projects={projects} />
    </section>
  );
};

export default ProjectsPage;
