import React, { useEffect, useState } from "react";

const projects = [
  {
    id: 1,
    title: "חברת יבוא בינלאומית - אמטיסט",
    description: "אתר תדמית מקצועי לחברת יבוא כימיקלים מתקדמים לתעשייה הישראלית עם עיצוב מודרני ומידע מקיף על המוצרים.",
    tags: ["Web Design", "React", "Corporate"],
    icon: "🏭",
    link: "https://amatist.vercel.app/",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 2,
    title: "עסקים קטנים - קירו יפו",
    description: "אתר תדמית לעסקים קטנים עם עיצוב נקי ומודרני המתאים לקהל היעד המקומי.",
    tags: ["Web Design", "React", "Small Business"],
    icon: "🏪",
    link: "https://kiro-jaffa.hellofine.dev/",
    thumbnail: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 3,
    title: "אות-אות - אפליקציה מבוססת בינה מלאכותית",
    description: "אפליקציה מבוססת בינה מלאכותית ללימוד קריאה לילדים עם טכנולוגיה מתקדמת וחוויית משתמש ייחודית.",
    tags: ["AI", "React", "Machine Learning"],
    icon: "🤖",
    link: "https://otot.app",
    thumbnail: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 4,
    title: "עמוד אומן - ניר פרידמן",
    description: "אתר תדמית מקצועי לשחקן, זמר ומדבב ניר פרידמן עם עיצוב מודרני וחוויית משתמש מרשימה.",
    tags: ["Web Design", "React", "Portfolio"],
    icon: "🎭",
    link: "https://nir-friedman.vercel.app/",
    thumbnail: "/images/nir-friedman-screenshot.jpg"
  },
  {
    id: 5,
    title: "אתר תדמית יוקרתי",
    description: "עיצוב ופיתוח אתר תדמית לחברת הייטק בינלאומית עם חוויית משתמש מרשימה.",
    tags: ["UX/UI", "React", "SEO"],
    icon: "🏢"
  },
  {
    id: 6,
    title: "קמפיין דיגיטלי ממוקד",
    description: "ניהול קמפיין דיגיטלי שהביא לעלייה של 300% בהמרות תוך חודש.",
    tags: ["Google Ads", "Analytics", "Campaigns"],
    icon: "📈"
  },
  {
    id: 7,
    title: "פלטפורמת E-Commerce",
    description: "בניית חנות מקוונת עם מערכת סליקה מתקדמת וחוויית רכישה מהירה.",
    tags: ["Next.js", "Stripe", "E-Commerce"],
    icon: "🛒"
  },
  {
    id: 8,
    title: "אפליקציה מובייל",
    description: "פיתוח אפליקציה מובייל עם ביצועים אופטימליים וחוויית משתמש ייחודית.",
    tags: ["React Native", "Mobile", "UI/UX"],
    icon: "📱"
  }
];

const Portfolio: React.FC = () => {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectId = parseInt(entry.target.getAttribute('data-id') || '0');
            setVisibleProjects(prev => {
              if (!prev.includes(projectId)) {
                return [...prev, projectId];
              }
              return prev;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const projects = document.querySelectorAll('[data-id]');
    projects.forEach(project => observer.observe(project));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" style={{
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
          animation: 'textGlow 4s ease-in-out infinite, gradientShift 8s ease-in-out infinite'
        }}>
          תיק עבודות
        </h2>

        {/* Grid פרויקטים */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '2rem'
        }}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              data-id={project.id}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(168, 85, 247, 0.2)',
                borderRadius: '20px',
                padding: '2rem',
                transition: 'all 0.4s ease',
                backdropFilter: 'blur(10px)',
                cursor: 'pointer',
                opacity: visibleProjects.includes(project.id) ? 1 : 0,
                transform: visibleProjects.includes(project.id) ? 'translateY(0)' : 'translateY(50px)',
                animation: visibleProjects.includes(project.id) ? `slideInUp 0.6s ease-out ${index * 0.2}s both` : 'none',
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
              {/* תמונה או אייקון פרויקט */}
              {project.thumbnail ? (
                <div style={{
                  marginBottom: '1.5rem',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '15px',
                  animation: `pulse 3s ease-in-out infinite ${index * 0.3}s`
                }}>
                  <img 
                    src={project.thumbnail} 
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '200px',
                      objectFit: 'cover',
                      borderRadius: '15px',
                      border: '2px solid rgba(168, 85, 247, 0.3)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.border = '2px solid rgba(168, 85, 247, 0.6)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.border = '2px solid rgba(168, 85, 247, 0.3)';
                    }}
                  />
                </div>
              ) : (
                <div style={{
                  fontSize: '4rem',
                  marginBottom: '1.5rem',
                  textAlign: 'center',
                  animation: `pulse 3s ease-in-out infinite ${index * 0.3}s`
                }}>
                  {project.icon}
                </div>
              )}

              {/* כותרת פרויקט */}
              <h3 style={{
                fontFamily: 'Rajdhani, sans-serif',
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '1rem',
                textAlign: 'right',
                direction: 'rtl'
              }}>
                {project.title}
              </h3>

              {/* תיאור פרויקט */}
              <p style={{
                fontFamily: 'Rajdhani, sans-serif',
                fontSize: '1rem',
                color: '#e2e8f0',
                lineHeight: 1.6,
                marginBottom: '1.5rem',
                textAlign: 'right',
                direction: 'rtl'
              }}>
                {project.description}
              </p>

              {/* תגיות */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                marginBottom: '1.5rem',
                justifyContent: 'flex-end'
              }}>
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tag}
                    style={{
                      background: 'rgba(168, 85, 247, 0.2)',
                      color: '#a855f7',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      border: '1px solid rgba(168, 85, 247, 0.3)',
                      transition: 'all 0.3s ease',
                      animation: `fadeInUp 0.8s ease-out ${index * 0.2 + tagIndex * 0.1}s both`
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(168, 85, 247, 0.3)';
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(168, 85, 247, 0.2)';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* כפתור צפייה */}
              <div style={{
                textAlign: 'center'
              }}>
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: 'linear-gradient(135deg, #a855f7, #8b5cf6)',
                      border: 'none',
                      borderRadius: '25px',
                      padding: '0.75rem 1.5rem',
                      fontFamily: 'Rajdhani, sans-serif',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      color: 'white',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      textDecoration: 'none',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
                      e.currentTarget.style.boxShadow = '0 10px 25px rgba(168, 85, 247, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = 'none';
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
                    צפו בפרויקט
                    <span style={{ fontSize: '1rem' }}>🔗</span>
                  </a>
                ) : (
                  <a
                    href="#contact"
                    style={{
                      background: 'linear-gradient(135deg, #a855f7, #8b5cf6)',
                      border: 'none',
                      borderRadius: '25px',
                      padding: '0.75rem 1.5rem',
                      fontFamily: 'Rajdhani, sans-serif',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      color: 'white',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      textDecoration: 'none',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
                      e.currentTarget.style.boxShadow = '0 10px 25px rgba(168, 85, 247, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = 'none';
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
                    צפו בפרויקט
                  </a>
                )}
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
            opacity: 1; 
          }
          50% { 
            transform: scale(1.1); 
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

export default Portfolio;
