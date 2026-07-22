import React from 'react';
import { motion } from 'framer-motion';
import styles from './FeatureCard.module.css';

export default function FeatureCard({ icon, title, description, index }) {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(14, 165, 233, 0.2)' }}
      viewport={{ once: true, margin: '-100px' }}
    >
      <div className={styles.iconWrapper}>
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
}
