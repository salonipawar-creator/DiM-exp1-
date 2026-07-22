import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import StatsCard from '../components/StatsCard';
import styles from './Home.module.css';

export default function Home() {
  const features = [
    {
      icon: '🤖',
      title: 'AI Heatwave Prediction',
      description: 'Advanced machine learning models predict heatwaves up to 14 days in advance with 98% accuracy.',
    },
    {
      icon: '🌡️',
      title: 'Real-Time Weather Monitoring',
      description: 'Live weather data from 245+ IoT stations across India, updated every 5 minutes.',
    },
    {
      icon: '📡',
      title: 'IoT Weather Stations',
      description: 'Automated weather stations with temperature, humidity, pressure, and wind speed sensors.',
    },
    {
      icon: '🚨',
      title: 'Early Warning System',
      description: 'Get instant alerts and advisories tailored for citizens, farmers, hospitals, and authorities.',
    },
  ];

  const stats = [
    { value: '245+', label: 'Weather Stations', icon: '📡', unit: 'Active' },
    { value: '98%', label: 'Forecast Accuracy', icon: '🎯', unit: null },
    { value: '24/7', label: 'Monitoring', icon: '⏰', unit: null },
    { value: '7', label: 'Climate Regions', icon: '🗺️', unit: 'Covered' },
  ];

  const workflow = [
    { step: 'Historical Weather Data', icon: '📊' },
    { step: 'Data Cleaning', icon: '🧹' },
    { step: 'AI Analysis', icon: '🤖' },
    { step: 'Heatwave Prediction', icon: '🔮' },
    { step: 'Risk Classification', icon: '⚠️' },
    { step: 'Early Warning', icon: '🚨' },
  ];

  return (
    <div>
      <Hero
        title="Predict.
Protect.
Prevent Heatwaves."
        subtitle="AI-powered climate intelligence platform for monitoring, forecasting, and early warning of extreme heat events."
        buttons={[
          { label: 'View Dashboard', href: '/dashboard', type: 'primary' },
          { label: 'Learn More', href: '#features', type: 'secondary' },
        ]}
      />

      {/* Features Section */}
      <section className={styles.featuresSection} id="features">
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={styles.sectionHeader}
          >
            <h2>Key Features</h2>
            <p>Comprehensive climate intelligence at your fingertips</p>
          </motion.div>

          <div className={styles.featureGrid}>
            {features.map((feature, idx) => (
              <FeatureCard key={idx} {...feature} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={styles.sectionHeader}
          >
            <h2>By The Numbers</h2>
            <p>Impressive scale of our climate monitoring infrastructure</p>
          </motion.div>

          <div className={styles.statsGrid}>
            {stats.map((stat, idx) => (
              <StatsCard key={idx} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className={styles.workflowSection}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={styles.sectionHeader}
          >
            <h2>How It Works</h2>
            <p>Our AI-powered prediction pipeline</p>
          </motion.div>

          <div className={styles.workflow}>
            {workflow.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className={styles.workflowItem}
              >
                <div className={styles.workflowIcon}>{item.icon}</div>
                <p>{item.step}</p>
                {idx < workflow.length - 1 && <div className={styles.arrow}>↓</div>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={styles.ctaContent}
          >
            <h2>Ready to Protect Your Community?</h2>
            <p>Join thousands of users who rely on HeatShield AI for early warning and protection against heatwaves.</p>
            <a href="/dashboard" className={styles.ctaButton}>
              Explore Dashboard
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
