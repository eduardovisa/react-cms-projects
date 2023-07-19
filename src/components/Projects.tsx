import { useFetchProjects } from '../fetchProjects';

const Projects = () => {
  const { loading, projects } = useFetchProjects();
  // console.log(loading, projects);

  if (loading) {
    return (
      <section className="projects">
        <h2>Cargando...</h2>
      </section>
    );
  }

  return (
    <section className="projects">
      <div className="title">
        <h2>proyectos</h2>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        <ul class="cards">
          {projects.map((project) => {
            const { id, title, urlCode, urlDemo, img } = project;

            return (
              <a
                key={`card-${id}`}
                href={urlCode}
                target="_blank"
                rel="noreferrer"
                className="project"
              >
                <img src={img.fields.file.url} alt="" />
                <h5>{title}</h5>
              </a>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
export default Projects;
