'use client'

import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold gradient-text">
            CK
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-primary transition">About</a>
            <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-primary transition">Projects</a>
            <a href="#experience" className="text-gray-700 dark:text-gray-300 hover:text-primary transition">Experience</a>
            <a href="#achievements" className="text-gray-700 dark:text-gray-300 hover:text-primary transition">Achievements</a>
            <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-primary transition">Contact</a>
          </div>

          <div className="flex space-x-4">
            <a href="https://github.com/cherry-12345" target="_blank" rel="noopener noreferrer" 
               className="text-gray-700 dark:text-gray-300 hover:text-primary transition">
              <FaGithub className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/charan-katkam-160135259" target="_blank" rel="noopener noreferrer"
               className="text-gray-700 dark:text-gray-300 hover:text-primary transition">
              <FaLinkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
