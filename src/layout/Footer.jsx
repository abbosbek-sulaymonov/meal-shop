import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Github, Twitter, Facebook, Instagram } from 'lucide-react';
import classes from './styles/footer.module.css';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col l4 m6 s12">
            <h5 className={classes.footerTitle}>Meal Shop</h5>
            <p className={classes.footerText}>
              Discover delicious recipes from around the world. Your culinary journey starts here with our vast
              collection of meals and cooking guides.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col l2 m6 s12">
            <h5 className={classes.footerTitle}>Quick Links</h5>
            <ul className={classes.linkList}>
              <li>
                <Link to="/" className={classes.footerLink}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className={classes.footerLink}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/content" className={classes.footerLink}>
                  Content
                </Link>
              </li>
              <li>
                <Link to="/category" className={classes.footerLink}>
                  Categories
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="col l3 m6 s12">
            <h5 className={classes.footerTitle}>Popular Categories</h5>
            <ul className={classes.linkList}>
              <li>
                <Link to="/category/beef" className={classes.footerLink}>
                  Beef
                </Link>
              </li>
              <li>
                <Link to="/category/chicken" className={classes.footerLink}>
                  Chicken
                </Link>
              </li>
              <li>
                <Link to="/category/dessert" className={classes.footerLink}>
                  Dessert
                </Link>
              </li>
              <li>
                <Link to="/category/vegetarian" className={classes.footerLink}>
                  Vegetarian
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col l3 m6 s12">
            <h5 className={classes.footerTitle}>Contact Us</h5>
            <ul className={classes.contactList}>
              <li className={classes.contactItem}>
                <Mail size={18} />
                <span>info@mealshop.com</span>
              </li>
              <li className={classes.contactItem}>
                <Phone size={18} />
                <span>+998 90 123 45 67</span>
              </li>
              <li className={classes.contactItem}>
                <MapPin size={18} />
                <span>Tashkent, Uzbekistan</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className={classes.socialLinks}>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={classes.socialIcon}>
                <Github size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={classes.socialIcon}>
                <Twitter size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={classes.socialIcon}>
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={classes.socialIcon}>
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className={classes.footerCopyright}>
        <div className="container">
          <div className={classes.copyrightContent}>
            <span>© {new Date().getFullYear()} Meal Shop. All rights reserved.</span>
            <div className={classes.copyrightLinks}>
              <Link to="/privacy" className={classes.copyrightLink}>
                Privacy Policy
              </Link>
              <Link to="/terms" className={classes.copyrightLink}>
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
