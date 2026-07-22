import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

export default function Hero({ title, subtitle, buttons = [], backgroundStyle = 'default' }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className={`${styles.hero} ${styles[backgroundStyle]}`}>
      <div className={styles.floatingElements}>
        <motion.div className={styles.float1} animate={{ y: [0, -30, 0] }} transition={{ duration: 4, repeat: Infinity }} />
        <motion.div className={styles.float2} animate={{ y: [0, 30, 0] }} transition={{ duration: 5, repeat: Infinity }} />
        <motion.div className={styles.float3} animate={{ y: [0, -20, 0] }} transition={{ duration: 6, repeat: Infinity }} />
      </div>

      <div className={styles.container}>
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <h1>{title}</h1>
          </motion.div>

          <motion.p variants={itemVariants} className={styles.subtitle}>
            {subtitle}
          </motion.p>

          <motion.div className={styles.buttonGroup} variants={itemVariants}>
            {buttons.map((btn, idx) => (
              <Link
                key={idx}
                to={btn.href}
                className={`${styles.button} ${styles[btn.type || 'primary']}`}
              >
                {btn.label}
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
