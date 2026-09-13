import { useEffect, useRef, useState } from 'react'
import './CallToAction.css'

const incoming = [
  'Hey 👋 got a sec?',
  "I have this big project idea, wanna hear it? 🚀",
]
const reply = "Say less, let's make it happen 🔥"

const incomingDelays = incoming.map((_, i) => 0.3 + i * 1.1)
const typingDelay = incomingDelays[incomingDelays.length - 1] + 1.1
const replyDelay = typingDelay + 1.4

function CallToAction() {
  const [draft, setDraft] = useState('')
  const [inView, setInView] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleSend = (e) => {
    e.preventDefault()
    const text = draft.trim()
    if (!text) return
    window.open(
      `https://wa.me/omarmostafaa7?text=${encodeURIComponent(text)}`,
      '_blank',
      'noreferrer',
    )
    setDraft('')
  }

  return (
    <section className={`cta${inView ? ' cta-in-view' : ''}`} ref={sectionRef}>
      <div className="cta-card">
        <div className="cta-content">
          <h2 className="cta-title">Let's work together.</h2>

          <div className="imessage-thread">
            {incoming.map((text, i) => (
              <span
                className="imessage-bubble imessage-me"
                key={text}
                style={{ '--delay': `${incomingDelays[i]}s` }}
              >
                {text}
              </span>
            ))}
            <span
              className="imessage-bubble imessage-them imessage-typing"
              style={{ '--delay': `${typingDelay}s` }}
            >
              <i />
              <i />
              <i />
            </span>
            <span
              className="imessage-bubble imessage-them"
              style={{ '--delay': `${replyDelay}s` }}
            >
              {reply}
            </span>
          </div>

          <form className="imessage-composer" onSubmit={handleSend}>
            <input
              className="imessage-input"
              type="text"
              placeholder="Slide into Omar's DMs..."
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
            />
            <button
              className="imessage-send"
              type="submit"
              aria-label="Send on WhatsApp"
              disabled={!draft.trim()}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19V5M5 12l7-7 7 7" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
