import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

const TechPill = ({ tech }) => (
  <span className="bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 border border-primary-600 dark:border-primary-400 px-4 py-1 rounded text-sm">
    {tech}
  </span>
);

const ProjectCard = ({ project }) => {
  const { isDark } = useTheme();
  
  return (
    <div className="w-full max-w-sm mx-auto space-y-4">
      <div className="w-full h-48 sm:h-52 md:h-56 overflow-hidden rounded-lg">
        <img 
          src={project.image} 
          alt={project.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <h3 className="text-2xl sm:text-3xl text-primary-600 dark:text-primary-400">
        {project.name}
      </h3>
      
      <p 
        className="text-sm leading-relaxed"
        style={{ color: isDark ? 'rgb(209 213 219)' : '#6B7280' }}
      >
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-1.5">
        {project.techStack.map((tech, index) => (
          <TechPill key={index} tech={tech} />
        ))}
      </div>
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4">
        <a 
          href="#" 
          className="text-primary-600 dark:text-primary-400 hover:underline"
        >
          {project.github}
        </a>
        <a 
          href="#" 
          className="text-primary-600 dark:text-primary-400 hover:underline"
        >
          {project.viewSite}
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  const { content } = useLanguage();

  return (
    <section id="projects" className="px-4 sm:px-6 lg:px-8 xl:px-32 py-8 sm:py-12 lg:py-16">
      {/* Divider Line */}
      <div className="w-full h-px bg-purple-100 dark:bg-gray-600 mb-6 sm:mb-8"></div>
      
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-700 dark:text-gray-200 mb-8 sm:mb-12 lg:mb-16">
        {content.projects.title}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-16 xl:gap-32 justify-items-center">
        {content.projects.items.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
