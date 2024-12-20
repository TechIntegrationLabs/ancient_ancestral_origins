import { ChevronDown } from 'lucide-react'

const Home = () => {
  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dvcvxhzmt/image/upload/v1734730064/wjw6821_Hero_Image_A_powerful_symbolic_landscape_that_hints_at__0f798eee-71d7-4f0b-8deb-2625788cdae6_qmmctp.png')`
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        
        <div className="relative flex flex-col items-center justify-center h-full text-white text-center px-4">
          <div className="space-y-8 max-w-4xl">
            <h1 className="font-dancing text-6xl md:text-7xl tracking-wider font-bold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
              Honoring the Past, Inspiring the Future
            </h1>
            <p className="font-lora text-xl md:text-2xl max-w-2xl mx-auto">
              Join us in celebrating and preserving humanity's shared heritage
            </p>
            <div className="pt-4">
              <a href="#donate" className="font-poppins bg-brand-gold hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg transition-colors inline-block text-lg">
                Donate Now
              </a>
            </div>
          </div>

          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
            <ChevronDown size={40} className="text-white scroll-arrow" />
          </div>
        </div>
      </div>

      {/* About Preview Section */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-brand-brown mb-6">Our Mission</h2>
          <p className="text-xl font-lora text-brand-gray-dark leading-relaxed mb-8">
            Our mission is to honor ancient wisdom, preserve cultural heritage, and support communities 
            in rediscovering their ancestral roots.
          </p>
          <a href="#about" className="font-poppins inline-block bg-stone-800 hover:bg-stone-900 text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg">
            Learn More
          </a>
        </div>
      </div>

      {/* Donate Preview Section */}
      <div className="py-20 px-4 bg-stone-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-brand-brown mb-6">Your Support Matters</h2>
          <p className="text-xl font-lora text-brand-gray-dark leading-relaxed mb-8">
            Every contribution helps us preserve our shared history for future generations.
          </p>
          <a href="#donate" className="font-poppins inline-block bg-brand-gold hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg">
            Make a Donation
          </a>
        </div>
      </div>

      {/* Quote Section */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="font-caveat text-2xl text-brand-red italic">
            "In honoring our ancestors, we light the path for future generations."
          </blockquote>
        </div>
      </div>

      {/* Social Links */}
      <div className="social-links">
        <a href="#" aria-label="Twitter">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5 0-.278-.028-.556-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a href="#" aria-label="Facebook">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a href="#" aria-label="Instagram">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          </svg>
        </a>
        <a href="#" aria-label="YouTube">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
          </svg>
        </a>
      </div>
    </div>
  )
}

export default Home
