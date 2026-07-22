import React from 'react';
import { motion } from 'framer-motion';
import { FiTrendingUp } from 'react-icons/fi';
import { mlModels } from '../data/dummyData';
import Hero from '../components/Hero';
import styles from './Prediction.module.css';

export default function Prediction() {
  const aiComponents = [
    {
      title: 'Historical Weather Dataset',
      description: '15+ years of historical weather data from thousands of stations',
      icon: '📚',
      details: ['Temperature records', 'Precipitation data', 'Wind patterns', 'Humidity levels'],
    },
    {
      title: 'IoT Sensor Data',
      description: 'Real-time data from 245+ automated weather stations',
      icon: '📡',
      details: ['Temperature sensors', 'Humidity sensors', 'Pressure sensors', 'Wind speed sensors'],
    },
    {
      title: 'Machine Learning Models',
      description: 'Advanced AI models trained on climate data',
      icon: '🤖',
      details: ['Random Forest', 'XGBoost', 'LSTM', 'CNN'],
    },
    {
      title: 'Prediction Engine',
      description: 'Real-time heatwave prediction and forecasting',
      icon: '⚙️',
      details: ['14-day forecast', 'Severity classification', 'Risk assessment', 'Alert generation'],
    },
    {
      title: 'LLM Advisory Generator',
      description: 'AI-generated personalized recommendations',
      icon: '📝',
      details: ['Citizen advisories', 'Farmer recommendations', 'Medical guidelines', 'Government actions'],
    },
  ];

  const workflow = [
    { step: 'Weather Data', icon: '🌍' },
    { step: 'Cleaning', icon: '🧹' },
    { step: 'Feature Engineering', icon: '🔧' },
    { step: 'Model Training', icon: '📊' },
    { step: 'Forecast', icon: '🔮' },
    { step: 'Heatwave Classification', icon: '⚠️' },
    { step: 'Alert Generation', icon: '🚨' },
  ];

  return (
    <div>
      <Hero
        title="AI Prediction Engine"
        subtitle="Understanding how our machine learning models predict heatwaves with 98% accuracy"
        backgroundStyle="default"
      />

      <div className={styles.container}>
        {/* AI Components */}
        <section className={styles.componentsSection}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={styles.sectionHeader}
          >
            <h2>Core AI Components</h2>
            <p>Multiple layers of data processing and intelligence</p>
          </motion.div>

          <div className={styles.componentsGrid}>
            {aiComponents.map((component, idx) => (
              <motion.div
                key={idx}
                className={styles.componentCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={styles.componentIcon}>{component.icon}</div>
                <h3>{component.title}</h3>
                <p className={styles.componentDesc}>{component.description}</p>
                <ul className={styles.detailsList}>
                  {component.details.map((detail, i) => (
                    <li key={i}>✓ {detail}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Workflow Diagram */}
        <section className={styles.workflowSection}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={styles.sectionHeader}
          >
            <h2>AI Workflow Pipeline</h2>
            <p>From raw data to actionable predictions</p>
          </motion.div>

          <div className={styles.workflowDiagram}>
            {workflow.map((item, idx) => (
              <React.Fragment key={idx}>
                <motion.div
                  className={styles.workflowStep}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className={styles.stepIcon}>{item.icon}</div>
                  <p>{item.step}</p>
                </motion.div>
                {idx < workflow.length - 1 && <div className={styles.connector}>→</div>}
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* ML Models */}
        <section className={styles.modelsSection}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={styles.sectionHeader}
          >
            <h2>Machine Learning Models</h2>
            <p>Ensemble of state-of-the-art prediction models</p>
          </motion.div>

          <div className={styles.modelsGrid}>
            {mlModels.map((model, idx) => (
              <motion.div
                key={idx}
                className={styles.modelCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={styles.modelIcon}>{model.icon}</div>
                <h3>{model.name}</h3>
                <p>{model.description}</p>
                <div className={styles.accuracyBar}>
                  <div className={styles.accuracyFill} style={{ width: `${model.accuracy}%` }}>
                    <span className={styles.accuracyLabel}>{model.accuracy}%</span>
                  </div>
                </div>
                <p className={styles.accuracyText}>Prediction Accuracy</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Key Metrics */}
        <section className={styles.metricsSection}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={styles.sectionHeader}
          >
            <h2>Performance Metrics</h2>
            <p>Our system's accuracy and reliability</p>
          </motion.div>

          <div className={styles.metricsGrid}>
            <motion.div
              className={styles.metricCard}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <FiTrendingUp size={40} color="#ff8c42" />
              <h4>98%</h4>
              <p>Prediction Accuracy</p>
            </motion.div>

            <motion.div
              className={styles.metricCard}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <FiTrendingUp size={40} color="#ef4444" />
              <h4>14</h4>
              <p>Days Forecast Horizon</p>
            </motion.div>

            <motion.div
              className={styles.metricCard}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <FiTrendingUp size={40} color="#0ea5e9" />
              <h4>24/7</h4>
              <p>Real-time Monitoring</p>
            </motion.div>

            <motion.div
              className={styles.metricCard}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <FiTrendingUp size={40} color="#22c55e" />
              <h4>7</h4>
              <p>Climate Regions Covered</p>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
