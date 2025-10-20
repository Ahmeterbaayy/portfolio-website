import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

const Profile = () => {
  const { content } = useLanguage();
  const { isDark } = useTheme();

  return (
    <section style={{ padding: '50px 0', position: 'relative' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 32px' }}>
        <div className="absolute top-0 left-8 right-8 h-px bg-purple-100"></div>
        
        <h2 style={{
          fontWeight: 600,
          fontSize: '48px',
          lineHeight: '48px',
          color: isDark ? '#AEBCCF' : '#1F2937',
          marginBottom: '75px',
          marginTop: '89px',
          textAlign: 'left',
          marginLeft: 0
        }}>
          {content.profile.title}
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-[412px_1fr_577px] gap-8 lg:gap-14 justify-start">
          <div>
            <h3 style={{
              fontSize: '30px',
              lineHeight: '28px',
              color: isDark ? '#B7AAFF' : '#4731D3',
              marginBottom: '49px'
            }}>
              {content.profile.profileSection}
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-2 sm:gap-x-32 gap-y-9">
              <span style={{
                fontWeight: 600,
                fontSize: '18px',
                lineHeight: '36px',
                letterSpacing: '0.18px',
                color: isDark ? '#FFFFFF' : '#000000'
              }}>
                {content.profile.fields.birthDate}
              </span>
              <span style={{
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '36px',
                letterSpacing: '0.18px',
                color: isDark ? '#FFFFFF' : '#000000'
              }}>
                {content.profile.values.birthDate}
              </span>
              
              <span style={{
                fontWeight: 600,
                fontSize: '18px',
                lineHeight: '36px',
                letterSpacing: '0.18px',
                color: isDark ? '#FFFFFF' : '#000000'
              }}>
                {content.profile.fields.city}
              </span>
              <span style={{
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '36px',
                letterSpacing: '0.18px',
                color: isDark ? '#FFFFFF' : '#000000'
              }}>
                {content.profile.values.city}
              </span>
              
              <span style={{
                fontWeight: 600,
                fontSize: '18px',
                lineHeight: '36px',
                letterSpacing: '0.18px',
                color: isDark ? '#FFFFFF' : '#000000'
              }}>
                {content.profile.fields.education}
              </span>
              <span style={{
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '36px',
                letterSpacing: '0.18px',
                color: isDark ? '#FFFFFF' : '#000000',
                whiteSpace: 'pre-line'
              }}>
                {content.profile.values.education}
              </span>
              
              <span style={{
                fontWeight: 600,
                fontSize: '18px',
                lineHeight: '36px',
                letterSpacing: '0.18px',
                color: isDark ? '#FFFFFF' : '#000000'
              }}>
                {content.profile.fields.preferredRole}
              </span>
              <span style={{
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '36px',
                letterSpacing: '0.18px',
                color: isDark ? '#FFFFFF' : '#000000'
              }}>
                {content.profile.values.preferredRole}
              </span>
            </div>
          </div>
          
          <div></div>
          
          <div>
            <h3 style={{
              fontSize: '30px',
              lineHeight: '24px',
              color: isDark ? '#B7AAFF' : '#4731D3',
              marginBottom: '39px'
            }}>
              {content.profile.aboutSection}
            </h3>
            <p style={{
              fontWeight: 400,
              fontSize: '18px',
              lineHeight: '150%',
              color: isDark ? '#FFFFFF' : '#6B7280',
              whiteSpace: 'pre-line'
            }}>
              {content.profile.aboutText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
