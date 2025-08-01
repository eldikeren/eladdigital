import React, { useEffect, useState } from "react";

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" style={{
      position: 'relative',
      padding: '5rem 0',
      background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #1a1a2e 75%, #0f0f23 100%)',
      color: 'white',
      overflow: 'hidden'
    }}>
      
      {/* רקע מונפש */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 20% 30%, rgba(168, 85, 247, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.05) 0%, transparent 50%)',
        zIndex: 1,
        animation: 'gradientShift 15s ease-in-out infinite'
      }} />

      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 30px',
        position: 'relative',
        zIndex: 2
      }}>
        
        {/* כותרת */}
        <h2 style={{
          fontFamily: 'Orbitron, monospace',
          fontSize: '3rem',
          fontWeight: 900,
          textAlign: 'center',
          marginBottom: '3rem',
          background: 'linear-gradient(135deg, #ffffff, #a855f7, #8b5cf6)',
          backgroundSize: '200% 200%',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textShadow: '0 0 30px rgba(168, 85, 247, 0.5)',
          animation: 'textGlow 4s ease-in-out infinite, gradientShift 8s ease-in-out infinite',
          direction: 'rtl'
        }}>
          למה לבחור בנו؟
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center'
        }}>
          
          {/* טקסט */}
          <div style={{
            animation: isVisible ? 'fadeInLeft 1s ease-out' : 'none'
          }}>
            <p style={{
              fontFamily: 'Rajdhani, sans-serif',
              fontSize: '1.3rem',
              color: '#e2e8f0',
              lineHeight: 1.8,
              marginBottom: '2rem',
              textAlign: 'right',
              direction: 'rtl'
            }}>
              עם רקע אמנותי בכתיבה ומוזיקה, ניסיון של מעל 25 שנה בחדשנות ויזמות, וניהול קמפיינים דיגיטליים בהיקפים של מיליונים – אנחנו הופכים רעיונות לדיגיטל שמייצר הצלחה.
            </p>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'flex-end'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1rem',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                border: '1px solid rgba(168, 85, 247, 0.2)',
                transition: 'all 0.3s ease',
                width: '100%',
                justifyContent: 'flex-end'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateX(-5px) scale(1.02)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.border = '1px solid rgba(168, 85, 247, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateX(0) scale(1)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.border = '1px solid rgba(168, 85, 247, 0.2)';
              }}
              >
                <span style={{
                  fontFamily: 'Rajdhani, sans-serif',
                  fontSize: '1.1rem',
                  color: '#ffffff',
                  fontWeight: 600
                }}>
                  ניסיון של מעל 25 שנה
                </span>
                <span style={{
                  fontSize: '2rem',
                  animation: 'pulse 2s ease-in-out infinite'
                }}>
                  🎯
                </span>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1rem',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                border: '1px solid rgba(168, 85, 247, 0.2)',
                transition: 'all 0.3s ease',
                width: '100%',
                justifyContent: 'flex-end'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateX(-5px) scale(1.02)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.border = '1px solid rgba(168, 85, 247, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateX(0) scale(1)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.border = '1px solid rgba(168, 85, 247, 0.2)';
              }}
              >
                <span style={{
                  fontFamily: 'Rajdhani, sans-serif',
                  fontSize: '1.1rem',
                  color: '#ffffff',
                  fontWeight: 600
                }}>
                  חדשנות ויזמות מתמדת
                </span>
                <span style={{
                  fontSize: '2rem',
                  animation: 'pulse 2s ease-in-out infinite 0.5s'
                }}>
                  🚀
                </span>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1rem',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                border: '1px solid rgba(168, 85, 247, 0.2)',
                transition: 'all 0.3s ease',
                width: '100%',
                justifyContent: 'flex-end'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateX(-5px) scale(1.02)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.border = '1px solid rgba(168, 85, 247, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateX(0) scale(1)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.border = '1px solid rgba(168, 85, 247, 0.2)';
              }}
              >
                <span style={{
                  fontFamily: 'Rajdhani, sans-serif',
                  fontSize: '1.1rem',
                  color: '#ffffff',
                  fontWeight: 600
                }}>
                  רקע אמנותי בכתיבה ומוזיקה
                </span>
                <span style={{
                  fontSize: '2rem',
                  animation: 'pulse 2s ease-in-out infinite 1s'
                }}>
                  💡
                </span>
              </div>
            </div>
          </div>

          {/* כרטיסי הישגים */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2rem',
            animation: isVisible ? 'fadeInRight 1s ease-out 0.3s both' : 'none'
          }}>
            {[
              { number: "200+", label: "פרויקטים הושלמו", icon: "🏆" },
              { number: "25+", label: "שנות ניסיון", icon: "⭐" },
              { number: "98%", label: "שביעות רצון", icon: "💎" },
              { number: "24/7", label: "תמיכה זמינה", icon: "🛡️" }
            ].map((achievement, index) => (
              <div
                key={achievement.label}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(168, 85, 247, 0.2)',
                  borderRadius: '20px',
                  padding: '2rem',
                  textAlign: 'center',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease',
                  animation: `fadeInUp 0.8s ease-out ${0.6 + index * 0.1}s both`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(168, 85, 247, 0.3)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                }}
              >
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '1rem',
                  animation: `orbit 4s ease-in-out infinite ${index * 0.5}s`
                }}>
                  {achievement.icon}
                </div>
                <div style={{
                  fontFamily: 'Orbitron, monospace',
                  fontSize: '2.5rem',
                  fontWeight: 900,
                  color: '#a855f7',
                  marginBottom: '0.5rem',
                  textShadow: '0 0 20px rgba(168, 85, 247, 0.5)',
                  animation: 'textGlow 3s ease-in-out infinite'
                }}>
                  {achievement.number}
                </div>
                <div style={{
                  fontFamily: 'Rajdhani, sans-serif',
                  fontSize: '1rem',
                  color: '#e2e8f0',
                  fontWeight: 600
                }}>
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInLeft {
          0% { opacity: 0; transform: translateX(-50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes fadeInRight {
          0% { opacity: 0; transform: translateX(50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        @keyframes orbit {
          0%, 100% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.1); }
        }
        
        @keyframes gradientShift {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        
        @keyframes textGlow {
          0%, 100% { text-shadow: 0 0 20px rgba(168, 85, 247, 0.5); }
          50% { text-shadow: 0 0 40px rgba(168, 85, 247, 0.8); }
        }
      `}</style>
    </section>
  );
};

export default About;
