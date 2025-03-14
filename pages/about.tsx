import Head from 'next/head';
import Link from 'next/link';
import { 
  UserGroupIcon, 
  RocketLaunchIcon, 
  SparklesIcon,
  GlobeAmericasIcon,
  CubeTransparentIcon,
  ShieldCheckIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

export default function About() {
  const values = [
    {
      title: 'Innovation',
      description: 'We stay at the forefront of technology to deliver cutting-edge solutions.',
      icon: SparklesIcon,
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in code quality and project delivery.',
      icon: RocketLaunchIcon,
    },
    {
      title: 'Partnership',
      description: 'We build lasting relationships with our clients through trust and collaboration.',
      icon: UserGroupIcon,
    },
  ];

  const achievements = [
    {
      icon: GlobeAmericasIcon,
      title: 'Global Reach',
      description: 'Serving clients across 15+ countries',
    },
    {
      icon: CubeTransparentIcon,
      title: 'Innovation Awards',
      description: '5+ industry recognition awards',
    },
    {
      icon: ShieldCheckIcon,
      title: 'Security First',
      description: 'ISO 27001 certified operations',
    },
  ];

  return (
    <>
      <Head>
        <title>About Us - CoEngineer</title>
        <meta name="description" content="Learn about CoEngineer software consultancy" />
      </Head>

      <div className="relative bg-gradient-to-br from-primary-700 via-primary-600 to-accent-600 text-white py-24">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto container-padding relative">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl max-w-2xl text-white/90">
            Building tomorrow's software solutions with expertise and innovation
          </p>
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  CoEngineer is a leading software consultancy firm specializing in delivering 
                  innovative solutions for businesses of all sizes. With our team of expert 
                  developers and consultants, we transform complex challenges into elegant, 
                  efficient software solutions.
                </p>
                <p className="text-gray-600">
                  Founded in Silicon Valley, we combine technical expertise with business 
                  acumen to help our clients achieve their digital transformation goals. 
                  Our commitment to excellence and continuous learning ensures we stay 
                  at the forefront of technology trends.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/contact" 
                  className="inline-flex items-center btn-primary group">
                  Work With Us
                  <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {values.map((value, index) => (
                <div key={index} className="card flex items-start group">
                  <div className="relative mr-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <value.icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Achievements</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Recognition of our commitment to excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="card text-center group">
                <div className="inline-block p-4 rounded-full bg-primary-50 group-hover:bg-primary-100 transition-colors mb-4">
                  <achievement.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-secondary-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-700/20 via-transparent to-accent-600/20 animate-gradient"></div>
        <div className="relative max-w-7xl mx-auto container-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to Transform Your Ideas Into Reality?
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
