import React from 'react';
import { motion } from 'framer-motion';
import { team } from '../data/dummyData';
import Hero from '../components/Hero';
import styles from './About.module.css';

export default function About() {
  return (
    <div>
      <Hero
        title="About HeatShield AI"
        subtitle="Transforming climate intelligence into early warning and protection"
        backgroundStyle="default"
      />

      <div className={styles.container}>
        {/* Mission & Vision */}
        <section className={styles.missionSection}>
          <div className={styles.grid}>
            <motion.div
              className={styles.missionCard}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3>🎯 Mission</h3>
              <p>
                To provide AI-powered early warning and protection against extreme heatwave events through real-time climate monitoring, accurate forecasting, and actionable intelligence for citizens, farmers, healthcare providers, and government agencies.
              </p>
            </motion.div>

            <motion.div
              className={styles.missionCard}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3>🌟 Vision</h3>
              <p>
                To create a climate-resilient India where technology and data science work together to minimize heat-related mortality, protect agricultural productivity, preserve livelihoods, and enable communities to thrive even in the face of extreme climate events.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Problem & Solution */}
        <section className={styles.problemSection}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={styles.sectionHeader}
          >
            <h2>The Problem</h2>
          </motion.div>

          <div className={styles.problemContent}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              India faces increasingly severe heatwaves with temperatures exceeding 45°C in many regions. Traditional weather forecasting methods lack the precision and speed needed for real-time alerts. Current systems fail to provide timely, actionable insights to vulnerable populations, resulting in thousands of preventable heat-related deaths every year.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Farmers suffer crop failures, hospitals face patient surges, and citizens lack clear guidance on how to stay safe during extreme heat. Government agencies struggle to coordinate emergency response without real-time data and actionable intelligence.
            </motion.p>
          </div>
        </section>

        {/* Objectives */}
        <section className={styles.objectivesSection}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={styles.sectionHeader}
          >
            <h2>Our Objectives</h2>
          </motion.div>

          <div className={styles.objectivesGrid}>
            <motion.div
              className={styles.objectiveCard}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className={styles.objectiveIcon}>🔮</span>
              <h3>Accurate Prediction</h3>
              <p>Forecast heatwaves 14 days in advance with 98% accuracy</p>
            </motion.div>

            <motion.div
              className={styles.objectiveCard}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className={styles.objectiveIcon}>🚨</span>
              <h3>Real-Time Alerts</h3>
              <p>Deliver instant warnings to all stakeholders through multiple channels</p>
            </motion.div>

            <motion.div
              className={styles.objectiveCard}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className={styles.objectiveIcon}>📱</span>
              <h3>Personalized Advisories</h3>
              <p>Provide customized recommendations for citizens, farmers, hospitals, and governments</p>
            </motion.div>

            <motion.div
              className={styles.objectiveCard}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className={styles.objectiveIcon}>🌍</span>
              <h3>Wide Coverage</h3>
              <p>Monitor 7 climate regions with 245+ automated weather stations</p>
            </motion.div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className={styles.technologySection}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={styles.sectionHeader}
          >
            <h2>Technology Stack</h2>
          </motion.div>

          <div className={styles.techGrid}>
            <motion.div
              className={styles.techCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h4>📊 Data Collection</h4>
              <ul>
                <li>IoT Weather Stations</li>
                <li>Satellite Data</li>
                <li>API Integrations</li>
                <li>Sensor Networks</li>
              </ul>
            </motion.div>

            <motion.div
              className={styles.techCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h4>🤖 Machine Learning</h4>
              <ul>
                <li>Random Forest</li>
                <li>XGBoost</li>
                <li>LSTM Networks</li>
                <li>CNN Models</li>
              </ul>
            </motion.div>

            <motion.div
              className={styles.techCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h4>💻 Backend</h4>
              <ul>
                <li>Python & FastAPI</li>
                <li>PostgreSQL Database</li>
                <li>Redis Cache</li>
                <li>Apache Spark</li>
              </ul>
            </motion.div>

            <motion.div
              className={styles.techCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h4>🎨 Frontend</h4>
              <ul>
                <li>React & Vite</li>
                <li>Chart.js</li>
                <li>Framer Motion</li>
                <li>Bootstrap 5</li>
              </ul>
            </motion.div>

            <motion.div
              className={styles.techCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h4>🌐 Infrastructure</h4>
              <ul>
                <li>Cloud Deployment</li>
                <li>Docker & Kubernetes</li>
                <li>CI/CD Pipeline</li>
                <li>Monitoring Tools</li>
              </ul>
            </motion.div>

            <motion.div
              className={styles.techCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h4>📱 Integration</h4>
              <ul>
                <li>SMS Alerts</li>
                <li>Push Notifications</li>
                <li>Email Notifications</li>
                <li>Mobile App</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className={styles.teamSection}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={styles.sectionHeader}
          >
            <h2>Meet the Team</h2>
            <p>Experts dedicated to climate protection</p>
          </motion.div>

          <div className={styles.teamGrid}>
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                className={styles.teamCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={styles.teamImage}>{member.image}</div>
                <h3>{member.name}</h3>
                <p className={styles.role}>{member.role}</p>
                <p className={styles.expertise}>{member.expertise}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Future Scope */}
        <section className={styles.futureSection}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={styles.sectionHeader}
          >
            <h2>Future Scope</h2>
          </motion.div>

          <div className={styles.futureGrid}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={styles.futureCard}
            >
              <h4>🌐 Expansion</h4>
              <p>Scale to South Asian countries and other heat-prone regions</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={styles.futureCard}
            >
              <h4>🤖 AI Enhancement</h4>
              <p>Integrate advanced LLMs for better personalized recommendations</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className={styles.futureCard}
            >
              <h4>📊 Analytics</h4>
              <p>Comprehensive impact analysis and mitigation strategy optimization</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
              className={styles.futureCard}
            >
              <h4>🏢 Enterprise Integration</h4>
              <p>Custom APIs for government and corporate integration</p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className={styles.contactSection}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={styles.contactCard}
          >
            <h2>Get in Touch</h2>
            <p>Have questions? We'd love to hear from you.</p>
            <div className={styles.contactInfo}>
              <a href="mailto:info@heatshield-ai.com" className={styles.contactLink}>
                📧 info@heatshield-ai.com
              </a>
              <a href="tel:+911234567890" className={styles.contactLink}>
                📞 +91 (123) 456-7890
              </a>
              <a href="https://github.com" className={styles.contactLink}>
                🐙 GitHub Repository
              </a>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
