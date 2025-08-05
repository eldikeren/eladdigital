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
      padding: isMobile ? '3rem 0' : '5rem 0',
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
        background: 'radial-gradient(circle at 30% 20%, rgba(168, 85, 247, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
        zIndex: 1,
        animation: 'gradientShift 15s ease-in-out infinite'
      }} />

      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: isMobile ? '0 1rem' : '0 2rem',
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
          תיק עבודות
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
          פרויקטים נבחרים שמדגימים את היכולות והניסיון שלנו בפיתוח דיגיטלי
        </p>

        {/* גריד פרויקטים */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: isMobile ? '1.5rem' : '2rem',
          marginTop: '2rem'
        }}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              data-id={project.id}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(168, 85, 247, 0.2)',
                borderRadius: '16px',
                padding: isMobile ? '1.5rem' : '2rem',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease',
                transform: visibleProjects.includes(project.id) ? 'translateY(0)' : 'translateY(50px)',
                opacity: visibleProjects.includes(project.id) ? '1' : '0',
                animation: visibleProjects.includes(project.id) ? `slideInUp 0.6s ease-out ${index * 0.1}s both` : 'none',
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
              {/* תמונה או אייקון */}
              <div style={{
                width: '100%',
                height: isMobile ? '200px' : '250px',
                borderRadius: '12px',
                marginBottom: '1.5rem',
                overflow: 'hidden',
                position: 'relative',
                background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(139, 92, 246, 0.1))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {project.thumbnail ? (
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '12px'
                    }}
                  />
                ) : (
                  <div style={{
                    fontSize: isMobile ? '3rem' : '4rem',
                    animation: 'pulse 2s ease-in-out infinite',
                    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
                  }}>
                    {project.icon}
                  </div>
                )}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(45deg, rgba(168, 85, 247, 0.1), transparent)',
                  borderRadius: '12px'
                }} />
              </div>

              {/* תוכן */}
              <div style={{
                textAlign: 'right',
                direction: 'rtl'
              }}>
                <h3 style={{
                  fontFamily: 'Rajdhani, sans-serif',
                  fontSize: isMobile ? '1.2rem' : '1.4rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '0.8rem',
                  textShadow: '0 0 20px rgba(168, 85, 247, 0.3)'
                }}>
                  {project.title}
                </h3>

                <p style={{
                  fontFamily: 'Rajdhani, sans-serif',
                  fontSize: isMobile ? '0.9rem' : '1rem',
                  color: '#cbd5e1',
                  lineHeight: 1.6,
                  marginBottom: '1.5rem',
                  direction: 'rtl',
                  textAlign: 'right'
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
                      key={tagIndex}
                      style={{
                        background: 'rgba(168, 85, 247, 0.2)',
                        color: '#a855f7',
                        padding: '0.3rem 0.8rem',
                        borderRadius: '20px',
                        fontSize: isMobile ? '0.7rem' : '0.8rem',
                        fontWeight: 600,
                        border: '1px solid rgba(168, 85, 247, 0.3)',
                        backdropFilter: 'blur(10px)'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* כפתור צפייה */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: 'linear-gradient(135deg, #a855f7, #8b5cf6)',
                      border: 'none',
                      borderRadius: '8px',
                      padding: isMobile ? '0.6rem 1.2rem' : '0.8rem 1.5rem',
                      fontFamily: 'Rajdhani, sans-serif',
                      fontSize: isMobile ? '0.8rem' : '0.9rem',
                      fontWeight: 600,
                      color: 'white',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      textDecoration: 'none',
                      position: 'relative',
                      overflow: 'hidden',
                      width: '100%',
                      justifyContent: 'center'
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

        @media (max-width: 768px) {
          .portfolio-title {
            font-size: 2rem !important;
          }
          
          .portfolio-subtitle {
            font-size: 1rem !important;
          }
          
          .portfolio-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          
          .project-card {
            padding: 1.5rem !important;
          }
          
          .project-image {
            height: 200px !important;
          }
          
          .project-title {
            font-size: 1.2rem !important;
          }
          
          .project-description {
            font-size: 0.9rem !important;
          }
          
          .project-button {
            font-size: 0.8rem !important;
            padding: 0.6rem 1.2rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Portfolio;
