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
  'AI engineering',
]

function About() {
  return (
    <section className="about">
      <div className="about-inner">
        <h2 className="about-title">About</h2>
        <p className="about-desc">
          I'm a Full-Stack and AI Engineer building React/Next.js and
          TypeScript applications with Supabase/PostgreSQL backends,
          authentication, and AI-powered automation workflows. I have a
          background in business information systems and data analytics.
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
