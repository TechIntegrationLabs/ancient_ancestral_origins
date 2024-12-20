import { useState } from 'react'
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the form submission
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div 
        className="relative h-[50vh] flex items-center justify-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl md:text-6xl font-serif mb-6 text-white font-bold">Contact Us</h1>
          <p className="text-xl text-white">
            Get in touch with us to learn more about our mission
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          {submitted ? (
            <div className="text-center py-8">
              <h3 className="text-2xl font-serif mb-4">Thank You!</h3>
              <p className="text-gray-600">We'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-serif mb-4">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-600">
                <Mail size={20} />
                <span>info@ancestralorigins.org</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Phone size={20} />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <MapPin size={20} />
                <span>123 Heritage Lane, Ancient City, AC 12345</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-serif mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-amber-600">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-amber-600">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-amber-600">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-amber-600">
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
