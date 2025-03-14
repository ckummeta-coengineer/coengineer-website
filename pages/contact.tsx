import Head from 'next/head';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  VideoCameraIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline';

export default function Contact() {
  const contactMethods = [
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'Chat With Us',
      description: 'Get instant answers during business hours',
      action: 'Start Chat',
      href: '#chat'
    },
    {
      icon: EnvelopeIcon,
      title: 'Email Us',
      description: "We'll respond within 24 hours",
      action: 'Send Email',
      href: 'mailto:contact@coengineer.com'
    },
    {
      icon: VideoCameraIcon,
      title: 'Book a Call',
      description: 'Schedule a video consultation',
      action: 'Book Now',
      href: '#schedule'
    }
  ];

  const officeLocations = [
    {
      city: 'San Francisco',
      address: '123 Tech Plaza, SF, CA 94105',
      phone: '+1 (415) 555-0123',
      hours: 'Mon-Fri 9:00 AM - 6:00 PM PT'
    },
    {
      city: 'New York',
      address: '456 Innovation Ave, NY, NY 10013',
      phone: '+1 (212) 555-0123',
      hours: 'Mon-Fri 9:00 AM - 6:00 PM ET'
    }
  ];

  return (
    <>
      <Head>
        <title>Contact Us - CoEngineer</title>
        <meta name="description" content="Get in touch with CoEngineer software consultancy" />
      </Head>

      <div className="relative bg-gradient-to-br from-primary-700 via-primary-600 to-accent-600 text-white py-24">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto container-padding relative">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-2xl text-white/90">
            Let's discuss how we can help transform your ideas into reality
          </p>
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-12">
                Whether you have a question about our services, pricing, or just want 
                to say hello, we're here to help.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-bold mb-6">Contact Methods</h3>
                <div className="grid gap-6">
                  {contactMethods.map((method, index) => (
                    <a
                      key={index}
                      href={method.href}
                      className="card flex items-center p-6 group hover:scale-[1.02] transition-transform"
                    >
                      <div className="relative mr-6">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <method.icon className="h-8 w-8 text-primary-600" />
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-bold mb-1">{method.title}</h4>
                        <p className="text-gray-600 text-sm">{method.description}</p>
                      </div>
                      <span className="text-primary-600 font-medium">{method.action}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6">Our Offices</h3>
                <div className="grid gap-6">
                  {officeLocations.map((office, index) => (
                    <div key={index} className="card p-6">
                      <div className="flex items-center mb-4">
                        <BuildingOfficeIcon className="h-6 w-6 text-primary-600 mr-2" />
                        <h4 className="font-bold">{office.city}</h4>
                      </div>
                      <div className="space-y-3 text-sm">
                        <p className="flex items-start text-gray-600">
                          <MapPinIcon className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
                          {office.address}
                        </p>
                        <p className="flex items-start text-gray-600">
                          <PhoneIcon className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
                          {office.phone}
                        </p>
                        <p className="flex items-start text-gray-600">
                          <ClockIcon className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
                          {office.hours}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <h2 className="text-3xl font-bold mb-4">Have Questions?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Check out our frequently asked questions or reach out to our support team
          </p>
          <a href="/faq" className="btn-primary inline-flex">
            View FAQ
          </a>
        </div>
      </section>
    </>
  );
}
