import { getLoaded } from "@/data-access/loaded";
import Main from "./components/Main/Main";
import React from "react";
import { getProjects } from "@/data-access/projects";

const MonolithFrame = async () => {
  let loaded = await getLoaded();
  let projects = await getProjects();
  return (
    <>
      <Main projects={projects} loaded={loaded} />
    </>
  );
};

export default MonolithFrame;
