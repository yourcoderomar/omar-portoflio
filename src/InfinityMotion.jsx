import './InfinityMotion.css'

const places = ['Dahab', 'Fayoum', 'Ain El Sokhna', 'Red Sea', 'Western Desert']

function InfinityMotion() {
  // two copies so the band can loop seamlessly at -50%
  const band = [...places, ...places]

  return (
    <div
      className="motion-card iv"
      role="img"
      aria-label="Infinity Travel animated preview: trip photos from a snorkel day and a desert dune day land like prints, under the line Travel together, feel the vibe"
    >
      <div className="iv-copy">
        <img className="iv-logo" src="/imgs/infinity-logo.webp" alt="" decoding="async" />
        <h4 className="iv-head">
          {['Travel', 'together,', 'feel the vibe.'].map((line, i) => (
            <span className="iv-line" key={line}>
              <span style={{ animationDelay: `${i * 0.16}s` }}>{line}</span>
            </span>
          ))}
        </h4>
        <p className="iv-sub">Group trips out of Cairo.</p>
      </div>

      <figure className="iv-print iv-print--sea">
        <div className="iv-photo">
          <img src="/imgs/infinity-sea.webp" alt="" loading="lazy" decoding="async" />
        </div>
        <figcaption>Red Sea · snorkel day</figcaption>
      </figure>

      <figure className="iv-print iv-print--desert">
        <div className="iv-photo">
          <img src="/imgs/infinity-desert.webp" alt="" loading="lazy" decoding="async" />
        </div>
        <figcaption>Western Desert · dune day</figcaption>
        <span className="iv-sticker">Next trip · Dahab</span>
      </figure>

      <div className="iv-band" aria-hidden="true">
        <div className="iv-track">
          {band.map((p, i) => (
            <span key={i}>{p}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default InfinityMotion
