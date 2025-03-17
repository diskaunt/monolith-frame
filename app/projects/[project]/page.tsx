import { getProject, getProjects } from "@/data-access/projects";
import Nav from "../../components/Navbar/Nav";
import Project from "../../components/Projects/Project/Project";

const Page = async ({ params }: { params: Promise<{ project: string }> }) => {
  const projectURL = (await params).project;
  const project = await getProject(projectURL);
  const projects = await getProjects();

  return (
    <div className="">
      <div className="white-theme fixed left-[80px] top-[20px] z-20">
        <Nav projects={projects} />
      </div>
      <Project project={project} />
    </div>
  );
};

export default Page;
