'use client'

import { FaRocket, FaBrain, FaCode } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-6xl mx-auto text-center">
        <div className="animate-fade-in">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
              AI Developer & Full Stack Engineer
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I&apos;m{' '}
            <span className="gradient-text">Charan Katkam</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Building intelligent systems at the intersection of{' '}
            <span className="text-primary font-semibold">AI automation</span>,{' '}
            <span className="text-secondary font-semibold">predictive analytics</span>, and{' '}
            <span className="text-accent font-semibold">scalable web solutions</span>
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center space-x-2 bg-green-50 dark:bg-green-900/20 px-4 py-2 rounded-full">
              <FaBrain className="text-green-600" />
              <span className="text-sm font-medium text-green-700 dark:text-green-400">35% Model Accuracy Boost</span>
            </div>
            <div className="flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-full">
              <FaRocket className="text-blue-600" />
              <span className="text-sm font-medium text-blue-700 dark:text-blue-400">30% Faster Development</span>
            </div>
            <div className="flex items-center space-x-2 bg-purple-50 dark:bg-purple-900/20 px-4 py-2 rounded-full">
              <FaCode className="text-purple-600" />
              <span className="text-sm font-medium text-purple-700 dark:text-purple-400">AI-Driven Automation</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#projects" 
               className="gradient-primary text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105">
              View My Work
            </a>
            <a href="#contact" 
               className="border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300">
              Get In Touch
            </a>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-up">
          <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg card-hover">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-bold mb-2">AI & ML</h3>
            <p className="text-gray-600 dark:text-gray-400">
              TensorFlow, PyTorch, Scikit-learn for intelligent automation
            </p>
          </div>
          
          <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg card-hover">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-2">Full Stack</h3>
            <p className="text-gray-600 dark:text-gray-400">
              React, Next.js, Node.js for scalable web applications
            </p>
          </div>
          
          <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg card-hover">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-2">Data Science</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Python, R, SQL for predictive analytics and insights
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
