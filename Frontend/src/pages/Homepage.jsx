import { Link } from 'react-router-dom'
import { ArrowUpRight, Code2, Database, Terminal, Layout, Palette, GitBranch, Cloud, Figma, Layers, Cpu, Globe } from 'lucide-react'

const technologies = {
  frontend: {
    icon: Layout,
    color: 'blue',
    items: [
      { name: 'JavaScript', icon: Code2 },
      { name: 'React', icon: Code2 },
      { name: 'Tailwind CSS', icon: Palette },
    ]
  },
  backend: {
    icon: Terminal,
    color: 'emerald',
    items: [
      { name: 'Python', icon: Terminal },
       { name: 'Flask', icon: Terminal },
       { name: 'Node.js', icon: Cpu },
      { name: 'PostgreSQL', icon: Database },
       { name: 'SQLite', icon: Database },
     ,
    ]
  },
  tools: {
    icon: GitBranch,
    color: 'purple',
    items: [
      { name: 'Git', icon: GitBranch },
      { name: 'Figma', icon: Figma },
    ]
  }
}

const colorClasses = {
  blue: {
    bg: 'bg-blue-50 dark:bg-blue-900/20',
    border: 'border-blue-100 dark:border-blue-800',
    text: 'text-blue-600 dark:text-blue-400',
    hover: 'hover:bg-blue-100 dark:hover:bg-blue-900/30',
    shadow: 'shadow-blue-500/10',
  },
  emerald: {
    bg: 'bg-emerald-50 dark:bg-emerald-900/20',
    border: 'border-emerald-100 dark:border-emerald-800',
    text: 'text-emerald-600 dark:text-emerald-400',
    hover: 'hover:bg-emerald-100 dark:hover:bg-emerald-900/30',
    shadow: 'shadow-emerald-500/10',
  },
  purple: {
    bg: 'bg-purple-50 dark:bg-purple-900/20',
    border: 'border-purple-100 dark:border-purple-800',
    text: 'text-purple-600 dark:text-purple-400',
    hover: 'hover:bg-purple-100 dark:hover:bg-purple-900/30',
    shadow: 'shadow-purple-500/10',
  }
}

export default function Homepage() {
  return (
    <div className="pt-12 bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center px-6">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Intro Text - Left Side */}
            <div className="order-2 md:order-1">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
                <span className="text-gray-900 dark:text-white">Hi I am</span> <span className="text-blue-600">Dennis Karanja</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
                Full-stack web developer experienced in building and deploying scalable applications with Flask and React. Strong in RESTful APIs, responsive interfaces, and database integration, with a growth mindset and commitment to continuous learning and modern web technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  to="/projects"
                  className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/30"
                >
                  View selected work
                  <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/30"
                >
                  Get in touch
                  <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </div>
            </div>
            
            {/* Image - Right Side */}
            <div className="order-1 md:order-2 flex justify-center">
              <img 
                src="/Images/Dennis-DV-Photo.webp"
                alt="Dennis Karanja - Full Stack Developer"
                className="w-70 md:w-90 h-auto rounded-2xl shadow-2xl object-cover aspect-[4/5]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Technologies
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A curated collection of tools and technologies I use to bring ideas to life
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {Object.entries(technologies).map(([key, category]) => {
              const Icon = category.icon
              const colors = colorClasses[category.color]
              
              return (
                <div 
                  key={key}
                  className={`relative overflow-hidden rounded-2xl ${colors.bg} ${colors.border} border p-6 transition-all duration-300 hover:shadow-lg ${colors.shadow}`}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 rounded-xl ${colors.bg} ${colors.border} border`}>
                      <Icon className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <h3 className={`text-lg font-semibold ${colors.text} capitalize`}>
                      {key}
                    </h3>
                  </div>
                  
                  {/* Tech Items Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {category.items.map((tech) => {
                      const TechIcon = tech.icon
                      return (
                        <div 
                          key={tech.name}
                          className={`flex items-center gap-2 p-3 rounded-xl bg-white dark:bg-gray-800 ${colors.border} border shadow-sm transition-all duration-300 ${colors.hover} hover:shadow-md cursor-default`}
                        >
                          <TechIcon className={`w-4 h-4 ${colors.text} flex-shrink-0`} />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-200 truncate">
                            {tech.name}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                  
                  {/* Decorative gradient overlay */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${colors.bg} opacity-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none`} />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-32 px-6 bg-blue-600 dark:bg-blue-800 transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            I'm always open to discussing new projects and opportunities.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-blue-600 bg-white hover:bg-blue-50 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get in touch
            <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}
