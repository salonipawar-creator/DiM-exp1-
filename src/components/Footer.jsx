import React from 'react';
import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.column}>
            <h4>HeatShield AI</h4>
            <p>AI-powered climate intelligence platform for early warning and protection against extreme heat events.</p>
          </div>

          <div className={styles.column}>
            <h5>Quick Links</h5>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="/prediction">AI Prediction</Link></li>
              <li><Link to="/weather-stations">Weather Stations</Link></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h5>Resources</h5>
            <ul>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h5>Follow Us</h5>
            <div className={styles.socials}>
              <a href="#github" title="GitHub">
                <FiGithub size={20} />
              </a>
              <a href="#linkedin" title="LinkedIn">
                <FiLinkedin size={20} />
              </a>
              <a href="#email" title="Email">
                <FiMail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottom}>
          <p>&copy; 2024 HeatShield AI. All rights reserved.</p>
          <p>Designed with ❤️ for climate protection</p>
        </div>
      </div>
    </footer>
  );
}
