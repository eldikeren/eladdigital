import React, { useEffect, useState } from "react";

const CTA: React.FC = () => {
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

    const element = document.getElementById('contact');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" style={{
      position: 'relative',
      padding: '5rem 0',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 25%, #2d2d2d 50%, #1a1a1a 75%, #0a0a0a 100%)',
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
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 30px',
        position: 'relative',
        zIndex: 2,
        textAlign: 'center'
      }}>
        
        {/* כותרת */}
        <h2 style={{
          fontFamily: 'Orbitron, monospace',
          fontSize: '3rem',
          fontWeight: 900,
          marginBottom: '1.5rem',
          background: 'linear-gradient(135deg, #ffffff, #a855f7, #8b5cf6)',
          backgroundSize: '200% 200%',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textShadow: '0 0 30px rgba(168, 85, 247, 0.5)',
          animation: 'textGlow 4s ease-in-out infinite, gradientShift 8s ease-in-out infinite',
          direction: 'rtl',
          textAlign: 'center'
        }}>
          מוכן לשנות את המציאות הדיגיטלית שלך?
        </h2>

        <p style={{
          fontFamily: 'Rajdhani, sans-serif',
          fontSize: '1.2rem',
          color: '#e2e8f0',
          marginBottom: '3rem',
          lineHeight: 1.7,
          direction: 'rtl',
          textAlign: 'center'
        }}>
          בואו נבנה יחד את הפרויקט הדיגיטלי הבא שלכם ונהפוך רעיונות להצלחה
        </p>

        {/* כפתור ראשי */}
        <div style={{
          marginBottom: '4rem',
          animation: isVisible ? 'fadeInUp 1s ease-out' : 'none'
        }}>
          <a
            href="mailto:info@eladkeren.com"
            style={{
              background: 'linear-gradient(135deg, #a855f7, #8b5cf6)',
              border: 'none',
              borderRadius: '50px',
              padding: '1.5rem 3rem',
              fontFamily: 'Rajdhani, sans-serif',
              fontSize: '1.3rem',
              fontWeight: 700,
              color: 'white',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              boxShadow: '0 15px 35px rgba(168, 85, 247, 0.4)',
              textDecoration: 'none',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
              e.currentTarget.style.boxShadow = '0 25px 50px rgba(168, 85, 247, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 15px 35px rgba(168, 85, 247, 0.4)';
            }}
          >
            <span style={{
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
              transition: 'left 0.6s',
              animation: 'shimmer 2s ease-in-out infinite'
            }} />
            התחל פרויקט חדש
            <span style={{ fontSize: '1.5rem' }}>🚀</span>
          </a>
        </div>

        {/* שיטות יצירת קשר */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginTop: '3rem'
        }}>
          
          {/* אימייל */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(168, 85, 247, 0.2)',
            borderRadius: '20px',
            padding: '2rem',
            textAlign: 'center',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease',
            animation: isVisible ? 'fadeInUp 1s ease-out 0.2s both' : 'none'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
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
              animation: 'pulse 3s ease-in-out infinite'
            }}>
              📧
            </div>
            <h3 style={{
              fontFamily: 'Rajdhani, sans-serif',
              fontSize: '1.3rem',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '0.5rem'
            }}>
              אימייל
            </h3>
            <a
              href="mailto:info@eladkeren.com"
              style={{
                fontFamily: 'Rajdhani, sans-serif',
                fontSize: '1.1rem',
                color: '#a855f7',
                textDecoration: 'none',
                fontWeight: 600,
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.textShadow = '0 0 10px rgba(168, 85, 247, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#a855f7';
                e.currentTarget.style.textShadow = 'none';
              }}
            >
              info@eladkeren.com
            </a>
          </div>

          {/* טלפון */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(168, 85, 247, 0.2)',
            borderRadius: '20px',
            padding: '2rem',
            textAlign: 'center',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease',
            animation: isVisible ? 'fadeInUp 1s ease-out 0.4s both' : 'none'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
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
              animation: 'pulse 3s ease-in-out infinite 0.5s'
            }}>
              📱
            </div>
            <h3 style={{
              fontFamily: 'Rajdhani, sans-serif',
              fontSize: '1.3rem',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '0.5rem'
            }}>
              טלפון
            </h3>
            <a
              href="tel:+972557070007"
              style={{
                fontFamily: 'Rajdhani, sans-serif',
                fontSize: '1.1rem',
                color: '#a855f7',
                textDecoration: 'none',
                fontWeight: 600,
                transition: 'all 0.3s ease',
                direction: 'ltr',
                unicodeBidi: 'bidi-override'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.textShadow = '0 0 10px rgba(168, 85, 247, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#a855f7';
                e.currentTarget.style.textShadow = 'none';
              }}
            >
              +972-55-7070007
            </a>
          </div>

          {/* וואטסאפ */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(168, 85, 247, 0.2)',
            borderRadius: '20px',
            padding: '2rem',
            textAlign: 'center',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease',
            animation: isVisible ? 'fadeInUp 1s ease-out 0.6s both' : 'none'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
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
              animation: 'pulse 3s ease-in-out infinite 1s'
            }}>
              💬
            </div>
            <h3 style={{
              fontFamily: 'Rajdhani, sans-serif',
              fontSize: '1.3rem',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '0.5rem'
            }}>
              וואטסאפ
            </h3>
            <a
              href="https://wa.me/972557070007"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'Rajdhani, sans-serif',
                fontSize: '1.1rem',
                color: '#a855f7',
                textDecoration: 'none',
                fontWeight: 600,
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.textShadow = '0 0 10px rgba(168, 85, 247, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#a855f7';
                e.currentTarget.style.textShadow = 'none';
              }}
            >
              שלח הודעה
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        
        @keyframes gradientShift {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        
        @keyframes textGlow {
          0%, 100% { text-shadow: 0 0 30px rgba(168, 85, 247, 0.5); }
          50% { text-shadow: 0 0 50px rgba(168, 85, 247, 0.8); }
        }
      `}</style>
    </section>
  );
};

export default CTA;
