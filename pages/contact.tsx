import { useState } from 'react';
import Head from 'next/head';
import { EnvelopeIcon, PhoneIcon, ClockIcon } from '@heroicons/react/24/outline';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  message: string;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const defaultFormData: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  message: ''
};

export default function Contact() {
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [formData, setFormData] = useState<FormData>(defaultFormData);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    try {
      // Add your form submission logic here
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
      setFormStatus('success');
      setFormData(defaultFormData);
    } catch (error) {
      setFormStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Whether you have a question about our services, want to start a project, or just want to learn more,
                we're here to help. Fill out the form and we'll be in touch as soon as possible.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <EnvelopeIcon className="h-6 w-6 text-primary-600" />
                  <div>
                    <h3 className="text-xl font-semibold">Email Us</h3>
                    <p className="text-gray-600">info@coengineer.co.uk</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <PhoneIcon className="h-6 w-6 text-primary-600" />
                  <div>
                    <h3 className="text-xl font-semibold">Call Us</h3>
                    <p className="text-gray-600">+44 (20) 1234-5678</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <ClockIcon className="h-6 w-6 text-primary-600" />
                  <div>
                    <h3 className="text-xl font-semibold">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM GMT</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
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
                      value={formData.lastName}
                      onChange={handleChange}
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
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
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
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary"
                  disabled={formStatus === 'submitting'}
                >
                  {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>

                {formStatus === 'success' && (
                  <p className="text-green-600 text-center">Thank you for your message. We'll be in touch soon!</p>
                )}
                {formStatus === 'error' && (
                  <p className="text-red-600 text-center">There was an error sending your message. Please try again.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
