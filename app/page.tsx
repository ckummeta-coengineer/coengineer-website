'use client';

import React from 'react';
import Link from 'next/link';
import { 
  CodeBracketIcon, 
  CpuChipIcon, 
  LightBulbIcon, 
  ArrowRightIcon,
  CheckCircleIcon,
  ChartBarIcon,
  CloudIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

interface Service {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  features: string[];
}

interface Stat {
  label: string;
  value: string;
}

interface Technology {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export default function Home() {
  const services: Service[] = [
    {
      title: 'Custom Software Development',
      description: 'Tailored solutions built with cutting-edge technology to solve your unique business challenges.',
      icon: CodeBracketIcon,
      features: ['Web Applications', 'Mobile Apps', 'Enterprise Software', 'API Development']
    },
    {
      title: 'Technical Consulting',
      description: 'Expert guidance on architecture, technology stack, and best practices for your projects.',
      icon: LightBulbIcon,
      features: ['Architecture Design', 'Tech Stack Selection', 'Code Reviews', 'Performance Optimization']
    },
    {
      title: 'System Integration',
      description: 'Seamless integration of new and existing systems to optimize your business operations.',
      icon: CpuChipIcon,
      features: ['API Integration', 'Legacy Systems', 'Data Migration', 'Cloud Solutions']
    },
  ];

  const stats: Stat[] = [
    { label: 'Projects Delivered', value: '100+' },
    { label: 'Happy Clients', value: '50+' },
    { label: 'Team Members', value: '25+' },
    { label: 'Years Experience', value: '10+' },
  ];

  const technologies: Technology[] = [
    { name: 'Cloud Services', icon: CloudIcon },
    { name: 'Data Analytics', icon: ChartBarIcon },
    { name: 'Security', icon: ShieldCheckIcon },
    { name: 'Development', icon: CodeBracketIcon },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary-600 to-accent-600 animate-gradient"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
              Transform Your Ideas
              <span className="block mt-2">Into Reality</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
              We build exceptional software solutions that drive business growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" 
                className="btn-primary bg-white text-primary-600 hover:bg-white/90 group">
                Get Started
                <ArrowRightIcon className="inline-block w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/services" 
                className="text-white hover:text-white/90 font-medium flex items-center transition-colors">
                Learn More
                <ArrowRightIcon className="w-5 h-5 ml-1" />
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg className="fill-white" viewBox="0 0 1440 120">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive software solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} 
                className="card group"
                style={{ 
                  transitionDelay: `${index * 100}ms`
                }}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <service.icon className="h-12 w-12 text-primary-600 mb-4" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircleIcon className="h-5 w-5 text-accent-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expertise</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We leverage cutting-edge technologies to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center group">
                <div className="inline-block p-4 rounded-full bg-primary-50 group-hover:bg-primary-100 transition-colors mb-4">
                  <tech.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="font-medium text-gray-900">{tech.name}</h3>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/services" 
              className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors">
              View All Technologies
              <ArrowRightIcon className="w-5 h-5 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-secondary-900 text-white section-padding overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-700/20 via-transparent to-accent-600/20 animate-gradient"></div>
        
        <div className="relative max-w-7xl mx-auto container-padding">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your Next Project?
              </h2>
              <p className="text-xl mb-8 text-gray-300">
                Let's discuss how we can help you achieve your goals with our expert software solutions.
              </p>
              <Link href="/contact" 
                className="inline-flex items-center btn-primary bg-accent-500 hover:bg-accent-600 group">
                Contact Us
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6">Why Choose Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-accent-500 mr-3 flex-shrink-0" />
                  <span>Expert team with proven track record</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-accent-500 mr-3 flex-shrink-0" />
                  <span>Cutting-edge technology solutions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-accent-500 mr-3 flex-shrink-0" />
                  <span>Agile development methodology</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-accent-500 mr-3 flex-shrink-0" />
                  <span>Dedicated support and maintenance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
