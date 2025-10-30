import React, { useEffect, useState } from "react";

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="about" style={{
      padding: isMobile ? '4rem 1rem' : '5rem 0',
      background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
      color: 'white',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* רקע מונפש */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 20% 30%, rgba(168, 85, 247, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
        zIndex: 1,
        animation: 'gradientShift 15s ease-in-out infinite'
      }} />

      {/* וידאו רקע */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          opacity: 0.7
        }}
      >
        <source src="/space_compressed.mp4" type="video/mp4" />
      </video>

      <div style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '1200px',
        margin: '0 auto',
        padding: isMobile ? '0 1rem' : '0 2rem'
      }}>
        
        {/* כותרת */}
        <h2 style={{
          fontSize: isMobile ? '2.5rem' : '3.5rem',
          fontWeight: 900,
          color: '#ffffff',
          marginBottom: '2rem',
          textAlign: 'center',
          textShadow: '0 0 30px rgba(168, 85, 247, 0.5)',
          animation: 'fadeInUp 1s ease-out 0.3s both',
          direction: 'rtl',
          unicodeBidi: 'bidi-override'
        }}>
          למה לבחור בנו?
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: isMobile ? '3rem' : '4rem',
          alignItems: 'center',
          marginTop: '3rem'
        }}>
          
          {/* תוכן טקסטואלי */}
          <div style={{
            animation: isVisible ? 'fadeInLeft 1s ease-out 0.6s both' : 'none',
            direction: 'rtl',
            textAlign: 'right'
          }}>
            <p style={{
              fontSize: isMobile ? '1rem' : '1.2rem',
              lineHeight: 1.8,
              color: '#e2e8f0',
              marginBottom: '2rem',
              wordWrap: 'break-word',
              overflowWrap: 'break-word'
            }}>
              עם רקע אמנותי בכתיבה ומוזיקה, ניסיון של מעל 25 שנה בחדשנות ויזמות,
              וניהול קמפיינים דיגיטליים בהיקפים של מיליונים – אנחנו הופכים רעיונות לדיגיטל שמייצר הצלחה.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
              gap: isMobile ? '1.5rem' : '2rem',
              marginTop: '2rem'
            }}>
              {[
                { icon: '25+', title: 'שנות ניסיון', description: 'מומחיות מוכחת בפיתוח דיגיטלי' },
                { icon: '∞', title: 'חדשנות מתמדת', description: 'טכנולוגיות מתקדמות ופתרונות יצירתיים' },
                { icon: '★', title: 'יצירתיות מקצועית', description: 'גישה ייחודית לכל פרויקט' }
              ].map((highlight, index) => (
                <div
                  key={highlight.title}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '16px',
                    padding: isMobile ? '1.5rem' : '2rem',
                    textAlign: 'center',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease',
                    animation: `fadeInUp 0.8s ease-out ${0.9 + index * 0.2}s both`,
                    wordWrap: 'break-word',
                    overflowWrap: 'break-word'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(168, 85, 247, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{
                    fontSize: isMobile ? '1.5rem' : '2rem',
                    marginBottom: '1rem',
                    fontWeight: 'bold',
                    color: '#a855f7',
                    textAlign: 'center'
                  }}>
                    {highlight.icon}
                  </div>
                  <h3 style={{
                    fontSize: isMobile ? '1.1rem' : '1.3rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '0.5rem',
                    wordWrap: 'break-word',
                    overflowWrap: 'break-word'
                  }}>
                    {highlight.title}
                  </h3>
                  <p style={{
                    fontSize: isMobile ? '0.9rem' : '1rem',
                    color: '#cbd5e1',
                    lineHeight: 1.6,
                    wordWrap: 'break-word',
                    overflowWrap: 'break-word'
                  }}>
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* אלמנט ויזואלי מרכזי */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            animation: isVisible ? 'fadeInRight 1s ease-out 0.9s both' : 'none',
            position: 'relative',
            zIndex: 15
          }}>
            <div style={{
              position: 'relative',
              width: isMobile ? '200px' : '300px',
              height: isMobile ? '200px' : '300px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 15
            }}>
              {/* רקטה מרכזית */}
              <div style={{
                fontSize: isMobile ? '4rem' : '6rem',
                animation: 'pulse 3s ease-in-out infinite',
                zIndex: 5,
                position: 'relative',
                filter: 'drop-shadow(0 0 20px rgba(168, 85, 247, 0.5))'
              }}>
                🚀
              </div>

              {/* חלקיקים מסתובבים */}
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    width: '8px',
                    height: '8px',
                    background: '#a855f7',
                    borderRadius: '50%',
                    animation: `orbit ${4 + i * 0.5}s linear infinite`,
                    animationDelay: `${i * 0.5}s`,
                    top: '50%',
                    left: '50%',
                    marginTop: '-4px',
                    marginLeft: '-4px',
                    transformOrigin: `${isMobile ? '100px' : '150px'} 50%`
                  }}
                />
              ))}

              {/* נקודות אור מקצועיות */}
              {[...Array(6)].map((_, i) => (
                <div
                  key={`dot-${i}`}
                  style={{
                    position: 'absolute',
                    width: '4px',
                    height: '4px',
                    background: '#a855f7',
                    borderRadius: '50%',
                    animation: `dotGlow ${3 + i * 0.5}s ease-in-out infinite`,
                    animationDelay: `${i * 0.3}s`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    boxShadow: '0 0 10px rgba(168, 85, 247, 0.6)'
                  }}
                />
              ))}
            </div>
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
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }
        
        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(${isMobile ? '100px' : '150px'}) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(${isMobile ? '100px' : '150px'}) rotate(-360deg); }
        }
        
        @keyframes dotGlow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
        
        @keyframes gradientShift {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        
        @keyframes spaceAnimation {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
      `}</style>
    </section>
  );
};

export default About;
