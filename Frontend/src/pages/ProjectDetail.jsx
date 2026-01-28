import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Github, ExternalLink, Calendar, Code2, Users, Zap, Target, Lightbulb } from 'lucide-react'
import { projects } from '../data/projects'

export default function ProjectDetail() {
  const { id } = useParams()
  const [project, setProject] = useState(null)

  useEffect(() => {
    const projectId = parseInt(id)
    const foundProject = projects.find(p => p.id === projectId)
    setProject(foundProject)
  }, [id])

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-24 lg:pt-32 flex items-center justify-center transition-colors duration-300">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
            ← Back to Projects
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-24 lg:pt-32 transition-colors duration-300">
      {/* Back Button */}
      <section className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/projects"
            className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
          >
            <ArrowLeft size={20} />
            <span>Back to Projects</span>
          </Link>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/20">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 sm:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-all duration-300"
                >
                  <Github size={18} />
                  <span>View Code</span>
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-all duration-300"
                >
                  <ExternalLink size={18} />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg shadow-blue-500/5 border border-blue-100 dark:border-gray-700 transition-colors duration-300">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">About</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.fullDescription || project.description}
                </p>
              </div>

              {/* Features */}
              {project.features && (
                <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg shadow-blue-500/5 border border-blue-100 dark:border-gray-700 transition-colors duration-300">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center space-x-3">
                    <Target className="text-blue-600 dark:text-blue-400" />
                    <span>Key Features</span>
                  </h2>
                  <ul className="space-y-4">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-green-600 dark:text-green-400 text-sm">✓</span>
                        </div>
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Challenges & Learning */}
              {project.challenges && (
                <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg shadow-blue-500/5 border border-blue-100 dark:border-gray-700 transition-colors duration-300">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center space-x-3">
                    <Lightbulb className="text-blue-600 dark:text-blue-400" />
                    <span>Challenges & Solutions</span>
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.challenges}
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Project Info */}
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg shadow-blue-500/5 border border-blue-100 dark:border-gray-700 transition-colors duration-300">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Project Info</h3>
                <div className="space-y-4">
                  {project.duration && (
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 dark:text-gray-400 flex items-center space-x-2">
                        <Calendar size={16} />
                        <span>Duration</span>
                      </span>
                      <span className="font-medium text-gray-900 dark:text-white">{project.duration}</span>
                    </div>
                  )}
                  {project.team && (
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 dark:text-gray-400 flex items-center space-x-2">
                        <Users size={16} />
                        <span>Team</span>
                      </span>
                      <span className="font-medium text-gray-900 dark:text-white">{project.team}</span>
                    </div>
                  )}
                  {project.role && (
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 dark:text-gray-400 flex items-center space-x-2">
                        <Code2 size={16} />
                        <span>Role</span>
                      </span>
                      <span className="font-medium text-gray-900 dark:text-white">{project.role}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Technologies */}
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg shadow-blue-500/5 border border-blue-100 dark:border-gray-700 transition-colors duration-300">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-sm font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-6 text-white">
                <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 bg-white/20 hover:bg-white/30 rounded-xl px-4 py-3 transition-all duration-300"
                  >
                    <Github size={20} />
                    <span>View Source Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 bg-white/20 hover:bg-white/30 rounded-xl px-4 py-3 transition-all duration-300"
                  >
                    <ExternalLink size={20} />
                    <span>Visit Live Site</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 sm:p-12 text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Like What You See?
              </h2>
              <p className="text-blue-100 mb-8 max-w-xl mx-auto">
                Let's collaborate on your next project. I'd love to hear about your ideas.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <span>Get In Touch</span>
                <ArrowLeft size={20} className="rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

