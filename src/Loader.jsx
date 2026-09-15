import { useEffect, useState } from 'react'
import './Loader.css'

const DURATION = 1800
const EXIT_MS = 600

function Loader({ onDone }) {
  const [count, setCount] = useState(0)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    const start = Date.now()
    const interval = setInterval(() => {
      const progress = Math.min((Date.now() - start) / DURATION, 1)
      const eased = 1 - (1 - progress) ** 3
      setCount(Math.round(eased * 100))
      if (progress >= 1) {
        clearInterval(interval)
        setLeaving(true)
        setTimeout(onDone, EXIT_MS)
      }
    }, 16)

    return () => clearInterval(interval)
  }, [onDone])

  return (
    <div className={`loader${leaving ? ' loader-leaving' : ''}`}>
      <img className="loader-img" src="/imgs/loader.png" alt="" />
      <span className="loader-count">{count}</span>
    </div>
  )
}

export default Loader
