import React, { useEffect, useState } from "react";

const rotatingWords = ["בניית אתרים", "ניהול קמפיינים", "חדשנות דיגיטלית"];

const Hero: React.FC = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [isMobile]);

  return (
    <section id="home" style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #1a1a2e 75%, #0f0f23 100%)',
      color: 'white',
      overflow: 'hidden',
      padding: isMobile ? '1rem' : '2rem'
    }}>
      
      {/* רקע מונפש */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 30% 20%, rgba(168, 85, 247, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
        zIndex: 1,
        animation: 'gradientShift 10s ease-in-out infinite'
      }} />

      {/* Glow אינטראקטיבי - רק בדסקטופ */}
      {!isMobile && (
        <div style={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)',
          left: mousePosition.x - 150,
          top: mousePosition.y - 150,
          pointerEvents: 'none',
          zIndex: 2,
          transition: 'all 0.2s ease-out'
        }} />
      )}

      {/* כרטיסי Glassmorphism מונפשים - רק בדסקטופ */}
      {!isMobile && (
        <>
          <div style={{
            position: 'absolute',
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '16px',
            padding: '1rem',
            width: '200px',
            textAlign: 'center',
            backdropFilter: 'blur(10px)',
            top: '20%',
            left: '10%',
            zIndex: 5,
            animation: 'float 6s ease-in-out infinite'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '0.5rem'
            }}>
              <div style={{
                width: '2rem',
                height: '2rem',
                background: '#a855f7',
                borderRadius: '50%',
                animation: 'pulse 2s ease-in-out infinite'
              }} />
            </div>
            <h4 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: 'white', marginBottom: '0.25rem' }}>
              UX / UI
            </h4>
            <p style={{ fontSize: '0.875rem', color: '#9ca3af' }}>
              עיצוב חוויית משתמש מודרנית
            </p>
          </div>

          <div style={{
            position: 'absolute',
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '16px',
            padding: '1rem',
            width: '200px',
            textAlign: 'center',
            backdropFilter: 'blur(10px)',
            top: '45%',
            right: '10%',
            zIndex: 5,
            animation: 'float 6s ease-in-out infinite 2s'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '0.5rem'
            }}>
              <div style={{
                width: '2rem',
                height: '2rem',
                background: '#a855f7',
                borderRadius: '50%',
                animation: 'pulse 2s ease-in-out infinite 1s'
              }} />
            </div>
            <h4 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: 'white', marginBottom: '0.25rem' }}>
              SEO
            </h4>
            <p style={{ fontSize: '0.875rem', color: '#9ca3af' }}>
              אופטימיזציה לקידום אתרים
            </p>
          </div>

          <div style={{
            position: 'absolute',
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '16px',
            padding: '1rem',
            width: '200px',
            textAlign: 'center',
            backdropFilter: 'blur(10px)',
            top: '70%',
            left: '10%',
            zIndex: 5,
            animation: 'float 6s ease-in-out infinite 4s'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '0.5rem'
            }}>
              <div style={{
                width: '2rem',
                height: '2rem',
                background: '#a855f7',
                borderRadius: '50%',
                animation: 'pulse 2s ease-in-out infinite 2s'
              }} />
            </div>
            <h4 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: 'white', marginBottom: '0.25rem' }}>
              Campaigns
            </h4>
            <p style={{ fontSize: '0.875rem', color: '#9ca3af' }}>
              ניהול קמפיינים מתקדמים
            </p>
          </div>
        </>
      )}

      {/* תוכן הירו */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        textAlign: 'center',
        maxWidth: '1200px',
        width: '100%',
        animation: 'fadeInUp 1s ease-out',
        paddingBottom: isMobile ? '12rem' : '8rem', // מרווח גדול לכרטיסי שירותים
        paddingTop: isMobile ? '6rem' : '0' // מרווח לניווט במובייל
      }}>
        
        <h1 style={{
          fontFamily: 'Orbitron, monospace',
          fontSize: isMobile ? '1.3rem' : '3.5rem',
          fontWeight: 900,
          color: '#ffffff',
          marginBottom: '1rem',
          textShadow: '0 0 30px rgba(168, 85, 247, 0.5)',
          animation: 'textGlow 3s ease-in-out infinite',
          lineHeight: isMobile ? '1.5' : '1.1',
          wordWrap: 'break-word',
          overflowWrap: 'break-word'
        }}>
          צוות עילית מקצועי
          <div style={{
            height: isMobile ? '1.8rem' : '4.5rem',
            position: 'relative',
            overflow: 'hidden',
            marginTop: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <span style={{
              color: '#a855f7',
              fontSize: isMobile ? '1.3rem' : '3.5rem',
              fontWeight: 900,
              textShadow: '0 0 30px rgba(168, 85, 247, 0.8)',
              animation: 'slideIn 0.6s ease-out',
              display: 'block',
              width: '100%',
              textAlign: 'center',
              wordWrap: 'break-word',
              overflowWrap: 'break-word'
            }}>
              {rotatingWords[currentWord]}
            </span>
          </div>
        </h1>

        <p style={{
          fontFamily: 'Rajdhani, sans-serif',
          fontSize: isMobile ? '0.8rem' : '1.6rem',
          color: '#e2e8f0',
          marginBottom: '1.5rem',
          fontWeight: 600,
          animation: 'fadeInUp 1s ease-out 0.3s both',
          wordWrap: 'break-word',
          overflowWrap: 'break-word'
        }}>
          פתרונות דיגיטליים מתקדמים
        </p>

        <p style={{
          fontFamily: 'Rajdhani, sans-serif',
          fontSize: isMobile ? '0.65rem' : '1.1rem',
          color: '#cbd5e1',
          marginBottom: '3rem',
          lineHeight: 1.7,
          maxWidth: '800px',
          marginLeft: 'auto',
          marginRight: 'auto',
          animation: 'fadeInUp 1s ease-out 0.6s both',
          padding: isMobile ? '0 0.5rem' : '0',
          wordWrap: 'break-word',
          overflowWrap: 'break-word'
        }}>
          עם רקע אמנותי בכתיבה ומוזיקה, ניסיון של מעל 25 שנה בחדשנות ויזמות,
          וניהול קמפיינים דיגיטליים בהיקפים של מיליונים – אנחנו הופכים רעיונות לדיגיטל שמייצר הצלחה.
        </p>

        {/* כפתורי פעולה */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          justifyContent: 'center',
          alignItems: 'center',
          animation: 'fadeInUp 1s ease-out 0.9s both',
          width: '100%',
          maxWidth: isMobile ? '100%' : '500px',
          margin: '0 auto',
          padding: isMobile ? '0 0.5rem' : '0',
          marginBottom: isMobile ? '4rem' : '0' // מרווח נוסף במובייל
        }}>
          <a
            href="#contact"
            style={{
              background: 'linear-gradient(135deg, #a855f7, #8b5cf6)',
              border: 'none',
              borderRadius: '50px',
              padding: isMobile ? '0.5rem 1rem' : '1rem 2.5rem',
              fontFamily: 'Rajdhani, sans-serif',
              fontSize: isMobile ? '0.7rem' : '1.1rem',
              fontWeight: 600,
              color: 'white',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              boxShadow: '0 10px 30px rgba(168, 85, 247, 0.4)',
              textDecoration: 'none',
              position: 'relative',
              overflow: 'hidden',
              width: '100%',
              justifyContent: 'center',
              wordWrap: 'break-word',
              overflowWrap: 'break-word'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(168, 85, 247, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(168, 85, 247, 0.4)';
            }}
          >
            <span style={{
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
              transition: 'left 0.5s'
            }} />
            בואו נבנה את האתר שלכם
          </a>
          <a
            href="#portfolio"
            style={{
              border: '2px solid #e2e8f0',
              borderRadius: '50px',
              padding: isMobile ? '0.5rem 1rem' : '1rem 2.5rem',
              fontFamily: 'Rajdhani, sans-serif',
              fontSize: isMobile ? '0.7rem' : '1.1rem',
              fontWeight: 600,
              color: '#e2e8f0',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              textDecoration: 'none',
              position: 'relative',
              overflow: 'hidden',
              width: '100%',
              justifyContent: 'center',
              wordWrap: 'break-word',
              overflowWrap: 'break-word'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#e2e8f0';
              e.currentTarget.style.color = '#0f0f23';
              e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#e2e8f0';
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
            }}
          >
            צפו בעבודות שלנו
          </a>
        </div>
      </div>
      
      {/* כרטיסי שירותים בתחתית */}
      <div style={{
        position: 'absolute',
        bottom: isMobile ? '1rem' : '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: isMobile ? '0.5rem' : '2rem',
        zIndex: 5,
        flexWrap: 'wrap',
        justifyContent: 'center',
        maxWidth: '90vw',
        padding: isMobile ? '0 0.5rem' : '0'
      }}>
        {[
          { title: "UX / UI", description: "עיצוב חוויית משתמש מודרנית" },
          { title: "SEO", description: "אופטימיזציה לקידום אתרים" },
          { title: "Campaigns", description: "ניהול קמפיינים מתקדמים" }
        ].map((service, index) => (
          <div
            key={service.title}
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '12px',
              padding: isMobile ? '0.4rem 0.5rem' : '1rem 1.5rem',
              textAlign: 'center',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s ease',
              animation: `fadeInUp 0.8s ease-out ${1.2 + index * 0.1}s both`,
              minWidth: isMobile ? '70px' : '150px',
              flex: '1 1 auto'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(168, 85, 247, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{
              width: isMobile ? '0.8rem' : '2rem',
              height: isMobile ? '0.8rem' : '2rem',
              background: '#a855f7',
              borderRadius: '50%',
              margin: '0 auto 0.5rem',
              animation: `pulse 2s ease-in-out infinite ${index * 0.3}s`
            }} />
            <h4 style={{ 
              fontSize: isMobile ? '0.5rem' : '1rem', 
              fontWeight: 'bold', 
              color: '#ffffff', 
              marginBottom: '0.25rem',
              wordWrap: 'break-word',
              overflowWrap: 'break-word'
            }}>
              {service.title}
            </h4>
            <p style={{ 
              fontSize: isMobile ? '0.4rem' : '0.8rem', 
              color: '#cbd5e1',
              wordWrap: 'break-word',
              overflowWrap: 'break-word'
            }}>
              {service.description}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }
        
        @keyframes gradientShift {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        
        @keyframes textGlow {
          0%, 100% { text-shadow: 0 0 30px rgba(168, 85, 247, 0.5); }
          50% { text-shadow: 0 0 50px rgba(168, 85, 247, 0.8); }
        }
        
        @keyframes slideIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 1.3rem !important;
            line-height: 1.5 !important;
          }
          
          .hero-subtitle {
            font-size: 0.8rem !important;
          }
          
          .hero-description {
            font-size: 0.65rem !important;
            padding: 0 0.5rem !important;
          }
          
          .hero-buttons {
            padding: 0 0.5rem !important;
            margin-bottom: 4rem !important;
          }
          
          .hero-button {
            font-size: 0.7rem !important;
            padding: 0.5rem 1rem !important;
          }
          
          .service-cards {
            gap: 0.5rem !important;
            padding: 0 0.5rem !important;
          }
          
          .service-card {
            padding: 0.4rem 0.5rem !important;
            min-width: 70px !important;
          }
          
          .service-icon {
            width: 0.8rem !important;
            height: 0.8rem !important;
          }
          
          .service-title {
            font-size: 0.5rem !important;
          }
          
          .service-description {
            font-size: 0.4rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
