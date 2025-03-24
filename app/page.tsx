import Main from "./components/Main/Main";
import React from "react";
import { getProjects } from "@/data-access/projects";

const MonolithFramePage = async () => {
  let projects = await getProjects();
	
  return (
    <>
      <Main projects={projects}
			/>
    </>
  );
};

export default MonolithFramePage;
