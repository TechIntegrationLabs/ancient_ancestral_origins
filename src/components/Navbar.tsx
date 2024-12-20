import { useState } from 'react'
import { Link } from 'react-router-dom'

interface Section {
  id: string
  label: string
  component: JSX.Element
}

interface NavbarProps {
  activeSection: number
  sections: Section[]
  onNavigate: (index: number) => void
}

const Navbar = ({ activeSection, sections, onNavigate }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const getLinkStyles = (index: number) => {
    const baseStyles = "text-lg transition-all duration-300"
    const activeStyles = "font-bold text-white"
    const inactiveStyles = "font-normal text-white/70 hover:text-white"
    return `${baseStyles} ${index === activeSection ? activeStyles : inactiveStyles}`
  }

  return (
    <nav className="fixed w-full top-0 z-50 bg-black bg-opacity-20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-white hover:text-gray-200 transition-colors">Ancient Ancestral Origins</Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 hover:bg-white/10"
            >
              <span className="sr-only">Open main menu</span>
              {/* Menu icon */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => onNavigate(index)}
                className={getLinkStyles(index)}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => {
                  onNavigate(index)
                  setIsMenuOpen(false)
                }}
                className={`block w-full text-left px-3 py-2 ${getLinkStyles(index)}`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
