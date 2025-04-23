import React, { useState } from 'react';
import MenuOverlay from './MenuOverlay';
import './HamburgerMenu.scss';
import { useEffect } from 'react';

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);
  return (
    <>
      <div className="topnav">
        
        <div >
          <a href='/' >
          <img className="logo" src="/assets/icons/3d-modeling.svg" alt="Web Development" />

          </a>
        
          
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <span className="icon">
            <i></i>
            <i></i>
          </span>
        </div>
      </div>

      <MenuOverlay isOpen={menuOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default HamburgerMenu;
