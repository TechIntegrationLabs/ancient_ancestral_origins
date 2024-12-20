import { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Donate from './components/Donate'
import GetInvolved from './components/GetInvolved'
import Contact from './components/Contact'
import ScrollIndicator from './components/ScrollIndicator'
import Footer from './components/Footer'
import './index.css'

function App() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeSection, setActiveSection] = useState(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let isScrolling = false
    let startX = 0
    let scrollLeft = 0

    const updateActiveSection = () => {
      if (!container) return
      const sectionWidth = container.clientWidth
      const currentSection = Math.round(container.scrollLeft / sectionWidth)
      setActiveSection(currentSection)
    }

    const handleWheel = (e: WheelEvent) => {
      if (window.innerWidth >= 768) {
        e.preventDefault()
        
        if (!isScrolling) {
          const container = containerRef.current
          if (!container) return

          isScrolling = true
          const sectionWidth = container.clientWidth
          const currentSection = Math.round(container.scrollLeft / sectionWidth)
          const direction = e.deltaY > 0 ? 1 : -1
          const targetSection = Math.max(0, Math.min(currentSection + direction, sections.length - 1))
          
          container.scrollTo({
            left: targetSection * sectionWidth,
            behavior: 'smooth'
          })

          setTimeout(() => {
            isScrolling = false
            updateActiveSection()
          }, 1000)
        }
      }
    }

    const handleScroll = () => {
      if (!isScrolling) {
        updateActiveSection()
      }
    }

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].pageX - container.offsetLeft
      scrollLeft = container.scrollLeft
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (!startX) return
      e.preventDefault()
      const x = e.touches[0].pageX - container.offsetLeft
      const walk = (x - startX) * 2
      container.scrollLeft = scrollLeft - walk
    }

    const handleTouchEnd = () => {
      startX = 0
      updateActiveSection()
    }

    container.addEventListener('wheel', handleWheel, { passive: false })
    container.addEventListener('scroll', handleScroll)
    container.addEventListener('touchstart', handleTouchStart)
    container.addEventListener('touchmove', handleTouchMove)
    container.addEventListener('touchend', handleTouchEnd)

    return () => {
      container.removeEventListener('wheel', handleWheel)
      container.removeEventListener('scroll', handleScroll)
      container.removeEventListener('touchstart', handleTouchStart)
      container.removeEventListener('touchmove', handleTouchMove)
      container.removeEventListener('touchend', handleTouchEnd)
    }
  }, [])

  const sections = [
    { id: 'home', label: 'Home', component: <Home /> },
    { id: 'about', label: 'About', component: <About /> },
    { id: 'donate', label: 'Donate', component: <Donate /> },
    { id: 'get-involved', label: 'Get Involved', component: <GetInvolved /> },
    { id: 'contact', label: 'Contact', component: <Contact /> },
  ]

  const scrollToSection = (index: number) => {
    const container = containerRef.current
    if (!container) return

    const sectionWidth = container.clientWidth
    container.scrollTo({
      left: sectionWidth * index,
      behavior: 'smooth'
    })
  }

  return (
    <div className="h-screen w-screen overflow-hidden">
      <Navbar activeSection={activeSection} sections={sections} onNavigate={scrollToSection} />
      <main
        ref={containerRef}
        className="h-screen w-screen flex overflow-x-scroll snap-x snap-mandatory scroll-smooth md:overflow-x-scroll overflow-y-auto hide-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {sections.map(({ id, component }, index) => (
          <section
            key={id}
            id={id}
            className="h-screen w-screen flex-shrink-0 snap-start snap-always"
            role="region"
            aria-label={sections[index].label}
          >
            {component}
          </section>
        ))}
      </main>
      <ScrollIndicator 
        totalSections={sections.length} 
        onNavigate={scrollToSection}
        containerRef={containerRef}
      />
      <Footer sections={sections} onNavigate={scrollToSection} />
    </div>
  )
}

export default App
