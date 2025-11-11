import React from 'react';
import { getProjects } from '@/data-access/projects';
import Projects from '../../components/projects/Projects';
import Nav from '../../components/navbar/Nav';

const ProjectsPage = async () => {
  const projects = await getProjects();
  return (
    <section className="relative">
      {/* <div className="white-theme black-theme fixed left-[80px] top-[20px] z-20">
        <Nav projects={projects} />
      </div> */}
      <Projects projects={projects} />
    </section>
  );
};

export default ProjectsPage;
