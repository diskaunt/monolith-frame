import { getProject, getProjects } from "@/data-access/projects";
import Nav from "../../components/Navbar/Nav";
import Project from "../../components/Projects/Project/Project";

// Добавляем функцию generateStaticParams
export async function generateStaticParams() {
  // Получаем список всех проектов
  const projects = await getProjects();

  // Возвращаем массив объектов с путями для динамических маршрутов
  return projects.map((project) => ({
    project: project.id, // Замените `id` на поле с уникальным идентификатором
  }));
}

const ProjectPage = async ({ params }: { params: Promise<{ project: string }> }) => {
  const {project} = await params;
  const projectItem = await getProject(project);
  const projects = await getProjects();

  return (
    <div className="">
      <div className="white-theme fixed left-[80px] top-[20px] z-20">
        <Nav projects={projects} />
      </div>
      {projectItem && <Project project={projectItem} />}
    </div>
  );
};

export default ProjectPage;
