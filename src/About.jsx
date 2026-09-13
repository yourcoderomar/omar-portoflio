import './About.css'

const skills = [
  'React & Next.js',
  'Node.js & APIs',
  'Responsive interfaces',
  'Backend architecture',
  'TypeScript',
  'Database management',
  'Performance optimization',
  'Automation',
]

function About() {
  return (
    <section className="about">
      <div className="about-inner">
        <h2 className="about-title">About</h2>
        <p className="about-desc">
          I'm a full stack developer with experience building web applications
          focused on performance, scalability, and usability. I specialize in
          creating responsive frontend interfaces, developing reliable backend
          systems, and working across the full product development process
          using modern technologies and clean development practices.
        </p>

        <p className="about-skills-label">Key skills:</p>
        <div className="about-skills">
          {skills.map((skill) => (
            <span className="about-skill-tag" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
