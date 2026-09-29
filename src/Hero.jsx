import { useEffect, useState } from 'react'
import './Hero.css'

const cairoTime = () =>
  new Intl.DateTimeFormat('en-US', { timeZone: 'Africa/Cairo', hour: 'numeric', minute: '2-digit', hour12: true }).format(new Date())

function LocalTime() {
  const [time, setTime] = useState(cairoTime)

  useEffect(() => {
    const id = setInterval(() => setTime(cairoTime()), 10000)
    return () => clearInterval(id)
  }, [])

  return (
    <p className="hero-time">
      Egypt, Cairo · <time>{time}</time>
    </p>
  )
}

const experience = [
  {
    company: 'BDC',
    logo: '/imgs/bdc-logo.webp',
    invertLogo: true,
    role: 'Full Stack Developer',
    years: 'Mar 2026-Present',
    description:
      'Built and deployed full-stack web apps end to end, from frontend and backend to APIs and databases. Also built web-scraping pipelines and automation workflows that turned raw data into interactive dashboards and business-focused software.',
  },
  {
    company: 'H properties',
    logo: '/imgs/h-properties-logo.png',
    role: 'Content Creator',
    years: 'Aug 2024-Jan 2026 ',
    description:
      'Developed content strategies and marketing campaigns for real estate listings, creating social media content, blog posts, and visual materials in Canva to showcase properties and grow visibility.',
  },
  {
    company: 'Fugro',
    logo: '/imgs/fugro-logo-black.png',
    role: 'Data Analyst Trainee',
    years: ' July 2024-Aug 2024 ',
    description:
      'Analyzed datasets using Python to uncover trends and insights, built data visualizations to communicate findings, and supported data transformation for reporting and decision-making.',
  },
]

export function BitmojiFigure() {
  return (
    <div className="hero-figure-wrap">
      <img
        className="hero-figure"
        src="/imgs/character-rm.png"
        alt="Omar's Bitmoji waving, holding a coffee"
      />
      <span className="hero-steam" aria-hidden="true" />
      <span className="hero-steam" aria-hidden="true" />
    </div>
  )
}

function Hero() {
  return (
    <section className="hero">
      <LocalTime />
      <div className="hero-inner">
        <p className="hero-name">
          <span className="hero-status" title="Available for work">
            <span className="visually-hidden">Available for work</span>
          </span>
          Omar Mostafa
        </p>

        <BitmojiFigure />

        <h1 className="hero-headline">
          I build websites, apps &amp; tools that solve real world
          problems.
        </h1>

        <div className="hero-cards">
          {experience.map((job) => (
            <div className="hero-card" key={job.company}>
              <div className="hero-card-top">
                <span className="hero-card-logo">
                  {job.logo ? (
                    <img
                      className={`hero-card-logo-img${job.invertLogo ? ' hero-card-logo-img-invert' : ''}`}
                      src={job.logo}
                      alt={`${job.company} logo`}
                    />
                  ) : (
                    <span className="hero-card-icon">{job.icon}</span>
                  )}
                  {job.company}
                </span>
              </div>
              <div className="hero-card-role">
                <span>{job.role}</span>
                <span className="hero-card-years">{job.years}</span>
              </div>
              <p className="hero-card-desc">{job.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
