const About = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div 
        className="relative h-[50vh] flex items-center justify-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl md:text-6xl font-serif mb-6 text-white font-bold">About Us</h1>
          <p className="text-xl text-white">
            Discovering our roots, preserving our future
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif mb-6 text-center">Our Mission</h2>
          <p className="text-lg mb-8 text-gray-700">
            At Ancient Ancestral Origins, our mission is to preserve humanity's diverse 
            cultural heritage and empower individuals to connect with their roots. We believe 
            that by honoring ancient wisdom and supporting communities in rediscovering their 
            ancestral traditions, we can build a more connected and culturally aware world.
          </p>
        </div>
      </div>

      {/* Vision Section */}
      <div className="py-16 px-4 bg-stone-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif mb-6 text-center">Our Vision</h2>
          <p className="text-lg mb-8 text-gray-700">
            We envision a world where every individual feels connected to their cultural 
            heritage and uses this understanding to foster global unity and respect. Our 
            work aims to bridge the gap between ancient wisdom and modern life, creating 
            meaningful connections across generations and cultures.
          </p>
        </div>
      </div>

      {/* Purpose Section */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif mb-6 text-center">Our Purpose</h2>
          <p className="text-lg mb-8 text-gray-700">
            Our purpose is to educate, inspire, and provide resources for rediscovering 
            ancestral wisdom and traditions. Through research, community outreach, and 
            educational programs, we work tirelessly to ensure that ancient knowledge 
            and practices are preserved and shared with future generations.
          </p>
        </div>
      </div>

      {/* Impact Section */}
      <div className="py-16 px-4 bg-stone-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif mb-8 text-center">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Cultural Preservation</h3>
              <p className="text-gray-700">
                Documenting and protecting traditional practices, rituals, and knowledge 
                systems for future generations.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Community Engagement</h3>
              <p className="text-gray-700">
                Building bridges between communities and their ancestral heritage through 
                educational programs and cultural events.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Research & Documentation</h3>
              <p className="text-gray-700">
                Conducting and supporting research to deepen our understanding of ancient 
                traditions and their relevance today.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
