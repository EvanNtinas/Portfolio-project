import ProjectCards from "../components/ProjectCards";
import projectData from "../components/ProjectData";

const Projects = () => {
  return (
    <section className='min-h-screen min-w-screen flex flex-col justify-start items-center p-5 text-center'>
      <h2 className='text-6xl font-bold mb-4 text-center text-teal-700 '>
        Projects
      </h2>
      <div className='flex flex-row flex-wrap'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {projectData.map((project, index) => (
            <div key={index}>
              {/* m-4 h-max bg-transparent rounded-lg object-fill */}
              <ProjectCards
                image={project.image}
                title={project.title}
                description={project.description}
                linkText={project.linkText}
                linkUrl={project.linkUrl}
                // liveText={project.liveText}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
