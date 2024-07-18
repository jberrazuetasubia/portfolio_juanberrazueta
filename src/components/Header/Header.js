import React, { useRef, useState, useEffect, createRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import './Header.scss';

const items = [
  {
    name: "Home",
    color: "#f44336",
    path: "/"
  },
  {
    name: "Web Development",
    color: "#e91e63",
    path: "/web-development"
  },
  {
    name: "Graphic Design",
    color: "#9c27b0",
    path: "/graphic-design"
  },
  {
    name: "3D Modeling",
    color: "#673ab7",
    path: "/3d-modeling"
  },
  {
    name: "Contact",
    color: "#ffc000",
    path: "/contact"
  }
];

const Header = () => {
  const location = useLocation();
  const $root = useRef();
  const $indicator1 = useRef();
  const $indicator2 = useRef();
  const $items = useRef(items.map(() => createRef()));
  const [active, setActive] = useState(0);

  const animate = useCallback(() => {
    const menuOffset = $root.current.getBoundingClientRect();
    const activeItem = $items.current[active].current;
    const { width, height, top, left } = activeItem.getBoundingClientRect();

    const settings = {
      x: left - menuOffset.x,
      y: top - menuOffset.y,
      width: width,
      height: height,
      backgroundColor: items[active].color,
      ease: 'elastic.out(.7, .7)',
      duration: 0.8
    };

    gsap.to($indicator1.current, {
      ...settings,
    });

    gsap.to($indicator2.current, {
      ...settings,
      duration: 1
    });
  }, [active]);

  useEffect(() => {
    const currentPath = location.pathname;
    const activeIndex = items.findIndex(item => item.path === currentPath);
    setActive(activeIndex !== -1 ? activeIndex : 0);
  }, [location]);

  useEffect(() => {
    animate();
    window.addEventListener('resize', animate);

    return () => {
      window.removeEventListener('resize', animate);
    };
  }, [animate]);

  return (
    <div ref={$root} className="menu">
      {items.map((item, index) => (
        <Link
          key={item.name}
          ref={$items.current[index]}
          className={`item ${active === index ? 'active' : ''}`}
          onMouseEnter={() => setActive(index)}
          to={item.path}
        >
          {item.name}
        </Link>
      ))}
      <div ref={$indicator1} className="indicator" />
      <div ref={$indicator2} className="indicator" />
    </div>
  );
};

export default Header;
