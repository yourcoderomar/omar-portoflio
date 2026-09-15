import { useState } from 'react'
import Hero from './Hero'
import Projects from './Projects'
import About from './About'
import CallToAction from './CallToAction'
import Footer from './Footer'
import ThemeToggle from './ThemeToggle'
import Loader from './Loader'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {loading && <Loader onDone={() => setLoading(false)} />}
      <ThemeToggle />
      <Hero />
      <Projects />
      <About />
      <CallToAction />
      <Footer />
    </>
  )
}

export default App
