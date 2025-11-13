import Main from '@/components/main/Main';
import React from 'react';
import { getProjects } from '@/data-access/projects';
import Nav from '@/components/navbar/Nav';

const MonolithFramePage = async () => {
  let projects = await getProjects();

  return (
		<>
      <Nav projects={projects} />
      <Main projects={projects} />
    </>
  );
};

export default MonolithFramePage;
