import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { apiServices } from '../services/api';
import { toast } from 'react-toastify';

const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  const { language, toggleLanguage, content } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHireMe = async () => {
    setIsLoading(true);
    
    try {
      const userData = {
        name: "Almila Su",
        email: "almilasucode@gmail.com",
        message: "Hire request from portfolio website",
        timestamp: new Date().toISOString(),
        language: language
      };

      await apiServices.sendToWorkintech(userData);
      
    } catch (error) {
      console.error('API Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <header className="w-full">
      {/* Dark Mode and Language Toggle */}
      <div className="flex justify-end items-center gap-4 px-4 sm:px-8 lg:px-32 py-6">
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <div className="flex items-center gap-3">
            <div 
              className={`relative cursor-pointer transition-all duration-300 w-14 h-6 rounded-xl ${
                isDark ? 'bg-gray-600' : 'bg-primary-600'
              }`}
              onClick={toggleTheme}
            >
              <div 
                className={`absolute top-1 w-4 h-4 bg-yellow-300 rounded-full transition-all duration-300 shadow-lg ${
                  isDark ? 'left-1' : 'left-9'
                }`}
              >
                {isDark && (
                  <div className="absolute top-0.5 left-1.5 w-2.5 h-3 bg-gray-600 rounded-full"></div>
                )}
              </div>
            </div>
            <span className="text-gray-500 dark:text-gray-400 text-sm font-bold tracking-wider">
              {isDark ? content.header.lightMode : content.header.darkMode}
            </span>
          </div>
          
          <span className="text-gray-500 dark:text-gray-400">|</span>
          
          {/* Language Toggle */}
          <button 
            onClick={toggleLanguage}
            className="text-sm font-bold tracking-wider transition-colors hover:opacity-80"
          >
            {language === 'en' ? (
              <span>
                <span className="text-primary-400">TÜRKÇE</span>
                <span className="text-gray-500">'YE GEÇ</span>
              </span>
            ) : (
              <span>
                <span className="text-gray-500">SWITCH TO </span>
                <span className="text-primary-400">ENGLISH</span>
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Main Header */}
      <div className="flex justify-between items-center px-4 sm:px-8 lg:px-32 py-4">
        {/* Logo */}
        <div className="w-16 h-16">
          <svg 
            viewBox="0 0 64 64" 
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Ellipse background */}
            <ellipse 
              cx="32" 
              cy="32" 
              rx="30" 
              ry="30" 
              fill={isDark ? "#4731D3" : "#EEEBFF"}
            />
            {/* Letter A */}
            <text 
              x="32" 
              y="32" 
              textAnchor="middle" 
              fontSize="24" 
              fontWeight="bold" 
              fill={isDark ? "#8F88FF" : "#7B61FF"}
              fontFamily="Arial, sans-serif"
              transform="rotate(29.34 32 32)"
              alignmentBaseline="central"
              dominantBaseline="central"
            >
              A
            </text>
          </svg>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection('skills')}
            className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 text-lg transition-colors"
          >
            {content.header.skills}
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 text-lg transition-colors"
          >
            {content.header.projects}
          </button>
          <button 
            onClick={handleHireMe}
            disabled={isLoading}
            className={`
              px-8 py-3 rounded-md transition-colors
              ${isLoading 
                ? 'bg-gray-400 cursor-not-allowed text-white' 
                : 'bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 border border-primary-600 dark:border-primary-400 hover:bg-primary-50 dark:hover:bg-gray-700'
              }
            `}
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Gönderiliyor...</span>
              </div>
            ) : (
              content.header.hireMe
            )}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span className={`w-full h-0.5 bg-gray-600 dark:bg-gray-300 mb-1 transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''
            }`}></span>
            <span className={`w-full h-0.5 bg-gray-600 dark:bg-gray-300 mb-1 transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}></span>
            <span className={`w-full h-0.5 bg-gray-600 dark:bg-gray-300 transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''
            }`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <nav className="px-4 py-4 space-y-4">
            <button 
              onClick={() => {
                scrollToSection('skills');
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 text-lg transition-colors"
            >
              {content.header.skills}
            </button>
            <button 
              onClick={() => {
                scrollToSection('projects');
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 text-lg transition-colors"
            >
              {content.header.projects}
            </button>
            <button 
              onClick={() => {
                handleHireMe();
                setIsMobileMenuOpen(false);
              }}
              disabled={isLoading}
              className={`
                w-full px-4 py-3 rounded-md transition-colors text-center
                ${isLoading 
                  ? 'bg-gray-400 cursor-not-allowed text-white' 
                  : 'bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 border border-primary-600 dark:border-primary-400 hover:bg-primary-50 dark:hover:bg-gray-700'
                }
              `}
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Gönderiliyor...</span>
                </div>
              ) : (
                content.header.hireMe
              )}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
