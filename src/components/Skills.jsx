import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

const Skills = () => {
  const { content } = useLanguage();
  const { isDark } = useTheme();

  return (
    <section id="skills" className="px-4 sm:px-6 lg:px-8 xl:px-32 py-8 sm:py-12 lg:py-16">
      <h2 style={{
        fontWeight: 600,
        fontSize: 'clamp(32px, 5vw, 48px)',
        lineHeight: '1.1',
        color: isDark ? '#AEBCCF' : '#1F2937',
        marginBottom: 'clamp(40px, 8vw, 75px)',
        textAlign: 'left'
      }}>
        {content.skills.title}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16 xl:gap-32 justify-items-center lg:justify-items-start">
        {content.skills.items.map((skill, index) => (
          <div key={index} className="w-full max-w-xs text-center lg:text-left">
            <h3 style={{
              fontSize: 'clamp(24px, 4vw, 30px)',
              lineHeight: '1.1',
              color: isDark ? '#B7AAFF' : '#4731D3',
              marginBottom: 'clamp(20px, 4vw, 28px)',
              textAlign: 'inherit'
            }}>
              {skill.name}
            </h3>
            <p style={{
              fontWeight: 400,
              fontSize: 'clamp(11px, 2vw, 12px)',
              lineHeight: '1.3',
              color: isDark ? '#FFFFFF' : '#6B7280',
              textAlign: 'inherit'
            }}>
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
