'use client'

export default function About() {
  const skillCategories = [
    {
      title: 'AI & Machine Learning',
      icon: '🧠',
      skills: [
        { name: 'TensorFlow', level: 90 },
        { name: 'PyTorch', level: 85 },
        { name: 'Scikit-learn', level: 92 },
        { name: 'OpenCV', level: 88 },
      ]
    },
    {
      title: 'Programming Languages',
      icon: '💻',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'JavaScript', level: 88 },
        { name: 'Java', level: 82 },
        { name: 'SQL', level: 85 },
        { name: 'R', level: 78 },
      ]
    },
    {
      title: 'Web Development',
      icon: '🌐',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 88 },
        { name: 'HTML/CSS', level: 92 },
        { name: 'Node.js', level: 80 },
      ]
    },
    {
      title: 'Data Science & Tools',
      icon: '📊',
      skills: [
        { name: 'Pandas', level: 92 },
        { name: 'NumPy', level: 90 },
        { name: 'MySQL', level: 85 },
        { name: 'Jupyter', level: 88 },
      ]
    },
  ]

  return (
    <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I&apos;m a Data Science and Full Stack Developer who thrives at the intersection of artificial intelligence 
            and web technologies. My journey is driven by the passion to build systems that don&apos;t just work—they think, 
            adapt, and transform how we solve problems.
          </p>
        </div>

        <div className="mb-16 bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <span className="text-3xl mr-3">🎯</span>
            What I Bring to the Table
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-green-500 text-xl mt-1">✓</span>
                <div>
                  <h4 className="font-semibold text-lg">Model Optimization Expert</h4>
                  <p className="text-gray-600 dark:text-gray-400">Improved model accuracy by 35% through advanced feature engineering and hyperparameter tuning</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-green-500 text-xl mt-1">✓</span>
                <div>
                  <h4 className="font-semibold text-lg">SDLC Automation Pioneer</h4>
                  <p className="text-gray-600 dark:text-gray-400">Accelerated development cycles by 30% with AI-driven automation platforms</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-green-500 text-xl mt-1">✓</span>
                <div>
                  <h4 className="font-semibold text-lg">Full Stack Architect</h4>
                  <p className="text-gray-600 dark:text-gray-400">Built scalable web applications with React, Next.js, and modern backend technologies</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-green-500 text-xl mt-1">✓</span>
                <div>
                  <h4 className="font-semibold text-lg">Problem Solver at Heart</h4>
                  <p className="text-gray-600 dark:text-gray-400">From gesture-controlled interfaces to predictive analytics, I turn complex challenges into elegant solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12 text-center">
          <h3 className="text-3xl font-bold mb-12">
            Technical <span className="gradient-text">Arsenal</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg card-hover">
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-3">{category.icon}</span>
                <h4 className="text-xl font-bold">{category.title}</h4>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div 
                        className="gradient-primary h-2.5 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
