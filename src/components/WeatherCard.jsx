import React from 'react';
import { motion } from 'framer-motion';
import styles from './WeatherCard.module.css';

export default function WeatherCard({ weather }) {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      viewport={{ once: true }}
    >
      <div className={styles.header}>
        <h4>{weather.city}</h4>
        <span className={styles.temp}>{weather.temperature}°C</span>
      </div>
      
      <div className={styles.conditions}>
        <div className={styles.condition}>
          <span className={styles.label}>Status</span>
          <span className={styles.value}>{weather.status}</span>
        </div>
        <div className={styles.condition}>
          <span className={styles.label}>Humidity</span>
          <span className={styles.value}>{weather.humidity}%</span>
        </div>
      </div>

      <div className={styles.footer}>
        <p className={styles.condition_text}>{weather.condition}</p>
        <div className={`${styles.riskBadge} ${styles[weather.riskLevel]}`}>
          {weather.riskLevel.toUpperCase()}
        </div>
      </div>
    </motion.div>
  );
}
