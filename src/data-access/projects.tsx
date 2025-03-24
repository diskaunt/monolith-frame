import projects from "./projects.json";

interface ProjectType {
  id: string;
  name: string;
  src: string;
  descr?: string;
  nav: boolean;
  card?: {
    adress: string;
    price: string;
    DueDate: string;
    information: string;
  };
}

export async function getProject(projectId: string) {
  return projects.find(
    (project: ProjectType) => project.id === projectId
  );
}

export async function getProjects() {
  return projects as Array<ProjectType>;
}

export type { ProjectType };
