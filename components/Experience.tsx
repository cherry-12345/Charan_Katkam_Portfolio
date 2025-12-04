'use client'

import { FaBriefcase, FaGraduationCap, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa'

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            A timeline of growth, learning, and impact
          </p>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 flex items-center">
            <FaBriefcase className="mr-3 text-primary" />
            Professional Experience
          </h3>
          
          <div className="relative border-l-4 border-primary pl-8 ml-4">
            <div className="mb-10 relative">
              <div className="absolute -left-[2.6rem] top-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-white"></div>
              </div>
              
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg card-hover">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-primary mb-1">AI Developer Intern</h4>
                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">SmartBridge</p>
                  </div>
                  <div className="text-right">
                    <p className="flex items-center text-gray-600 dark:text-gray-400 mb-1">
                      <FaCalendar className="mr-2" />
                      2025
                    </p>
                    <p className="flex items-center text-gray-600 dark:text-gray-400">
                      <FaMapMarkerAlt className="mr-2" />
                      Remote
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  Led the development of AI-driven modules that transformed the software development lifecycle. 
                  Pioneered automation solutions that significantly reduced manual effort and accelerated delivery timelines.
                </p>

                <div className="space-y-2 mb-4">
                  <h5 className="font-semibold text-gray-700 dark:text-gray-300">Key Achievements:</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start text-gray-600 dark:text-gray-400">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span>Built intelligent SDLC automation platform with bug prediction and requirement classification</span>
                    </li>
                    <li className="flex items-start text-gray-600 dark:text-gray-400">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span>Developed chatbot interface for seamless developer-AI interaction</span>
                    </li>
                    <li className="flex items-start text-gray-600 dark:text-gray-400">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span>Automated test case generation reducing QA time by 40%</span>
                    </li>
                    <li className="flex items-start text-gray-600 dark:text-gray-400">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span>Integrated machine learning models for predictive analytics across development workflows</span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Python</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">TensorFlow</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">NLP</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Scikit-learn</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">FastAPI</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h3 className="text-3xl font-bold mb-8 flex items-center">
            <FaGraduationCap className="mr-3 text-secondary" />
            Education
          </h3>
          
          <div className="relative border-l-4 border-secondary pl-8 ml-4">
            <div className="mb-10 relative">
              <div className="absolute -left-[2.6rem] top-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-white"></div>
              </div>
              
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg card-hover">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-secondary mb-1">Bachelor of Technology</h4>
                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                      Computer Science & Engineering (Artificial Intelligence)
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                      G. Pullaiah College of Engineering & Technology
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="flex items-center text-gray-600 dark:text-gray-400">
                      <FaCalendar className="mr-2" />
                      2022 - 2026
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Academic Focus:</h5>
                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <span>• Machine Learning & AI</span>
                      <span>• Data Structures & Algorithms</span>
                      <span>• Deep Learning</span>
                      <span>• Web Technologies</span>
                      <span>• Computer Vision</span>
                      <span>• Natural Language Processing</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h5 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Highlights:</h5>
                    <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">▸</span>
                        <span>Specialized in AI/ML with focus on practical applications</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">▸</span>
                        <span>Completed multiple industry-relevant projects and internships</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">▸</span>
                        <span>Active participation in technical workshops and hackathons</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
