'use client'

import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane, FaPhone } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <a href="mailto:charancherrykatkam@gmail.com" 
                   className="flex items-center space-x-4 text-gray-700 dark:text-gray-300 hover:text-primary transition group">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition">
                    <FaEnvelope className="text-primary text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <p className="font-semibold">charancherrykatkam@gmail.com</p>
                  </div>
                </a>

                <a href="tel:+919652947909"
                   className="flex items-center space-x-4 text-gray-700 dark:text-gray-300 hover:text-primary transition group">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition">
                    <FaPhone className="text-primary text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                    <p className="font-semibold">+91 96529 47909</p>
                  </div>
                </a>

                <a href="https://github.com/cherry-12345" target="_blank" rel="noopener noreferrer"
                   className="flex items-center space-x-4 text-gray-700 dark:text-gray-300 hover:text-primary transition group">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition">
                    <FaGithub className="text-primary text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">GitHub</p>
                    <p className="font-semibold">github.com/cherry-12345</p>
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/charan-katkam-160135259" target="_blank" rel="noopener noreferrer"
                   className="flex items-center space-x-4 text-gray-700 dark:text-gray-300 hover:text-primary transition group">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition">
                    <FaLinkedin className="text-primary text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">LinkedIn</p>
                    <p className="font-semibold">Charan Katkam</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white">
              <h4 className="text-xl font-bold mb-4">Open to Opportunities</h4>
              <p className="mb-4">
                I&apos;m actively seeking full-time opportunities in AI/ML development, 
                full-stack engineering, and data science roles.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Full-time</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Remote</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Hybrid</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  placeholder="Project Collaboration"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent transition resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full gradient-primary text-white px-6 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
