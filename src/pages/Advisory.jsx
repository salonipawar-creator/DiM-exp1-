import React from 'react';
import { motion } from 'framer-motion';
import { advisories } from '../data/dummyData';
import Hero from '../components/Hero';
import styles from './Advisory.module.css';

export default function Advisory() {
  const stakeholders = [
    {
      key: 'citizens',
      title: 'Citizens',
      icon: '👥',
      color: 'blue',
      description: 'Essential guidelines for personal safety during heatwaves',
    },
    {
      key: 'farmers',
      title: 'Farmers',
      icon: '👨‍🌾',
      color: 'green',
      description: 'Agricultural practices to protect crops and livestock',
    },
    {
      key: 'hospitals',
      title: 'Hospitals & Medical',
      icon: '🏥',
      color: 'red',
      description: 'Healthcare preparedness and treatment protocols',
    },
    {
      key: 'government',
      title: 'Government Authorities',
      icon: '🏛️',
      color: 'orange',
      description: 'Policy implementation and emergency management',
    },
  ];

  return (
    <div>
      <Hero
        title="Heat Alert Advisories"
        subtitle="Tailored recommendations for different stakeholders to prepare and respond to extreme heat"
        backgroundStyle="default"
      />

      {/* Emergency Banner */}
      <section className={styles.emergencyBanner}>
        <motion.div
          className={styles.bannerContent}
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className={styles.bannerIcon}>🚨</div>
          <div className={styles.bannerText}>
            <h2>RED ALERT</h2>
            <p>Extreme Heat Expected Next 48 Hours</p>
          </div>
          <div className={styles.bannerSubtext}>
            <p>Multiple regions reporting dangerous temperatures</p>
          </div>
        </motion.div>
      </section>

      <div className={styles.container}>
        {/* Advisories Section */}
        <section className={styles.advisoriesSection}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={styles.sectionHeader}
          >
            <h2>Stakeholder Advisories</h2>
            <p>Customized recommendations for every community member</p>
          </motion.div>

          <div className={styles.advisoriesGrid}>
            {stakeholders.map((stakeholder, idx) => (
              <motion.div
                key={stakeholder.key}
                className={`${styles.advisoryCard} ${styles[stakeholder.color]}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={styles.advisoryHeader}>
                  <span className={styles.advisoryIcon}>{stakeholder.icon}</span>
                  <div>
                    <h3>{stakeholder.title}</h3>
                    <p className={styles.advisoryDesc}>{stakeholder.description}</p>
                  </div>
                </div>

                <div className={styles.advisoryContent}>
                  <ul className={styles.advisoryList}>
                    {advisories[stakeholder.key].map((advice, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05, duration: 0.3 }}
                        viewport={{ once: true }}
                      >
                        <span className={styles.bullet}>✓</span>
                        {advice}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Alert Levels */}
        <section className={styles.alertLevelsSection}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={styles.sectionHeader}
          >
            <h2>Alert Levels & Response</h2>
            <p>Understanding our classification system</p>
          </motion.div>

          <div className={styles.alertLevelsGrid}>
            <motion.div
              className={`${styles.alertLevel} ${styles.red}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <h3>🔴 Red Alert</h3>
              <p className={styles.alertTemp}>Temperature: Above 40°C</p>
              <p className={styles.alertDesc}>Extreme Heat Emergency</p>
              <ul className={styles.actions}>
                <li>Stay indoors</li>
                <li>Avoid outdoor work</li>
                <li>Seek emergency help if needed</li>
                <li>Activate cooling centers</li>
              </ul>
            </motion.div>

            <motion.div
              className={`${styles.alertLevel} ${styles.orange}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <h3>🟠 Orange Alert</h3>
              <p className={styles.alertTemp}>Temperature: 35-40°C</p>
              <p className={styles.alertDesc}>Severe Heat Warning</p>
              <ul className={styles.actions}>
                <li>Limit outdoor activities</li>
                <li>Drink plenty of water</li>
                <li>Check on vulnerable people</li>
                <li>Prepare cooling plans</li>
              </ul>
            </motion.div>

            <motion.div
              className={`${styles.alertLevel} ${styles.yellow}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <h3>🟡 Yellow Alert</h3>
              <p className={styles.alertTemp}>Temperature: 30-35°C</p>
              <p className={styles.alertDesc}>Heat Advisory</p>
              <ul className={styles.actions}>
                <li>Take precautions</li>
                <li>Stay hydrated</li>
                <li>Reschedule outdoor events</li>
                <li>Monitor weather updates</li>
              </ul>
            </motion.div>

            <motion.div
              className={`${styles.alertLevel} ${styles.green}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <h3>🟢 Green</h3>
              <p className={styles.alertTemp}>Temperature: Below 30°C</p>
              <p className={styles.alertDesc}>Normal Conditions</p>
              <ul className={styles.actions}>
                <li>No special precautions</li>
                <li>Regular activities safe</li>
                <li>Standard health protocols</li>
                <li>Normal operations</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Response Checklist */}
        <section className={styles.checklistSection}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={styles.sectionHeader}
          >
            <h2>Pre-Heat Season Preparation Checklist</h2>
            <p>Get ready before extreme heat arrives</p>
          </motion.div>

          <div className={styles.checklistGrid}>
            <motion.div
              className={styles.checklistCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h4>🏠 Home Preparation</h4>
              <ul>
                <li>Service air conditioning systems</li>
                <li>Seal windows and doors</li>
                <li>Install window blinds/shades</li>
                <li>Stock water supply (2-3 liters per person)</li>
                <li>Prepare backup cooling systems</li>
              </ul>
            </motion.div>

            <motion.div
              className={styles.checklistCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h4>⚠️ Health Precautions</h4>
              <ul>
                <li>Get medical checkup</li>
                <li>Stock essential medications</li>
                <li>Prepare first aid kit</li>
                <li>Know heat illness symptoms</li>
                <li>Identify medical facilities</li>
              </ul>
            </motion.div>

            <motion.div
              className={styles.checklistCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h4>💼 Community Preparedness</h4>
              <ul>
                <li>Identify vulnerable populations</li>
                <li>Plan emergency shelter locations</li>
                <li>Establish alert systems</li>
                <li>Train emergency response teams</li>
                <li>Coordinate with authorities</li>
              </ul>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
