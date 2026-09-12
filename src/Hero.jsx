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

  const skin = '#f2cba8'
  const skinShade = '#e3b48d'
  const hair = '#221a15'
  const top = '#1b1b1b'
  const pants = '#131313'
  const shoe = '#f8f7f3'
  const shoeSole = '#e0ded5'

  return (
    <svg
      className="hero-figure"
      viewBox="0 0 200 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="100" cy="312" rx="64" ry="7" fill="#000" opacity="0.07" />

      {/* hips */}
      <path d="M74 172h52l4 36H70Z" fill={pants} />

      {/* legs — baggy sweatpants, wide stance */}
      <g className="figure-leg-left">
        <path
          d="M78 182C62 216 52 256 46 290L84 292C88 260 92 232 100 210Z"
          fill={pants}
        />
        <path d="M46 284L84 286 84 294 46 292Z" fill="#0b0b0b" />
        <path
          d="M38 296c0-6 6-8 14-8h20c6 0 8 4 8 9 0 6-6 9-16 9H46c-5 0-8-4-8-10z"
          fill={shoe}
        />
        <path
          d="M38 300c0 6 4 8 10 8h20c8 0 12-3 12-8z"
          fill={shoeSole}
        />
      </g>
      <g className="figure-leg-right">
        <path
          d="M122 182C138 216 148 256 154 290L116 292C112 260 108 232 100 210Z"
          fill={pants}
        />
        <path d="M154 284L116 286 116 294 154 292Z" fill="#0b0b0b" />
        <path
          d="M162 296c0-6-6-8-14-8h-20c-6 0-8 4-8 9 0 6 6 9 16 9h18c5 0 8-4 8-10z"
          fill={shoe}
        />
        <path
          d="M162 300c0 6-4 8-10 8h-20c-8 0-12-3-12-8z"
          fill={shoeSole}
        />
      </g>

      {/* neck */}
      <rect x="90" y="102" width="20" height="24" fill={skinShade} />

      {/* torso — loose sweatshirt */}
      <path
        d="M68 133c0-11 10-17 18-18h28c8 1 18 7 18 18l4 53c1 8-4 12-12 12H76c-8 0-13-4-12-12z"
        fill={top}
      />
      <path
        d="M85 115c4 8 26 8 30 0"
        stroke="#2a2a2a"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* arms */}
      {isWave ? (
        <>
          <g className="figure-arm-left">
            <path
              d="M72 140L56 186"
              stroke={top}
              strokeWidth="23"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="54" cy="190" r="12" fill={skin} />
          </g>
          <g className="figure-arm-right">
            <path
              d="M128 140L152 92"
              stroke={top}
              strokeWidth="23"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="155" cy="84" r="13" fill={skin} />
            <path
              d="M149 60l3 20M159 58l1 22M169 62l-3 20M177 70l-8 18"
              stroke={skin}
              strokeWidth="9"
              strokeLinecap="round"
            />
          </g>
        </>
      ) : (
        <>
          <g className="figure-arm-left">
            <path
              d="M72 138L46 176 52 148"
              stroke={top}
              strokeWidth="22"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="50" cy="140" r="12" fill={skin} />
            <rect x="44" y="113" width="11" height="25" rx="5.5" fill={skin} />
          </g>
          <g className="figure-arm-right">
            <path
              d="M128 138L154 176 148 148"
              stroke={top}
              strokeWidth="22"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="150" cy="140" r="12" fill={skin} />
            <rect x="145" y="113" width="11" height="25" rx="5.5" fill={skin} />
          </g>
        </>
      )}

      {/* ears */}
      <circle cx="63" cy="78" r="7.5" fill={skinShade} />
      <circle cx="137" cy="78" r="7.5" fill={skinShade} />

      {/* head */}
      <ellipse cx="100" cy="73" rx="38" ry="42" fill={skin} />

      {/* hair — curly top with faded sides */}
      <path
        d="M62 68c-2-28 16-42 38-42s40 14 38 42c-2-9-7-15-15-17-6-6-13-9-23-9s-18 4-24 10c-8 2-12 7-14 16z"
        fill={hair}
      />
      <circle cx="70" cy="45" r="11" fill={hair} />
      <circle cx="83" cy="35" r="12" fill={hair} />
      <circle cx="99" cy="30" r="13" fill={hair} />
      <circle cx="115" cy="33" r="12" fill={hair} />
      <circle cx="128" cy="43" r="11" fill={hair} />
      <circle cx="136" cy="55" r="9" fill={hair} />
      <circle cx="63" cy="56" r="9" fill={hair} />
      <path
        d="M62 62c3-9 11-7 9 2-2 8-11 14-17 11-4-3-1-8 8-13z"
        fill={hair}
      />
      <path d="M64 66c1 6 2 11 4 15l5-2c-2-4-3-8-3-13z" fill={hair} />
      <path d="M136 66c-1 6-2 11-4 15l-5-2c2-4 3-8 3-13z" fill={hair} />

      {/* eyebrows */}
      <path
        d="M73 64c7-6 17-5 23 1-7-2-16-2-22 3z"
        fill={hair}
      />
      <path
        d="M127 64c-7-6-17-5-23 1 7-2 16-2 22 3z"
        fill={hair}
      />

      {/* eyes */}
      <ellipse cx="85" cy="80" rx="9" ry="10" fill="#fff" />
      <ellipse cx="115" cy="80" rx="9" ry="10" fill="#fff" />
      <circle cx="86" cy="81" r="5.5" fill="#1b120c" />
      <circle cx="114" cy="81" r="5.5" fill="#1b120c" />
      <circle cx="88" cy="78" r="1.8" fill="#fff" />
      <circle cx="116" cy="78" r="1.8" fill="#fff" />

      {/* nose */}
      <path
        d="M97 92c2 2 4 2 6 0"
        stroke={skinShade}
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* open smile */}
      <path
        d="M81 98c8-3 30-3 38 0 0 17-9 26-19 26s-19-9-19-26z"
        fill="#3a1a18"
      />
      <path
        d="M84 99c8-2 24-2 32 0l-1 7c-8 2-22 2-30 0z"
        fill="#fff"
      />
      <ellipse cx="100" cy="118" rx="11" ry="6" fill="#e07a88" />
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
