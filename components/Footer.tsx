'use client'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Charan Katkam</h3>
            <p className="text-gray-400">
              AI Developer & Full Stack Engineer building intelligent solutions for tomorrow&apos;s challenges.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-primary transition">About</a></li>
              <li><a href="#projects" className="hover:text-primary transition">Projects</a></li>
              <li><a href="#experience" className="hover:text-primary transition">Experience</a></li>
              <li><a href="#achievements" className="hover:text-primary transition">Achievements</a></li>
              <li><a href="#contact" className="hover:text-primary transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="https://github.com/cherry-12345" target="_blank" rel="noopener noreferrer" 
                   className="hover:text-primary transition">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/charan-katkam-160135259" target="_blank" rel="noopener noreferrer"
                   className="hover:text-primary transition">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:charancherrykatkam@gmail.com" className="hover:text-primary transition">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Charan Katkam. Crafted with passion and code.</p>
        </div>
      </div>
    </footer>
  )
}
