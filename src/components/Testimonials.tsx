import React, { useEffect, useState } from "react";

const testimonials = [
  {
    text: "צוות מקצועי ברמה הגבוהה ביותר! קיבלנו אתר מדהים שממיר בצורה יוצאת דופן, והקמפיינים שלהם שינו לנו את כל המשחק.",
    name: "דנה לוי",
    position: "מנהלת שיווק, StartupX",
    avatar: "👩‍💼",
    rating: 5
  },
  {
    text: "העבודה איתם הייתה חוויה יוצאת דופן. השירות האכפתיות, והיכולת להוציא לפועל בדיוק מה שדמיינו – פשוט וואו!",
    name: "רועי כהן",
    position: "מנכ\"ל, DigitalPro",
    avatar: "👨‍💼",
    rating: 5
  },
  {
    text: "הם שילבו עיצוב חדשני עם טכנולוגיה מתקדמת והצליחו להעלות את ההמרות שלנו בלמעלה מ-200%. מומלץ בחום!",
    name: "לירון מזרחי",
    position: "בעלים, EcomStore",
    avatar: "👨‍💻",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
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
          // Animation will be handled by CSS
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('testimonials');
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
    <section id="testimonials" style={{
      padding: isMobile ? '4rem 1rem' : '5rem 0',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%)',
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
        background: 'radial-gradient(circle at 30% 20%, rgba(168, 85, 247, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
        zIndex: 1,
        animation: 'gradientShift 15s ease-in-out infinite'
      }} />

      <div style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '1200px',
        margin: '0 auto',
        padding: isMobile ? '0 1rem' : '0 2rem'
      }}>
        
        {/* כותרת */}
        <div style={{
          textAlign: 'center',
          marginBottom: isMobile ? '3rem' : '4rem',
          animation: 'fadeInUp 1s ease-out 0.3s both'
        }}>
          <h2 style={{
            fontSize: isMobile ? '2rem' : '3rem',
            fontWeight: 900,
            color: '#ffffff',
            marginBottom: '1rem',
            textShadow: '0 0 30px rgba(168, 85, 247, 0.5)',
            direction: 'rtl',
            unicodeBidi: 'bidi-override'
          }}>
            מה הלקוחות שלנו אומרים
          </h2>
          <p style={{
            fontSize: isMobile ? '1rem' : '1.2rem',
            color: '#cbd5e1',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: 1.6,
            wordWrap: 'break-word',
            overflowWrap: 'break-word'
          }}>
            עדויות אמיתיות מלקוחות מרוצים על השירות והתוצאות
          </p>
        </div>

        {/* רשת העדויות */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: isMobile ? '2rem' : '2rem',
          animation: 'fadeInUp 1s ease-out 0.6s both'
        }}>
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '20px',
                padding: isMobile ? '1.5rem' : '2rem',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease',
                animation: `fadeInUp 0.8s ease-out ${0.9 + index * 0.2}s both`,
                wordWrap: 'break-word',
                overflowWrap: 'break-word'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(168, 85, 247, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* טקסט העדות */}
              <p style={{
                fontSize: isMobile ? '0.9rem' : '1.1rem',
                lineHeight: 1.7,
                color: '#e2e8f0',
                marginBottom: '1.5rem',
                fontStyle: 'italic',
                direction: 'rtl',
                textAlign: 'right',
                wordWrap: 'break-word',
                overflowWrap: 'break-word'
              }}>
                "{testimonial.text}"
              </p>

              {/* מידע על הלקוח */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                justifyContent: 'flex-end'
              }}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end'
                }}>
                  <h4 style={{
                    fontSize: isMobile ? '1rem' : '1.1rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '0.25rem',
                    wordWrap: 'break-word',
                    overflowWrap: 'break-word'
                  }}>
                    {testimonial.name}
                  </h4>
                  <p style={{
                    fontSize: isMobile ? '0.8rem' : '0.9rem',
                    color: '#a855f7',
                    wordWrap: 'break-word',
                    overflowWrap: 'break-word'
                  }}>
                    {testimonial.position}
                  </p>
                </div>
                
                {/* אווטאר */}
                <div style={{
                  width: isMobile ? '3rem' : '4rem',
                  height: isMobile ? '3rem' : '4rem',
                  background: 'linear-gradient(135deg, #a855f7, #8b5cf6)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: isMobile ? '1.5rem' : '2rem',
                  boxShadow: '0 5px 15px rgba(168, 85, 247, 0.3)',
                  animation: 'pulse 2s ease-in-out infinite'
                }}>
                  {testimonial.avatar}
                </div>
              </div>

              {/* דירוג כוכבים */}
              <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
                marginTop: '1rem',
                gap: '0.25rem'
              }}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: isMobile ? '1rem' : '1.2rem',
                      color: '#fbbf24',
                      animation: `starGlow ${1 + i * 0.1}s ease-in-out infinite`
                    }}
                  >
                    ⭐
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.8; }
        }
        
        @keyframes starGlow {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        
        @keyframes gradientShift {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
