import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './styles/header.module.css';
import { Home, Info, List, Menu } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Initialize Materialize sidenav
    const elems = document.querySelectorAll('.sidenav');
    window.M.Sidenav.init(elems, {
      edge: 'left',
      draggable: true,
    });

    return () => {
      // Cleanup sidenav instances
      const instances = window.M.Sidenav.getInstance(elems[0]);
      if (instances) {
        instances.destroy();
      }
    };
  }, []);

  const closeMobileMenu = () => {
    const instance = window.M.Sidenav.getInstance(document.getElementById('mobile-menu'));
    if (instance) {
      instance.close();
    }
  };

  return (
    <>
      <nav className={`${classes.header} ${scrolled ? classes.scrolled : ''}`}>
        <div className="nav-wrapper">
          <div className="container">
            <a href="/" className="brand-logo black-text">
              Meal Shop
            </a>
            <a href="#" data-target="mobile-menu" className={`sidenav-trigger ${classes.menuButton}`}>
              <Menu size={24} strokeWidth={2} />
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/content" className={({ isActive }) => (isActive ? 'active' : '')}>
                  Content
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Side Navigation */}
      <ul className="sidenav" id="mobile-menu">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMobileMenu}>
            <Home size={20} strokeWidth={2} className={classes.mobileIcon} />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMobileMenu}>
            <Info size={20} strokeWidth={2} className={classes.mobileIcon} />
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/content" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMobileMenu}>
            <List size={20} strokeWidth={2} className={classes.mobileIcon} />
            Content
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Header;
