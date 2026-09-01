import './Projects.css'

const projects = [
  {
    name: 'RM bmu ',
    description: 'A provider of certified European BMU systems, elevators, and facade maintenance solutions in Egypt.',
    image: '/imgs/bmu.jpg',
  },
  {
    name: 'Alemni',
    description: 'A short description of what this project was and the impact it had.',
    image: '/imgs/alemni.jpg',
  },
  {
    name: 'Back2Home',
    description: 'A short description of what this project was and the impact it had.',
    image: '/imgs/back2home.jpg',
  },
]

function Projects() {
  return (
    <section className="projects">
      <div className="projects-inner">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.name}>
              <div className="project-card-thumb">
                {project.image && (
                  <img
                    className="project-card-img"
                    src={project.image}
                    alt={project.name}
                  />
                )}
              </div>
              <h3 className="project-card-name">{project.name}</h3>
              <p className="project-card-desc">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
