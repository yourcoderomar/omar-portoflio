import { BitmojiFigure } from './Hero'
import './CallToAction.css'

function CallToAction() {
  return (
    <section className="cta">
      <div className="cta-card">
        <BitmojiFigure />
        <div className="cta-content">
          <h2 className="cta-title">Let's work together</h2>
          <p className="cta-text">
            Have a project in mind or just want to say hi? I'm always open to
            new work and good problems.
          </p>
          <a
            className="cta-button"
            href="https://wa.me/omarmostafaa7"
            target="_blank"
            rel="noreferrer"
          >
            Say Hello
          </a>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
