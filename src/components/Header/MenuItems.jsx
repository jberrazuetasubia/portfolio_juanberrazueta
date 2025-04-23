import React from 'react';
import { Link } from 'react-router-dom';
import './MenuItems.scss';

const items = [
  { name: 'Home', path: '/' },
  { name: 'Web Development', path: '/web-development' },
  { name: '3D Modeling', path: '/3d-modeling' },
  { name: 'Graphic Design', path: '/graphic-design' },
  { name: 'Contact', path: '/contact' },
];

const MenuItems = ({ toggleMenu }) => (
  <ul className="main-menu">
    {items.map((item, index) => (
      <li key={item.name}>
        <Link className='name' to={item.path} onClick={toggleMenu}>
          <span className="nm">{String(index + 1).padStart(2, '0')}.</span> {item.name}
        </Link>
      </li>
    ))}
  </ul>
);

export default MenuItems;
