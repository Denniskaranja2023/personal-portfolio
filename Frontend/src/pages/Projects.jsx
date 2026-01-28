
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ExternalLink, Github, Code2 } from 'lucide-react'
import { projects } from '../data/projects'

const roleFilters = [
  { id: 'all', label: 'All Projects' },
  { id: 'Full Stack Developer', label: 'Full Stack Developer' },
  { id: 'Backend Developer', label: 'Backend' },
  { id: 'Frontend Developer', label: 'Frontend' },
]

export default function Projects() {
  const [roleFilter, setRoleFilter] = useState('all')
  
  // Filter projects based on role
  const filteredProjects = projects.filter(project => {
    return roleFilter === 'all' || project.role === roleFilter
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-24 lg:pt-32 transition-colors duration-300">
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              My <span className="text-blue-600">Projects</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A collection of projects I've worked on, showcasing my skills and passion for creating amazing digital experiences.
            </p>
          </div>

          {/* Role Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {roleFilters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setRoleFilter(filter.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  roleFilter === filter.id
                    ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 shadow-md hover:shadow-lg'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Results count */}
          <p className="text-center text-gray-500 dark:text-gray-400 mb-8">
            Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg shadow-blue-500/5 border border-blue-100 dark:border-gray-700 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Overlay Buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/90 dark:bg-gray-800/90 rounded-full text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:scale-110 transition-all duration-300"
                      title="View Code"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/90 dark:bg-gray-800/90 rounded-full text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:scale-110 transition-all duration-300"
                      title="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs font-medium rounded-full">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                    <Link
                      to={`/projects/${project.id}`}
                      className="flex items-center justify-center space-x-2 text-blue-600 dark:text-blue-400 text-sm font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 bg-blue-50 dark:bg-blue-900/20 py-2 rounded-xl"
                    >
                      <span>View Details</span>
                      <Code2 size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
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
                Want to See More?
              </h2>
              <p className="text-blue-100 mb-8 max-w-xl mx-auto">
                Check out my GitHub profile to see all my projects and contributions.
              </p>
              <a
                href="https://github.com/Denniskaranja2023"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <Github size={20} />
                <span>View GitHub Profile</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

