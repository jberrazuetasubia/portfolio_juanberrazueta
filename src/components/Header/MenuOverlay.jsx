import React from 'react';
import MenuItems from './MenuItems';
// import ContactInfo from './ContactInfo';
import './MenuOverlay.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const MenuOverlay = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`hamenu ${isOpen ? 'open' : ''}`}>
      <div className="container">
        <div className="menu-content">
          <MenuItems toggleMenu={toggleMenu}  />
          {/* <ContactInfo /> */}
        </div>
        <div className="close-btn" onClick={toggleMenu}>
         
        <FontAwesomeIcon icon={faTimes} /> 
        </div>
      </div>
    </div>
  );
};

export default MenuOverlay;
