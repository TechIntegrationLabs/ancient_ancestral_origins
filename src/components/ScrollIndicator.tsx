import { useState, useEffect, RefObject } from 'react'

interface ScrollIndicatorProps {
  totalSections: number
  onNavigate: (index: number) => void
  containerRef: RefObject<HTMLDivElement>
}

const ScrollIndicator = ({ totalSections, onNavigate, containerRef }: ScrollIndicatorProps) => {
  const [activeSection, setActiveSection] = useState(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const scrollPosition = container.scrollLeft
      const sectionWidth = container.clientWidth
      const newActiveSection = Math.round(scrollPosition / sectionWidth)
      setActiveSection(newActiveSection)
    }

    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
  }, [containerRef])

  return (
    <div className="fixed bottom-24 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex space-x-4 bg-black bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-3">
        {Array.from({ length: totalSections }).map((_, index) => (
          <button
            key={index}
            onClick={() => onNavigate(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeSection
                ? 'bg-white w-6'
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default ScrollIndicator
