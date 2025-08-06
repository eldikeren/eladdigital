import React, { useEffect, useState } from "react";

const projects = [
  {
    title: "חברת יבוא בינלאומית - אמטיסט",
    description: "עיצוב ופיתוח אתר תדמית לחברת הייטק בינלאומית עם חוויית משתמש מרשימה.",
    tags: ["UX/UI", "React", "SEO"],
    link: "https://amatist.vercel.app/",
    icon: "🏢",
    thumbnail: null
  },
  {
    title: "עסקים קטנים - קירו יפו",
    description: "בניית חנות מקוונת עם מערכת סליקה מתקדמת וחוויית רכישה מהירה.",
    tags: ["Next.js", "Stripe", "E-Commerce"],
    link: "https://kiro-jaffa.hellofine.dev/",
    icon: "🛒",
    thumbnail: null
  },
  {
    title: "קמפיין דיגיטלי ממוקד",
    description: "ניהול קמפיין דיגיטלי ממוקד באמצעות תוכנות שמבוססות על AI ML ופותחו על ידינו.",
    tags: ["Google Ads", "Analytics", "Campaigns"],
    link: "#",
    icon: "📈",
    thumbnail: "/images/seo-dashboard.jpg"
  },
  {
    title: "אות-אות - אפליקציה מבוססת בינה מלאכותית",
    description: "פיתוח אפליקציה מובייל עם ביצועים אופטימליים וחוויית משתמש ייחודית.",
    tags: ["React Native", "Mobile", "UI/UX"],
    link: "#",
    icon: "📱",
    thumbnail: null
  },
  {
    title: "עמוד אומן - ניר פרידמן",
    description: "בניית מערכת ניהול תוכן מתקדמת עם ממשק ניהול אינטואיטיבי.",
    tags: ["CMS", "Backend", "Database"],
    link: "#",
    icon: "⚙️",
    thumbnail: "/images/nir-friedman-screenshot.jpg"
  },
  {
    title: "אתר קורפורטיבי",
    description: "עיצוב ופיתוח אתר קורפורטיבי עם אסטרטגיה דיגיטלית מקיפה.",
    tags: ["Corporate", "Strategy", "Branding"],
    link: "#",
    icon: "🏛️",
    thumbnail: null
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
      padding: isMobile ? '4rem 0' : '5rem 0',
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
            תיק עבודות
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
            פרויקטים נבחרים הממחישים את היכולות והיצירתיות שלנו
          </p>
        </div>

        {/* רשת הפרויקטים */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: isMobile ? '2rem' : '2rem',
          animation: 'fadeInUp 1s ease-out 0.6s both'
        }}>
          {projects.map((project, index) => (
            <div
              key={project.title}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(168, 85, 247, 0.2)',
                borderRadius: '16px',
                padding: isMobile ? '1.5rem' : '2rem',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease',
                animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
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
