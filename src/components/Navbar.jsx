import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          🌡 HeatShield AI
        </Link>

        <div className={`${styles.menu} ${isOpen ? styles.active : ''}`}>
          <Link to="/" className={styles.link} onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/dashboard" className={styles.link} onClick={() => setIsOpen(false)}>
            Dashboard
          </Link>
          <Link to="/prediction" className={styles.link} onClick={() => setIsOpen(false)}>
            AI Prediction
          </Link>
          <Link to="/weather-stations" className={styles.link} onClick={() => setIsOpen(false)}>
            Weather Stations
          </Link>
          <Link to="/advisory" className={styles.link} onClick={() => setIsOpen(false)}>
            Advisories
          </Link>
          <Link to="/about" className={styles.link} onClick={() => setIsOpen(false)}>
            About
          </Link>
        </div>

        <button
          className={styles.hamburger}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
    </nav>
  );
}
