import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
  const { content } = useLanguage();
  const { isDark } = useTheme();

  return (
    <footer className="bg-gray-50 dark:bg-gray-800 px-4 sm:px-6 lg:px-8 xl:px-32 py-8 sm:py-12 lg:py-16">
      <div className="space-y-8 sm:space-y-12">
        {/* Main Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-700 dark:text-gray-200 leading-tight max-w-full sm:max-w-2xl">
          {content.footer.title}
        </h2>
        
        {/* Contact and Links */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
          {/* Email */}
          <div className="flex items-center gap-2">
            <span className="text-lg sm:text-xl">👉</span>
            <a 
              href={`mailto:${content.footer.email}`}
              className={`text-lg sm:text-xl hover:underline break-all ${
                isDark ? 'text-primary-400' : 'text-pink-600'
              }`}
            >
              {content.footer.email}
            </a>
          </div>
          
          {/* Social Links */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
            <a 
              href="#" 
              className={`hover:text-primary-600 dark:hover:text-primary-400 transition-colors ${
                isDark ? 'text-purple-300' : 'text-black'
              }`}
            >
              {content.footer.links.personalBlog}
            </a>
            <a 
              href="#" 
              className="text-green-500 hover:text-green-600 transition-colors"
            >
              {content.footer.links.github}
            </a>
            <a 
              href="#" 
              className="text-blue-600 hover:text-blue-700 transition-colors"
            >
              {content.footer.links.linkedin}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
