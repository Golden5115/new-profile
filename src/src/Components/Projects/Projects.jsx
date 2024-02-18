import ProjectsCard from "./ProjectsCard";
import { projects } from "../../Data";

const Projects = () => {
  return (
    <section className=" project py-20 align-element px-[15%]" id="projects">
      <h2 className="text-3xl font-medium tracking-wider capitalize">
        Projects
      </h2>
      <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => {
          return <ProjectsCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};
export default Projects;
