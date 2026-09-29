import { useEffect, useRef } from 'react'
import './Projects.css'
import Back2HomeMotion from './Back2HomeMotion'
import AlemniMotion from './AlemniMotion'
import RmBmuMotion from './RmBmuMotion'

const projects = [
  {
    name: 'RM bmu ',
    description: 'A provider of certified European BMU systems, elevators, and facade maintenance solutions in Egypt.',
    Motion: RmBmuMotion,
    url: 'https://www.rm-bmu.com/en',
  },
  {
    name: 'Alemni',
    description: 'Alemni helps independent instructors run programs like a pro—without juggling spreadsheets, calendar apps, and endless DMs. Plan your week, enroll students, and keep everyone aligned from one clean workflow',
    Motion: AlemniMotion,
    url: 'https://edusync-v1.vercel.app/',
  },
  {
    name: 'Back2Home',
    description: 'Back2Home is a dedicated platform created by graduating students to address the critical issue of missing persons.',
    Motion: Back2HomeMotion,
    url: 'https://back-to-home.vercel.app/',
  },
]

function Projects() {
  const gridRef = useRef(null)

  // motion thumbnails only animate while on screen (paused via CSS otherwise)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => e.target.toggleAttribute('data-inview', e.isIntersecting))
    })
    gridRef.current.querySelectorAll('.project-card-thumb').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="projects">
      <div className="projects-inner">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-grid" ref={gridRef}>
          {projects.map((project) => (
            <a
              className="project-card"
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noreferrer"
            >
              <div className="project-card-thumb">
                <project.Motion />
              </div>
              <h3 className="project-card-name">{project.name}</h3>
              <p className="project-card-desc">{project.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
