import React, { useEffect, useState } from "react";

const services = [
  {
    id: 1,
    title: "בניית אתרים",
    description: "פיתוח אתרים מותאמים אישית עם חוויית משתמש מדויקת וביצועים אופטימליים.",
    icon: "🌐"
  },
  {
    id: 2,
    title: "קידום אתרים (SEO)",
    description: "אופטימיזציה מתקדמת לשיפור מיקומים והגדלת תנועת גולשים אורגנית.",
    icon: "📈"
  },
  {
    id: 3,
    title: "ניהול קמפיינים",
    description: "פרסום ממוקד ומבוסס דאטה בגוגל, פייסבוק ורשתות נוספות.",
    icon: "🎯"
  },
  {
    id: 4,
    title: "עיצוב UX/UI",
    description: "עיצובים מודרניים וחדשניים שמייצרים חוויות משתמש ייחודיות.",
    icon: "🎨"
  },
  {
    id: 5,
    title: "אנליטיקה ודאטה",
    description: "דוחות מתקדמים ומעקב ביצועים לצורך אופטימיזציה שוטפת.",
    icon: "📊"
  },
  {
    id: 6,
    title: "אסטרטגיה דיגיטלית",
    description: "בניית תוכנית פעולה מלאה שמביאה תוצאות אמיתיות.",
    icon: "🚀"
  },
];

const Services: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
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
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = parseInt(entry.target.getAttribute('data-id') || '0');
            setVisibleCards(prev => {
              if (!prev.includes(cardId)) {
                return [...prev, cardId];
              }
              return prev;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('[data-id]');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" style={{
      position: 'relative',
      padding: isMobile ? '3rem 0' : '5rem 0',
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
        maxWidth: '1400px',
        margin: '0 auto',
        padding: isMobile ? '0 1rem' : '0 30px',
        position: 'relative',
        zIndex: 2
      }}>
        {/* כותרת */}
        <h2 style={{
          fontFamily: 'Orbitron, monospace',
          fontSize: isMobile ? '2rem' : '3rem',
          fontWeight: 900,
          textAlign: 'center',
          marginBottom: '1rem',
          color: '#ffffff',
          textShadow: '0 0 30px rgba(168, 85, 247, 0.5)',
          animation: 'textGlow 3s ease-in-out infinite'
        }}>
          השירותים שלנו
        </h2>

        <p style={{
          fontFamily: 'Rajdhani, sans-serif',
          fontSize: isMobile ? '1rem' : '1.2rem',
          textAlign: 'center',
          marginBottom: '3rem',
          color: '#cbd5e1',
          maxWidth: '800px',
          marginLeft: 'auto',
          marginRight: 'auto',
          lineHeight: 1.6
        }}>
          פתרונות דיגיטליים מקיפים שמביאים תוצאות אמיתיות לעסק שלכם
        </p>

        {/* כרטיסי שירותים */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: isMobile ? '1.5rem' : '2rem',
          marginTop: '2rem'
        }}>
          {services.map((service, index) => (
            <div
              key={service.id}
              data-id={service.id}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(168, 85, 247, 0.2)',
                borderRadius: '16px',
                padding: isMobile ? '1.5rem' : '2rem',
                textAlign: 'center',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease',
                transform: visibleCards.includes(service.id) ? 'translateY(0)' : 'translateY(50px)',
                opacity: visibleCards.includes(service.id) ? '1' : '0',
                animation: visibleCards.includes(service.id) ? `slideInUp 0.6s ease-out ${index * 0.1}s both` : 'none',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.5)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(168, 85, 247, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.2)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* אייקון מונפש */}
              <div style={{
                width: isMobile ? '4rem' : '5rem',
                height: isMobile ? '4rem' : '5rem',
                background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(139, 92, 246, 0.2))',
                borderRadius: '16px',
                margin: '0 auto 1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: isMobile ? '2rem' : '2.5rem',
                position: 'relative',
                animation: 'float 6s ease-in-out infinite',
                border: '1px solid rgba(168, 85, 247, 0.3)'
              }}>
                <span style={{
                  animation: 'pulse 2s ease-in-out infinite',
                  display: 'block'
                }}>
                  {service.icon}
                </span>
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: '100%',
                  height: '100%',
                  background: 'radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%)',
                  transform: 'translate(-50%, -50%)',
                  borderRadius: '50%',
                  animation: 'glow 3s ease-in-out infinite'
                }} />
              </div>

              {/* תוכן */}
              <h3 style={{
                fontFamily: 'Rajdhani, sans-serif',
                fontSize: isMobile ? '1.3rem' : '1.5rem',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '1rem',
                textShadow: '0 0 20px rgba(168, 85, 247, 0.3)'
              }}>
                {service.title}
              </h3>

              <p style={{
                fontFamily: 'Rajdhani, sans-serif',
                fontSize: isMobile ? '0.9rem' : '1rem',
                color: '#cbd5e1',
                lineHeight: 1.6,
                margin: 0
              }}>
                {service.description}
              </p>

              {/* אפקט זוהר */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: '-100%',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.1), transparent)',
                transition: 'left 0.5s ease'
              }} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes slideInUp {
          0% { opacity: 0; transform: translateY(50px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }
        
        @keyframes glow {
          0%, 100% { opacity: 0.3; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.6; transform: translate(-50%, -50%) scale(1.2); }
        }
        
        @keyframes gradientShift {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        
        @keyframes textGlow {
          0%, 100% { text-shadow: 0 0 30px rgba(168, 85, 247, 0.5); }
          50% { text-shadow: 0 0 50px rgba(168, 85, 247, 0.8); }
        }

        @media (max-width: 768px) {
          .services-title {
            font-size: 2rem !important;
          }
          
          .services-subtitle {
            font-size: 1rem !important;
          }
          
          .services-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          
          .service-card {
            padding: 1.5rem !important;
          }
          
          .service-icon {
            width: 4rem !important;
            height: 4rem !important;
            font-size: 2rem !important;
          }
          
          .service-title {
            font-size: 1.3rem !important;
          }
          
          .service-description {
            font-size: 0.9rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
