import Hero from './Hero'
import Projects from './Projects'
import About from './About'
import CallToAction from './CallToAction'
import Footer from './Footer'
import ThemeToggle from './ThemeToggle'
import './App.css'

function App() {
  return (
    <>
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
