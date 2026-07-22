import React from 'react';
import { motion } from 'framer-motion';
import styles from './StatsCard.module.css';

export default function StatsCard({ value, label, icon, unit, trend }) {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      viewport={{ once: true }}
    >
      <div className={styles.header}>
        <span className={styles.icon}>{icon}</span>
        <h4>{label}</h4>
      </div>
      <div className={styles.value}>
        {value}
        {unit && <span className={styles.unit}>{unit}</span>}
      </div>
      {trend && (
        <div className={`${styles.trend} ${trend > 0 ? styles.up : styles.down}`}>
          {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}%
        </div>
      )}
    </motion.div>
  );
}
