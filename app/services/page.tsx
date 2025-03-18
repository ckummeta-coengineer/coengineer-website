'use client';

import React from 'react';
import Link from 'next/link';
import { 
  CodeBracketIcon, 
  CpuChipIcon, 
  LightBulbIcon, 
  CloudIcon, 
  ShieldCheckIcon, 
  ChartBarIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  DevicePhoneMobileIcon,
  CommandLineIcon,
  CircleStackIcon,
  CogIcon
} from '@heroicons/react/24/outline';

interface Service {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  features: string[];
  technologies: string[];
}

interface Specialty {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

export default function Services() {
  const services: Service[] = [
    {
      title: 'Custom Software Development',
      description: 'End-to-end development of tailored software solutions that perfectly match your business requirements.',
      icon: CodeBracketIcon,
      features: [
        'Web Applications',
        'Mobile Apps',
        'Desktop Software',
        'API Development'
      ],
      technologies: ['React', 'Node.js', 'Python', '.NET']
    },
    {
      title: 'Technical Consulting',
      description: 'Strategic guidance on technology decisions and implementation approaches.',
      icon: LightBulbIcon,
      features: [
        'Architecture Design',
        'Tech Stack Selection',
        'Code Reviews',
        'Best Practices'
      ],
      technologies: ['Cloud Architecture', 'DevOps', 'Agile', 'Security']
    },
    {
      title: 'System Integration',
      description: 'Seamless integration of different systems and applications for improved efficiency.',
      icon: CpuChipIcon,
      features: [
        'API Integration',
        'Legacy System Migration',
        'Data Synchronization',
        'Workflow Automation'
      ],
      technologies: ['REST APIs', 'GraphQL', 'ESB', 'Microservices']
    },
    {
      title: 'Cloud Solutions',
      description: 'Modern cloud-based solutions for scalability and reliability.',
      icon: CloudIcon,
      features: [
        'Cloud Migration',
        'Infrastructure Setup',
        'Serverless Architecture',
        'Cloud Optimization'
      ],
      technologies: ['AWS', 'Azure', 'GCP', 'Kubernetes']
    },
    {
      title: 'Security Solutions',
      description: 'Implementing robust security measures to protect your digital assets.',
      icon: ShieldCheckIcon,
      features: [
        'Security Audits',
        'Authentication Systems',
        'Data Encryption',
        'Compliance Implementation'
      ],
      technologies: ['OAuth', 'JWT', 'SSL/TLS', 'Firewalls']
    },
    {
      title: 'Analytics & Data',
      description: 'Transform your data into actionable insights for better decision making.',
      icon: ChartBarIcon,
      features: [
        'Data Analytics',
        'Business Intelligence',
        'Reporting Systems',
        'Data Visualization'
      ],
      technologies: ['Tableau', 'Power BI', 'Python', 'R']
    }
  ];

  const specialties: Specialty[] = [
    {
      icon: DevicePhoneMobileIcon,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications'
    },
    {
      icon: CommandLineIcon,
      title: 'DevOps',
      description: 'Continuous integration and deployment'
    },
    {
      icon: CircleStackIcon,
      title: 'Database Design',
      description: 'Optimized data storage solutions'
    },
    {
      icon: CogIcon,
      title: 'Process Automation',
      description: 'Streamlined business workflows'
    }
  ];

  return (
    <>
      <div className="relative bg-gradient-to-br from-primary-700 via-primary-600 to-accent-600 text-white py-24">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto container-padding relative">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-2xl text-white/90">
            Comprehensive software solutions tailored to your business needs
          </p>
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Offer</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From concept to deployment, we provide end-to-end software solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} 
                className="card group hover:scale-[1.02] transition-transform"
                style={{ 
                  transitionDelay: `${index * 100}ms`
                }}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <service.icon className="h-12 w-12 text-primary-600 mb-4" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-2">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <CheckCircleIcon className="h-5 w-5 text-accent-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Specialties</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Areas where we excel and deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialties.map((specialty, index) => (
              <div key={index} className="card text-center group">
                <div className="inline-block p-4 rounded-full bg-primary-50 group-hover:bg-primary-100 transition-colors mb-4">
                  <specialty.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">{specialty.title}</h3>
                <p className="text-gray-600">{specialty.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-secondary-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-700/20 via-transparent to-accent-600/20 animate-gradient"></div>
        <div className="relative max-w-7xl mx-auto container-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to Start Your Project?
          </h2>
          <Link href="/contact" 
            className="inline-flex items-center btn-primary bg-accent-500 hover:bg-accent-600 group">
            Get Started
            <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
