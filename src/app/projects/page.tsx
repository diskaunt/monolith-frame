import React from 'react';
import { getProjects } from '@/data-access/projects';
import Projects from '../../components/projects/Projects';
import Nav from '../../components/navbar/Nav';

const ProjectsPage = async () => {
  const projects = await getProjects();
  return (
    <>
      <Nav projects={projects} />
      <Projects projects={projects} />
    </>
  );
};

export default ProjectsPage;
