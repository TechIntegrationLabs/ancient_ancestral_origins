import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

interface Section {
  id: string
  label: string
  component: JSX.Element
}

interface FooterProps {
  sections: Section[]
  onNavigate: (index: number) => void
}

const Footer = ({ sections, onNavigate }: FooterProps) => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-stone-900 text-white py-12" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-cinzel font-bold mb-4">Ancient Origins</h3>
            <p className="text-brand-gray-light font-opensans text-sm leading-relaxed">
              Preserving humanity's shared heritage while empowering communities to connect with their ancient roots.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-cinzel font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {sections.map(({ id, label }, index) => (
                <li key={id}>
                  <button
                    onClick={() => onNavigate(index)}
                    className="text-brand-gray-light hover:text-white transition-colors font-opensans text-sm"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-cinzel font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-brand-gray-light hover:text-white transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="#" 
                className="text-brand-gray-light hover:text-white transition-colors"
                aria-label="Follow us on Twitter"
              >
                <Twitter size={24} />
              </a>
              <a 
                href="#" 
                className="text-brand-gray-light hover:text-white transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="#" 
                className="text-brand-gray-light hover:text-white transition-colors"
                aria-label="Subscribe to our YouTube channel"
              >
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-brand-gray-light font-opensans text-sm">
            © {currentYear} Ancient Origins. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
