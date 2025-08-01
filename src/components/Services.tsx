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
          animation: 'textGlow 4s ease-in-out infinite, gradientShift 8s ease-in-out infinite'
        }}>
          השירותים שלנו
        </h2>

        {/* Grid שירותים */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem'
        }}>
          {services.map((service, index) => (
            <div
              key={service.id}
              data-id={service.id}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(168, 85, 247, 0.3)',
                borderRadius: '16px',
                padding: '2rem',
                textAlign: 'center',
                transition: 'all 0.4s ease',
                backdropFilter: 'blur(10px)',
                cursor: 'pointer',
                opacity: visibleCards.includes(service.id) ? 1 : 0,
                transform: visibleCards.includes(service.id) ? 'translateY(0)' : 'translateY(50px)',
                animation: visibleCards.includes(service.id) ? `slideInUp 0.6s ease-out ${index * 0.1}s both` : 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 25px 50px rgba(168, 85, 247, 0.4)';
                e.currentTarget.style.border = '1px solid rgba(168, 85, 247, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.border = '1px solid rgba(168, 85, 247, 0.3)';
              }}
            >
              {/* אייקון מקצועי */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '1.5rem'
              }}>
                <div style={{
                  width: '5rem',
                  height: '5rem',
                  background: 'linear-gradient(135deg, #a855f7, #8b5cf6)',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '2.5rem',
                  animation: `pulse 3s ease-in-out infinite ${index * 0.2}s`,
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 8px 32px rgba(168, 85, 247, 0.3)'
                }}>
                  {/* אייקון מקצועי */}
                  <span style={{
                    animation: `float 4s ease-in-out infinite ${index * 0.3}s`,
                    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
                  }}>
                    {service.icon}
                  </span>
                  {/* Glow effect */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)',
                    animation: `glow 2s ease-in-out infinite ${index * 0.4}s`
                  }} />
                </div>
              </div>
              
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                textAlign: 'center',
                marginBottom: '0.5rem',
                color: '#ffffff',
                animation: `fadeInUp 0.8s ease-out ${index * 0.1 + 0.3}s both`
              }}>{service.title}</h3>
              
              <p style={{
                fontSize: '0.9rem',
                color: '#9ca3af',
                textAlign: 'center',
                lineHeight: 1.6,
                animation: `fadeInUp 0.8s ease-out ${index * 0.1 + 0.5}s both`
              }}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes slideInUp {
          0% { 
            opacity: 0; 
            transform: translateY(50px); 
          }
          100% { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes pulse {
          0%, 100% { 
            transform: scale(1); 
            box-shadow: 0 0 20px rgba(168, 85, 247, 0.3); 
          }
          50% { 
            transform: scale(1.05); 
            box-shadow: 0 0 30px rgba(168, 85, 247, 0.6); 
          }
        }
        
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px); 
          }
          50% { 
            transform: translateY(-8px); 
          }
        }
        
        @keyframes glow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        
        @keyframes gradientShift {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        
        @keyframes textGlow {
          0%, 100% { 
            text-shadow: 0 0 30px rgba(168, 85, 247, 0.5); 
          }
          50% { 
            text-shadow: 0 0 50px rgba(168, 85, 247, 0.8); 
          }
        }
        
        @keyframes fadeInUp {
          0% { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          100% { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
