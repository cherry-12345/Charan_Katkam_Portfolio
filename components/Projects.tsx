'use client'

import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default function Projects() {
  const projects = [
    {
      title: 'SmartSDLC',
      icon: '🚀',
      tagline: 'AI-Powered Development Lifecycle Automation',
      description: 'An intelligent platform that revolutionizes software development by predicting bugs before they happen, automatically classifying requirements, and generating comprehensive test cases.',
      impact: [
        '30% reduction in development time',
        '40% fewer bugs in production',
        'Automated test case generation',
        'Real-time requirement classification'
      ],
      techStack: ['Python', 'TensorFlow', 'Scikit-learn', 'NLP', 'FastAPI', 'React'],
      highlights: [
        'Built predictive models for bug detection with 87% accuracy',
        'Integrated chatbot interface for developer assistance',
        'Automated requirement analysis using NLP techniques',
        'Streamlined QA processes with intelligent test generation'
      ],
      github: 'https://github.com/cherry-12345',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'AJ Abhi Jewels',
      icon: '💎',
      tagline: 'Premium E-Commerce Experience',
      description: 'A modern Next.js e-commerce platform delivering lightning-fast performance, intuitive UI, and exceptional SEO optimization for a luxury jewelry brand.',
      impact: [
        '50% faster page load times',
        'SEO score of 95+',
        'Mobile-first responsive design',
        '3x increase in user engagement'
      ],
      techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'MySQL', 'Vercel'],
      highlights: [
        'Implemented server-side rendering for optimal performance',
        'Built advanced product filtering and search',
        'Integrated secure payment gateway',
        'Created dynamic product catalog with real-time inventory'
      ],
      github: 'https://github.com/cherry-12345',
      gradient: 'from-pink-500 to-rose-600'
    },
    {
      title: 'Air Cursor',
      icon: '👆',
      tagline: 'Gesture-Controlled Computing',
      description: 'An innovative hands-free navigation system using computer vision and gesture recognition, enabling intuitive control without physical touch.',
      impact: [
        'Real-time gesture recognition',
        'Sub-100ms response time',
        'Support for 10+ gestures',
        'Accessibility-focused design'
      ],
      techStack: ['Python', 'OpenCV', 'MediaPipe', 'NumPy', 'PyAutoGUI'],
      highlights: [
        'Developed custom gesture recognition algorithms',
        'Implemented real-time hand tracking with 95% accuracy',
        'Created smooth cursor movement with predictive algorithms',
        'Optimized for low-latency performance'
      ],
      github: 'https://github.com/cherry-12345',
      gradient: 'from-green-500 to-teal-600'
    },
    {
      title: 'Music Streaming Platform',
      icon: '🎵',
      tagline: 'Full-Stack Audio Experience',
      description: 'A feature-rich music streaming application with real-time search, personalized recommendations, and seamless audio playback.',
      impact: [
        'Real-time search across millions of tracks',
        'Personalized user playlists',
        'Smooth audio streaming',
        'Social sharing features'
      ],
      techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'AWS S3'],
      highlights: [
        'Built scalable backend with RESTful APIs',
        'Implemented efficient audio streaming with CDN',
        'Created recommendation engine using collaborative filtering',
        'Designed responsive UI with modern music player controls'
      ],
      github: 'https://github.com/cherry-12345',
      gradient: 'from-orange-500 to-red-600'
    }
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of solutions that blend innovation with impact. Each project tells a story of 
            problem-solving, technical excellence, and user-centric design.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl overflow-hidden card-hover">
              <div className="grid md:grid-cols-3 gap-0">
                <div className={`md:col-span-1 bg-gradient-to-br ${project.gradient} p-8 flex flex-col justify-center items-center text-white`}>
                  <div className="text-7xl mb-4 animate-float">{project.icon}</div>
                  <h3 className="text-3xl font-bold text-center mb-2">{project.title}</h3>
                  <p className="text-center text-white/90 text-sm">{project.tagline}</p>
                  <div className="mt-6 flex space-x-3">
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                       className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-2 rounded-full flex items-center space-x-2 transition">
                      <FaGithub />
                      <span className="text-sm">Code</span>
                    </a>
                    <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-2 rounded-full flex items-center space-x-2 transition">
                      <FaExternalLinkAlt />
                      <span className="text-sm">Live</span>
                    </button>
                  </div>
                </div>

                <div className="md:col-span-2 p-8">
                  <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-bold text-lg mb-3 flex items-center">
                      <span className="mr-2">📊</span> Impact & Results
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {project.impact.map((item, i) => (
                        <div key={i} className="flex items-start space-x-2">
                          <span className="text-green-500 mt-1">✓</span>
                          <span className="text-sm text-gray-600 dark:text-gray-400">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold text-lg mb-3 flex items-center">
                      <span className="mr-2">💡</span> Key Highlights
                    </h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                          <span className="text-primary mr-2">▸</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-sm mb-3 text-gray-500 dark:text-gray-400">TECH STACK</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
