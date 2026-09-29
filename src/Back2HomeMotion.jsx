import './Back2HomeMotion.css'

const ROUTE = 'M10 96 C 60 96, 78 34, 136 52 S 226 94, 290 18'

function Back2HomeMotion() {
  return (
    <div
      className="motion-card b2h"
      role="img"
      aria-label="Back2Home animated preview: a route from where a missing person was last seen to their home draws itself, and the case status changes from Searching to Found"
    >
      <div className="b2h-photo">
        <img src="/imgs/back2home.webp" alt="" loading="lazy" decoding="async" />
        <p className="b2h-caption">Field team · Al-Muski market · 14:32</p>
      </div>

      <div className="b2h-side">
        <div className="b2h-top">
          <span className="b2h-mark">Back2Home</span>
          <span className="b2h-case">Case 0417</span>
        </div>

        <div>
          <h4 className="b2h-head">
            {['We never', 'stop caring.'].map((line, i) => (
              <span className="b2h-line" key={line}>
                <span style={{ animationDelay: `${i * 0.18}s` }}>{line}</span>
              </span>
            ))}
          </h4>
          <p className="b2h-sub">
            A reporting network that reunites missing people with their families across Egypt.
          </p>
        </div>

        <div className="b2h-route">
          <svg viewBox="0 0 300 110">
            <path className="b2h-route-ghost" d={ROUTE} />
            <path className="b2h-route-line" d={ROUTE} pathLength="1" />
            <circle className="b2h-dot" cx="10" cy="96" r="3.5" />
            <circle className="b2h-home-ring" cx="290" cy="18" r="9" />
            <circle className="b2h-home" cx="290" cy="18" r="4" />
          </svg>
          <div className="b2h-points">
            <span>
              <em>Last seen</em>30.0507° N, 31.2579° E
            </span>
            <span>
              <em>Home</em>30.0731° N, 31.2446° E
            </span>
          </div>
        </div>

        <div className="b2h-status">
          <span className="b2h-state b2h-state--search">
            <i /> Searching
          </span>
          <span className="b2h-state b2h-state--found">
            <i /> Found<span className="b2h-detail"> · reunited after 3d 7h</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Back2HomeMotion
