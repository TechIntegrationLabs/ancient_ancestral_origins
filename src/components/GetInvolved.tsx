import { UserPlus, Mail, HandshakeIcon } from 'lucide-react'
import { useState } from 'react'

const GetInvolved = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the newsletter subscription
    setSubscribed(true)
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div 
        className="relative h-[50vh] flex items-center justify-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl md:text-6xl font-serif mb-6 text-white font-bold">Get Involved</h1>
          <p className="text-xl text-white">
            Join us in preserving and celebrating our shared heritage
          </p>
        </div>
      </div>

      {/* Volunteer Section */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif mb-6">Volunteer Opportunities</h2>
            <p className="text-gray-600 mb-8">
              Make a difference by contributing your time and skills to our mission
            </p>
            <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center gap-2 mx-auto">
              <UserPlus size={20} />
              Sign Up to Volunteer
            </button>
          </div>
        </div>
      </div>

      {/* Partnership Section */}
      <div className="py-16 px-4 bg-stone-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif mb-6">Partner with Us</h2>
            <p className="text-gray-600 mb-8">
              We welcome partnerships with schools, researchers, and cultural organizations
            </p>
            <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center gap-2 mx-auto">
              <HandshakeIcon size={20} />
              Explore Partnerships
            </button>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-serif mb-6">Stay Connected</h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter for updates on events and initiatives
            </p>
            {subscribed ? (
              <div className="text-green-600 font-bold">
                Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
                <div className="flex gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-6 rounded-lg transition-colors flex items-center gap-2"
                  >
                    <Mail size={20} />
                    Subscribe
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetInvolved
