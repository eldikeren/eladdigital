import React, { useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "דנה לוי",
    title: "מנהלת שיווק, StartupX",
    quote: "צוות מקצועי ברמה הגבוהה ביותר! קיבלנו אתר מדהים שממיר בצורה יוצאת דופן, והקמפיינים שלהם שינו לנו את כל המשחק.",
    avatar: "👩‍💼"
  },
  {
    id: 2,
    name: "רועי כהן",
    title: "מנכ\"ל, DigitalPro",
    quote: "העבודה איתם הייתה חוויה יוצאת דופן. השירות, האכפתיות, והיכולת להוציא לפועל בדיוק מה שדמיינו – פשוט וואו!",
    avatar: "👨‍💼"
  },
  {
    id: 3,
    name: "לירון מזרחי",
    title: "בעלים, EcomStore",
    quote: "הם שילבו עיצוב חדשני עם טכנולוגיה מתקדמת, והצליחו להעלות את ההמרות שלנו בלמעלה מ-200%. מומלץ בחום!",
    avatar: "👨‍💻"
  }
];

const Testimonials: React.FC = () => {
  const [visibleTestimonials, setVisibleTestimonials] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const testimonialId = parseInt(entry.target.getAttribute('data-id') || '0');
            setVisibleTestimonials(prev => {
              if (!prev.includes(testimonialId)) {
                return [...prev, testimonialId];
              }
              return prev;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const testimonials = document.querySelectorAll('[data-id]');
    testimonials.forEach(testimonial => observer.observe(testimonial));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="testimonials" style={{
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
          מה הלקוחות שלנו אומרים
        </h2>

        {/* Grid עדויות */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '2rem'
        }}>
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              data-id={testimonial.id}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(168, 85, 247, 0.2)',
                borderRadius: '20px',
                padding: '2.5rem',
                transition: 'all 0.4s ease',
                backdropFilter: 'blur(10px)',
                cursor: 'pointer',
                opacity: visibleTestimonials.includes(testimonial.id) ? 1 : 0,
                transform: visibleTestimonials.includes(testimonial.id) ? 'translateY(0)' : 'translateY(50px)',
                animation: visibleTestimonials.includes(testimonial.id) ? `slideInUp 0.6s ease-out ${index * 0.2}s both` : 'none',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 25px 50px rgba(168, 85, 247, 0.3)';
                e.currentTarget.style.border = '1px solid rgba(168, 85, 247, 0.4)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.border = '1px solid rgba(168, 85, 247, 0.2)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
              }}
            >
              {/* Glow effect */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'radial-gradient(circle at 50% 0%, rgba(168, 85, 247, 0.1) 0%, transparent 70%)',
                opacity: 0,
                transition: 'opacity 0.3s ease',
                pointerEvents: 'none'
              }} />

              {/* ציטוט */}
              <div style={{
                position: 'relative',
                marginBottom: '2rem'
              }}>
                <div style={{
                  fontSize: '4rem',
                  color: '#a855f7',
                  opacity: 0.3,
                  position: 'absolute',
                  top: '-1rem',
                  right: '-1rem',
                  animation: `pulse 3s ease-in-out infinite ${index * 0.3}s`
                }}>
                  "
                </div>
                <p style={{
                  fontSize: '1.1rem',
                  color: '#e2e8f0',
                  lineHeight: 1.7,
                  fontStyle: 'italic',
                  marginTop: '1rem',
                  animation: `fadeInUp 0.8s ease-out ${index * 0.2 + 0.3}s both`
                }}>
                  {testimonial.quote}
                </p>
              </div>

              {/* פרטי הלקוח */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                animation: `fadeInUp 0.8s ease-out ${index * 0.2 + 0.5}s both`
              }}>
                <div style={{
                  width: '4rem',
                  height: '4rem',
                  background: 'linear-gradient(135deg, #a855f7, #8b5cf6)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  animation: `pulse 3s ease-in-out infinite ${index * 0.4}s`,
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  {testimonial.avatar}
                  {/* Glow effect */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)',
                    animation: `glow 2s ease-in-out infinite ${index * 0.5}s`
                  }} />
                </div>
                <div>
                  <h4 style={{
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    color: '#ffffff',
                    marginBottom: '0.25rem'
                  }}>
                    {testimonial.name}
                  </h4>
                  <p style={{
                    fontSize: '0.9rem',
                    color: '#a855f7',
                    fontWeight: 500
                  }}>
                    {testimonial.title}
                  </p>
                </div>
              </div>

              {/* כוכבים */}
              <div style={{
                display: 'flex',
                gap: '0.25rem',
                marginTop: '1rem',
                animation: `fadeInUp 0.8s ease-out ${index * 0.2 + 0.7}s both`
              }}>
                {[...Array(5)].map((_, starIndex) => (
                  <span
                    key={starIndex}
                    style={{
                      fontSize: '1.2rem',
                      color: '#fbbf24',
                      animation: `starGlow 2s ease-in-out infinite ${starIndex * 0.1}s`
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
            opacity: 0.3; 
          }
          50% { 
            transform: scale(1.1); 
            opacity: 0.5; 
          }
        }
        
        @keyframes glow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        
        @keyframes starGlow {
          0%, 100% { 
            transform: scale(1); 
            opacity: 1; 
          }
          50% { 
            transform: scale(1.2); 
            opacity: 0.8; 
          }
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

export default Testimonials;
