import React, { useState, useEffect } from "react";

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const menuItems = [
    { href: "#contact", text: "צור קשר" },
    { href: "#testimonials", text: "המלצות" },
    { href: "#portfolio", text: "עבודות" },
    { href: "#services", text: "שירותים" },
    { href: "#about", text: "אודות" },
    { href: "#home", text: "בית" }
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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
        padding: isMobile ? '0.8rem 1rem' : '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* לוגו עם lightning effect */}
        <div style={{
          fontFamily: 'Orbitron, monospace',
          fontSize: isMobile ? '1.2rem' : '1.5rem',
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
        {!isMobile && (
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
                  transition: 'width 0.3s ease'
                }} />
              </a>
            ))}
          </div>
        )}

        {/* כפתור תפריט מובייל */}
        {isMobile && (
          <button
            onClick={toggleMenu}
            style={{
              background: 'none',
              border: 'none',
              color: '#ffffff',
              fontSize: '1.5rem',
              cursor: 'pointer',
              padding: '0.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              transition: 'all 0.3s ease',
              zIndex: 1001
            }}
          >
            <div style={{
              width: '25px',
              height: '3px',
              background: '#ffffff',
              transition: 'all 0.3s ease',
              transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
            }} />
            <div style={{
              width: '25px',
              height: '3px',
              background: '#ffffff',
              transition: 'all 0.3s ease',
              opacity: isMenuOpen ? '0' : '1'
            }} />
            <div style={{
              width: '25px',
              height: '3px',
              background: '#ffffff',
              transition: 'all 0.3s ease',
              transform: isMenuOpen ? 'rotate(-45deg) translate(7px, -6px)' : 'none'
            }} />
          </button>
        )}
      </div>

      {/* תפריט מובייל */}
      {isMobile && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: 'rgba(15, 15, 35, 0.98)',
          backdropFilter: 'blur(15px)',
          borderTop: '1px solid rgba(168, 85, 247, 0.2)',
          transform: isMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
          opacity: isMenuOpen ? '1' : '0',
          visibility: isMenuOpen ? 'visible' : 'hidden',
          transition: 'transform 0.3s ease, opacity 0.3s ease',
          zIndex: 999
        }}>
          <div style={{
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            {menuItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                style={{
                  color: '#e2e8f0',
                  textDecoration: 'none',
                  fontFamily: 'Rajdhani, sans-serif',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  padding: '0.8rem 1rem',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease',
                  textAlign: 'center',
                  opacity: isMenuOpen ? '1' : '0',
                  transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: isMenuOpen ? `${index * 0.1}s` : '0s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(168, 85, 247, 0.1)';
                  e.currentTarget.style.color = '#a855f7';
                  e.currentTarget.style.transform = 'translateX(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#e2e8f0';
                  e.currentTarget.style.transform = 'translateX(0)';
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
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes textGlow {
          0%, 100% { text-shadow: 0 0 30px rgba(168, 85, 247, 0.5); }
          50% { text-shadow: 0 0 50px rgba(168, 85, 247, 0.8); }
        }
        
        @keyframes fadeInDown {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          .nav-logo {
            font-size: 1.2rem !important;
          }
          
          .nav-menu {
            display: none !important;
          }
          
          .nav-mobile-menu {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navigation;
