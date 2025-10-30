import { getProject, getProjects } from "@/data-access/projects";
import Nav from "../../../src/components/navbar/Nav";
import Project from "../../../src/components/projects/project/Project";

// Добавляем функцию generateStaticParams
export async function generateStaticParams() {
  // Получаем список всех проектов
  const projects = await getProjects();

  // Возвращаем массив объектов с путями для динамических маршрутов
  return projects.map((project) => ({
    project: project.id, // Замените `id` на поле с уникальным идентификатором
  }));
}

type ProjectPageProps = {
  params: Promise<{ project: string }>;
};

const ProjectPage = async ({ params }: ProjectPageProps) => {
  const { project } = await params;
  const projectItem = await getProject(project);
  const projects = await getProjects();

  return (
    <div className="w-full">
      <div className="white-theme fixed left-[80px] top-[20px] z-20">
        <Nav projects={projects} />
      </div>
      {projectItem && <Project project={projectItem} />}
    </div>
  );
};

export default ProjectPage;
