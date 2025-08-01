import React, { useState, useEffect } from "react";

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { href: "#contact", text: "צור קשר" },
    { href: "#testimonials", text: "המלצות" },
    { href: "#portfolio", text: "עבודות" },
    { href: "#services", text: "שירותים" },
    { href: "#about", text: "אודות" },
    { href: "#home", text: "בית" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: scrolled ? 'rgba(15, 15, 35, 0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      transition: 'all 0.3s ease',
      borderBottom: scrolled ? '1px solid rgba(168, 85, 247, 0.2)' : 'none'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* לוגו עם lightning effect */}
        <div style={{
          fontFamily: 'Orbitron, monospace',
          fontSize: '1.5rem',
          fontWeight: 900,
          color: '#ffffff',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <span style={{
            background: 'linear-gradient(90deg, #ffffff, #a855f7, #8b5cf6, #ffffff)',
            backgroundSize: '200% 100%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'lightning 3s ease-in-out infinite',
            display: 'inline-block'
          }}>
            ELADDIGITAL
          </span>
        </div>

        {/* תפריט דסקטופ */}
        <div style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'center'
        }}>
          {menuItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              style={{
                color: '#e2e8f0',
                textDecoration: 'none',
                fontFamily: 'Rajdhani, sans-serif',
                fontSize: '1rem',
                fontWeight: 600,
                transition: 'all 0.3s ease',
                position: 'relative',
                padding: '0.5rem 0'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#a855f7';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#e2e8f0';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {item.text}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '0%',
                height: '2px',
                background: 'linear-gradient(90deg, #a855f7, #8b5cf6)',
                transition: 'width 0.3s ease',
                borderRadius: '1px'
              }} />
            </a>
          ))}
        </div>

        {/* כפתור מובייל */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: '#ffffff',
            fontSize: '1.5rem',
            cursor: 'pointer',
            padding: '0.5rem',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#a855f7';
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#ffffff';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* תפריט מובייל */}
      {isMenuOpen && (
        <div style={{
          background: 'rgba(15, 15, 35, 0.98)',
          backdropFilter: 'blur(10px)',
          borderTop: '1px solid rgba(168, 85, 247, 0.2)',
          padding: '1rem 0',
          animation: 'slideDown 0.3s ease-out'
        }}>
          <div style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 2rem'
          }}>
            {menuItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                style={{
                  display: 'block',
                  color: '#e2e8f0',
                  textDecoration: 'none',
                  fontFamily: 'Rajdhani, sans-serif',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  padding: '1rem 0',
                  borderBottom: '1px solid rgba(168, 85, 247, 0.1)',
                  transition: 'all 0.3s ease',
                  animation: `fadeInUp 0.3s ease-out ${index * 0.1}s both`
                }}
                onClick={() => setIsMenuOpen(false)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#a855f7';
                  e.currentTarget.style.paddingLeft = '1rem';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#e2e8f0';
                  e.currentTarget.style.paddingLeft = '0';
                }}
              >
                {item.text}
              </a>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @keyframes lightning {
          0%, 100% { background-position: 200% 0; }
          50% { background-position: -200% 0; }
        }
        
        @keyframes textGlow {
          0%, 100% { text-shadow: 0 0 10px rgba(168, 85, 247, 0.5); }
          50% { text-shadow: 0 0 20px rgba(168, 85, 247, 0.8); }
        }
        
        @keyframes slideDown {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-button { display: block !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navigation;
