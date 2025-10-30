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
          opacity: 0.3
        }}
      >
        <source src="/start.mp4" type="video/mp4" />
      </video>

      {/* רקע מונפש */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, rgba(15, 15, 35, 0.8) 0%, rgba(26, 26, 46, 0.6) 50%, rgba(22, 33, 62, 0.8) 100%)',
        zIndex: 1
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


      {/* תוכן הירו */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        textAlign: 'center',
        maxWidth: '1200px',
        width: '100%',
        animation: 'fadeInUp 1s ease-out',
        paddingBottom: isMobile ? '4rem' : '2rem',
        paddingTop: isMobile ? '6rem' : '0' // מרווח לניווט במובייל
      }}>
        
        <h1 style={{
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
          fontSize: isMobile ? '2rem' : '4rem',
          fontWeight: 700,
          color: '#ffffff',
          marginBottom: '1.5rem',
          lineHeight: isMobile ? '1.2' : '1.1',
          wordWrap: 'break-word',
          overflowWrap: 'break-word',
          letterSpacing: '-0.02em'
        }}>
          פתרונות דיגיטליים מתקדמים
          <div style={{
            height: isMobile ? '2rem' : '5rem',
            position: 'relative',
            overflow: 'hidden',
            marginTop: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <span style={{
              color: '#a855f7',
              fontSize: isMobile ? '2rem' : '4rem',
              fontWeight: 700,
              display: 'block',
              width: '100%',
              textAlign: 'center',
              wordWrap: 'break-word',
              overflowWrap: 'break-word',
              letterSpacing: '-0.02em'
            }}>
              {rotatingWords[currentWord]}
            </span>
          </div>
        </h1>

        <p style={{
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
          fontSize: isMobile ? '1rem' : '1.25rem',
          color: '#e2e8f0',
          marginBottom: '2rem',
          fontWeight: 400,
          animation: 'fadeInUp 1s ease-out 0.3s both',
          wordWrap: 'break-word',
          overflowWrap: 'break-word',
          lineHeight: 1.6,
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          עם ניסיון של מעל 25 שנה בחדשנות ויזמות, אנחנו מפתחים פתרונות דיגיטליים מתקדמים שמניבים תוצאות מוכחות.
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
          marginBottom: isMobile ? '2rem' : '0'
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
