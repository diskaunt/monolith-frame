import { getProject, getProjects } from '@/data-access/projects';
import Nav from '../../../components/navbar/Nav';
import Project from '../../../components/projects/project/Project';

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
    <>
      <Nav projects={projects} />
      {projectItem && <Project project={projectItem} />}
    </>
  );
};

export default ProjectPage;
