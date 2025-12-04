'use client'

import { FaTrophy, FaCertificate, FaStar } from 'react-icons/fa'

export default function Achievements() {
  const certifications = [
    {
      title: 'Oracle Cloud Generative AI Professional',
      issuer: 'Oracle',
      icon: '☁️',
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'IBM Generative AI',
      issuer: 'IBM',
      icon: '🤖',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Python Programming',
      issuer: 'Microsoft',
      icon: '🐍',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Java Programming',
      issuer: 'Industry Certification',
      icon: '☕',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Prompt Engineering',
      issuer: 'Industry Certification',
      icon: '✨',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Data Quality Analyst',
      issuer: 'Industry Certification',
      icon: '📊',
      color: 'from-indigo-500 to-blue-500'
    }
  ]

  const achievements = [
    {
      title: 'Full Stack Development Internship',
      description: 'Completed comprehensive full-stack development program',
      icon: '💻'
    },
    {
      title: 'Aspire Leaders Program',
      description: 'Recognition for leadership and innovation in technology',
      icon: '🏆'
    },
    {
      title: 'AI Project Excellence',
      description: 'Achieved 35% improvement in model accuracy',
      icon: '🎯'
    },
    {
      title: 'SDLC Innovation',
      description: '30% acceleration in development cycles through automation',
      icon: '⚡'
    }
  ]

  return (
    <section id="achievements" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Achievements & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Recognition of continuous learning and professional excellence
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 flex items-center justify-center">
            <FaCertificate className="mr-3 text-primary" />
            Professional Certifications
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg card-hover">
                <div className={`bg-gradient-to-br ${cert.color} p-6 text-white`}>
                  <div className="text-5xl mb-3 animate-float">{cert.icon}</div>
                  <h4 className="font-bold text-lg">{cert.title}</h4>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                    <FaStar className="text-yellow-500 mr-2" />
                    {cert.issuer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Grid */}
        <div>
          <h3 className="text-3xl font-bold mb-8 flex items-center justify-center">
            <FaTrophy className="mr-3 text-accent" />
            Key Achievements
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, idx) => (
              <div key={idx} className="bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-6 shadow-lg card-hover border-2 border-transparent hover:border-primary transition-all">
                <div className="flex items-start space-x-4">
                  <div className="text-5xl">{achievement.icon}</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-6 text-center">By The Numbers</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">6+</div>
              <div className="text-white/80">Certifications</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-white/80">Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">35%</div>
              <div className="text-white/80">Model Improvement</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">30%</div>
              <div className="text-white/80">Faster Development</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
