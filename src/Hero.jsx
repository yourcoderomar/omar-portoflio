import './Hero.css'

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

export function BitmojiFigure({ pose = 'thumbsUp' }) {
  const isWave = pose === 'wave'

  return (
    <svg
      className="hero-figure"
      viewBox="0 0 200 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="100" cy="308" rx="60" ry="8" fill="#000" opacity="0.07" />

      {/* legs */}
      <g className="figure-leg-left">
        <path
          d="M78 192L60 242 44 284 63 284 88 242 97 192Z"
          fill="#181818"
          strokeLinejoin="round"
        />
        <rect x="44" y="278" width="19" height="10" rx="4" fill="#0f0f0f" />
        <ellipse cx="48" cy="298" rx="20" ry="11" fill="#f7f6f2" />
        <path d="M30 298a20 8 0 0040 0z" fill="#e3e1da" />
      </g>
      <g className="figure-leg-right">
        <path
          d="M122 192L140 242 156 284 137 284 112 242 103 192Z"
          fill="#181818"
          strokeLinejoin="round"
        />
        <rect x="137" y="278" width="19" height="10" rx="4" fill="#0f0f0f" />
        <ellipse cx="152" cy="298" rx="20" ry="11" fill="#f7f6f2" />
        <path d="M134 298a20 8 0 0040 0z" fill="#e3e1da" />
      </g>

      {/* torso */}
      <rect x="65" y="130" width="70" height="68" rx="20" fill="#181818" />

      {/* arms */}
      {isWave ? (
        <>
          <g className="figure-arm-left">
            <path
              d="M76 144L58 190"
              stroke="#181818"
              strokeWidth="24"
              strokeLinecap="round"
            />
            <circle cx="56" cy="194" r="13" fill="#f0c39a" />
          </g>
          <g className="figure-arm-right">
            <path
              d="M124 144L150 90"
              stroke="#181818"
              strokeWidth="24"
              strokeLinecap="round"
            />
            <circle cx="153" cy="82" r="14" fill="#f0c39a" />
            <path
              d="M148 58l3 20M158 56l1 22M168 60l-3 20M176 68l-8 18"
              stroke="#f0c39a"
              strokeWidth="9"
              strokeLinecap="round"
            />
          </g>
        </>
      ) : (
        <>
          <g className="figure-arm-left">
            <path
              d="M76 144L42 68"
              stroke="#181818"
              strokeWidth="24"
              strokeLinecap="round"
            />
            <circle cx="41" cy="64" r="13" fill="#f0c39a" />
            <rect x="34" y="38" width="11" height="24" rx="5.5" fill="#f0c39a" />
          </g>
          <g className="figure-arm-right">
            <path
              d="M124 144L158 68"
              stroke="#181818"
              strokeWidth="24"
              strokeLinecap="round"
            />
            <circle cx="159" cy="64" r="13" fill="#f0c39a" />
            <rect x="155" y="38" width="11" height="24" rx="5.5" fill="#f0c39a" />
          </g>
        </>
      )}

      {/* neck */}
      <rect x="90" y="112" width="20" height="22" fill="#f0c39a" />

      {/* head */}
      <circle cx="100" cy="82" r="40" fill="#f0c39a" />

      {/* ears */}
      <circle cx="60" cy="84" r="7" fill="#f0c39a" />
      <circle cx="140" cy="84" r="7" fill="#f0c39a" />

      {/* hair back mass */}
      <path
        d="M58 78c0-26 19-46 42-46s42 20 42 46c0-8-4-13-10-13-2-11-16-19-32-19s-30 8-32 19c-6 0-10 5-10 13z"
        fill="#241c17"
      />

      {/* curls along hairline */}
      <circle cx="63" cy="52" r="10" fill="#241c17" />
      <circle cx="76" cy="40" r="11" fill="#241c17" />
      <circle cx="92" cy="34" r="12" fill="#241c17" />
      <circle cx="109" cy="34" r="11" fill="#241c17" />
      <circle cx="125" cy="40" r="10" fill="#241c17" />
      <circle cx="137" cy="52" r="9" fill="#241c17" />
      <path
        d="M60 58c4-10 12-8 10 2-2 9-13 16-19 12-4-3-1-9 9-14z"
        fill="#241c17"
      />

      {/* eyebrows */}
      <path d="M78 76c5-4 12-4 16-1" stroke="#241c17" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M106 75c4-3 11-3 16 1" stroke="#241c17" strokeWidth="3.5" strokeLinecap="round" />

      {/* eyes */}
      <circle cx="85" cy="87" r="4" fill="#20160f" />
      <circle cx="117" cy="87" r="4" fill="#20160f" />

      {/* smile */}
      <path
        d="M80 100c6 12 34 12 40 0"
        fill="#20160f"
      />
      <path
        d="M86 101c5 6 22 6 27 0"
        fill="#fff"
      />
    </svg>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <p className="hero-name">Omar Mostafa</p>

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
