import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SOCIAL_LINKS } from '../data/musicData';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const isAboutPage = location.pathname === '/about';

  const scrollToSection = (id: string) => {
    if (isAboutPage) {
      // Return to homepage then scroll
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed-nav py-4 px-6 flex justify-between items-center">
      <div className="flex items-center">
        <Link to="/" className="text-xl font-bold text-white flex items-center">
          Aakash Gangji <i className="fas fa-check-circle verified-badge" title="Verified Artist"></i>
        </Link>
      </div>

      <ul className="hidden md:flex space-x-6 text-white font-medium text-sm">
        <li>
          <Link
            to="/about"
            className={`hover:underline ${isAboutPage ? 'text-blue-400 font-semibold' : ''}`}
          >
            About
          </Link>
        </li>
        <li>
          <button
            onClick={() => scrollToSection('stream')}
            className="hover:underline text-white font-medium focus:outline-none"
          >
            Stream
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection('contact')}
            className="hover:underline text-white font-medium focus:outline-none"
          >
            Contact Me
          </button>
        </li>
      </ul>

      <div className="flex space-x-4">
        {SOCIAL_LINKS.map((social) => (
          <a
            key={social.platform}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon text-xl"
            aria-label={social.platform}
          >
            <i className={social.iconClass}></i>
          </a>
        ))}
      </div>
    </nav>
  );
};
