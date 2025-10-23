import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { apiServices } from '../services/api';
import { toast } from 'react-toastify';

const Hero = () => {
  const { language, content } = useLanguage();
  const { isDark } = useTheme();
  const [isLoading, setIsLoading] = useState(false);

  // Sorun teşhisi için konsola yaz
  console.log('LANG:', language, 'FOOTER LINKS:', content?.footer?.links);

  const githubUrl = content?.footer?.links?.github || 'https://github.com/Ahmeterbaayy';
  const linkedinUrl = content?.footer?.links?.linkedin || 'https://linkedin.com/in/almilasucode';

  const handleHireMe = async () => {
    setIsLoading(true);
    try {
      const userData = {
        name: "Almila Su",
        email: "almilasucode@gmail.com",
        message: "Hire request from portfolio website - Hero section",
        timestamp: new Date().toISOString(),
        language: language
      };
  await apiServices.createUser(userData, language);
    } catch (error) {
      console.error('API Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="px-4 sm:px-8 lg:px-32 py-8 sm:py-12 lg:py-16">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Left Content */}
        <div className="flex-1 space-y-6 lg:space-y-8 text-center lg:text-left">
          {/* Name with underline */}
          <div className="space-y-2">
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <div className="w-16 sm:w-24 h-0.5 bg-primary-600"></div>
              <h2 className="text-primary-600 dark:text-primary-400 text-lg sm:text-xl">
                {content.hero.name}
              </h2>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-700 dark:text-gray-200 leading-tight">
            {content.hero.title.split('\n').map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </h1>

          {/* Description */}
          <div className={`text-base sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 ${
            isDark ? 'text-gray-300' : 'text-gray-500'
          }`}>
            {content.hero.description}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center lg:justify-start">
            <button 
              onClick={handleHireMe}
              disabled={isLoading}
              aria-label="hire me"
              className={`
                px-6 sm:px-8 py-3 rounded-md transition-colors w-full sm:w-auto
                ${isLoading 
                  ? 'bg-gray-400 cursor-not-allowed text-white' 
                  : 'bg-primary-600 hover:bg-primary-700 text-white'
                }
              `}
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>{content.toast.loading}</span>
                </div>
              ) : (
                content.hero.hireMe
              )}
            </button>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 border border-primary-600 dark:border-primary-400 px-4 sm:px-6 py-3 rounded-md hover:bg-primary-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center no-underline"
              aria-label="github link"
            >
              <img 
                src="https://static.codia.ai/image/2025-10-20/WEio8XTK9a.png" 
                alt="Github" 
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
              {content.hero.github}
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 border border-primary-600 dark:border-primary-400 px-4 sm:px-6 py-3 rounded-md hover:bg-primary-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center no-underline"
              aria-label="linkedin link"
            >
              <img 
                src="https://static.codia.ai/image/2025-10-20/dpu9esv2bH.png" 
                alt="LinkedIn" 
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
              {content.hero.linkedin}
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center lg:justify-end order-first lg:order-last">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <img 
              src="https://static.codia.ai/image/2025-10-20/4sdtirZ3kT.png" 
              alt="Profile" 
              className="w-full h-auto rounded-lg shadow-custom"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
