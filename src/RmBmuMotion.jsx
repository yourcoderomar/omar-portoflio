import './RmBmuMotion.css'

const COLS = 5
const ROWS = 11

function RmBmuMotion() {
  const windows = []
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      windows.push(<rect key={`${r}-${c}`} x={74 + c * 28} y={71 + r * 20} width="20" height="14" />)
    }
  }

  return (
    <div
      className="motion-card rm"
      role="img"
      aria-label="R&M animated preview: an elevation drawing of a tower where a roof-mounted BMU lowers a cleaning cradle down the facade"
    >
      <div className="rm-stage">
        <svg viewBox="0 0 280 312" preserveAspectRatio="xMidYMax meet">
          <defs>
            <pattern id="rm-hatch" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="4" />
            </pattern>
          </defs>

          <path className="rm-stroke" pathLength="1" d="M0 300 H280" />
          <path className="rm-stroke" pathLength="1" d="M70 300 V60 H210 V300" />
          <path className="rm-stroke rm-stroke--late" pathLength="1" d="M64 60 H216" />

          <g className="rm-windows">{windows}</g>

          {/* dirty glass: drops 3-5 untouched, drop 2 clears as the cradle passes */}
          <rect className="rm-dirty" x="126" y="64" width="84" height="232" />
          <rect className="rm-dirty rm-haze" x="98" y="64" width="28" height="232" />

          <g className="rm-dim">
            <path d="M230 60 H240 M235 60 V300 M230 300 H240" />
            <text x="246" y="180" transform="rotate(-90 246 180)">142.6 m</text>
          </g>

          <g className="rm-bmu">
            <rect x="150" y="48" width="44" height="12" />
            <rect x="166" y="20" width="8" height="28" />
            <rect className="rm-jib" x="104" y="14" width="76" height="6" />
            <rect x="176" y="10" width="14" height="12" />
          </g>

          <g className="rm-cables">
            <line x1="100" y1="20" x2="100" y2="64" />
            <line x1="124" y1="20" x2="124" y2="64" />
          </g>

          <g className="rm-cradle">
            <path d="M96 64 V57 H128 V64" />
            <rect x="96" y="64" width="32" height="8" />
          </g>
        </svg>
      </div>

      <div className="rm-side">
        <div className="rm-top">
          <span className="rm-mark">R&amp;M</span>
          <span className="rm-tag">Facade access · Egypt</span>
        </div>

        <div>
          <h4 className="rm-head">
            {['safe,', 'certified,', 'long lasting.'].map((line, i) => (
              <span className="rm-line" key={line}>
                <span style={{ animationDelay: `${i * 0.18}s` }}>{line}</span>
              </span>
            ))}
          </h4>
          <p className="rm-sub">Certified European BMUs, elevators and aerial platforms, serviced for decades.</p>
        </div>

        <div className="rm-readout">
          <div>
            <em>Drop</em>
            <b>03 / 05</b>
          </div>
          <div>
            <em>Depth</em>
            <b className="rm-depth" />
          </div>
          <div>
            <em>Unit</em>
            <b>MARS 2.0</b>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RmBmuMotion
