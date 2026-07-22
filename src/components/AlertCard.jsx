import React from 'react';
import { motion } from 'framer-motion';
import styles from './AlertCard.module.css';

export default function AlertCard({ alert }) {
  const colorMap = {
    red: '#ef4444',
    orange: '#ff8c42',
    yellow: '#fbbf24',
  };

  return (
    <motion.div
      className={`${styles.card} ${styles[alert.type]}`}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ x: 5 }}
      viewport={{ once: true }}
    >
      <div className={styles.header}>
        <span className={styles.icon}>{alert.icon}</span>
        <div>
          <h4>{alert.title}</h4>
          <p className={styles.time}>{alert.time}</p>
        </div>
      </div>
      <div className={styles.body}>
        <p className={styles.location}>{alert.location}</p>
        <p className={styles.temp}>🌡️ {alert.temperature}°C</p>
        <p className={styles.description}>{alert.description}</p>
      </div>
    </motion.div>
  );
}
