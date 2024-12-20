import { CreditCard, Calendar } from 'lucide-react'

const Donate = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div 
        className="relative h-[50vh] flex items-center justify-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl md:text-6xl font-serif mb-6 text-white font-bold">Support Our Mission</h1>
          <p className="text-xl text-white">
            Your contributions help us preserve ancient traditions, educate communities, 
            and build a better future.
          </p>
        </div>
      </div>

      {/* Donation Options */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* One-Time Donation */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-serif mb-6">One-Time Donation</h2>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <button className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white font-bold py-3 rounded-lg transition-colors">
                $25
              </button>
              <button className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white font-bold py-3 rounded-lg transition-colors">
                $50
              </button>
              <button className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white font-bold py-3 rounded-lg transition-colors">
                $100
              </button>
              <button className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white font-bold py-3 rounded-lg transition-colors">
                Custom
              </button>
            </div>
            <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
              <CreditCard size={20} />
              Donate Now
            </button>
          </div>

          {/* Monthly Donation */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-serif mb-6">Monthly Donation</h2>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <button className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white font-bold py-3 rounded-lg transition-colors">
                $10/mo
              </button>
              <button className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white font-bold py-3 rounded-lg transition-colors">
                $25/mo
              </button>
              <button className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white font-bold py-3 rounded-lg transition-colors">
                $50/mo
              </button>
              <button className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white font-bold py-3 rounded-lg transition-colors">
                Custom
              </button>
            </div>
            <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
              <Calendar size={20} />
              Become a Monthly Donor
            </button>
          </div>
        </div>

        {/* Impact Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-serif mb-8 text-center">Your Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Preserve Heritage</h3>
              <p className="text-gray-600">
                Help document and preserve ancient traditions and cultural practices
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Support Research</h3>
              <p className="text-gray-600">
                Fund important research into our shared ancestral history
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Educate Communities</h3>
              <p className="text-gray-600">
                Enable educational programs that connect people with their roots
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Donate
