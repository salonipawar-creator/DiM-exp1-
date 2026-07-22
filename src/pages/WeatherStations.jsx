import React from 'react';
import { motion } from 'framer-motion';
import { FiThermometer } from 'react-icons/fi';
import { weatherStations } from '../data/dummyData';
import Hero from '../components/Hero';
import styles from './WeatherStations.module.css';

export default function WeatherStations() {
  const sensors = [
    {
      name: 'Temperature Sensor',
      description: 'Precision thermometer for accurate temperature readings',
      range: '-40°C to +50°C',
      accuracy: '±0.5°C',
      icon: <FiThermometer size={32} />,
    },
    {
      name: 'Humidity Sensor',
      description: 'Capacitive humidity sensor for moisture measurement',
      range: '0% to 100%',
      accuracy: '±3%',
      icon: '💧',
    },
    {
      name: 'Pressure Sensor',
      description: 'Atmospheric pressure sensor for weather prediction',
      range: '300 to 1100 hPa',
      accuracy: '±1 hPa',
      icon: '📊',
    },
    {
      name: 'Rain Gauge',
      description: 'Tipping bucket rain gauge for precipitation measurement',
      range: '0 to 400 mm/hr',
      accuracy: '±0.1 mm',
      icon: '🌧️',
    },
    {
      name: 'Wind Sensor',
      description: 'Anemometer and vane for wind speed and direction',
      range: '0 to 50 m/s',
      accuracy: '±0.3 m/s',
      icon: '💨',
    },
    {
      name: 'Solar Radiation Sensor',
      description: 'Pyranometer for solar radiation measurement',
      range: '0 to 1500 W/m²',
      accuracy: '±5%',
      icon: '☀️',
    },
  ];

  return (
    <div>
      <Hero
        title="Weather Station Network"
        subtitle="245+ Automated IoT weather stations monitoring climate across India"
        backgroundStyle="default"
      />

      <div className={styles.container}>
        {/* Stations List */}
        <section className={styles.stationsSection}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={styles.sectionHeader}
          >
            <h2>Active Weather Stations</h2>
            <p>Real-time data from our IoT sensor network</p>
          </motion.div>

          <div className={styles.stationsGrid}>
            {weatherStations.map((station, idx) => (
              <motion.div
                key={station.id}
                className={styles.stationCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={styles.stationHeader}>
                  <h3>{station.name}</h3>
                  <span className={`${styles.status} ${styles[station.status]}`}>
                    {station.status === 'online' ? '🟢' : '🔴'} {station.status.toUpperCase()}
                  </span>
                </div>

                <p className={styles.location}>{station.location}</p>
                <p className={styles.stationId}>ID: {station.id}</p>

                <div className={styles.metricsGrid}>
                  <div className={styles.metric}>
                    <span className={styles.label}>🌡️ Temperature</span>
                    <span className={styles.value}>{station.temperature}°C</span>
                  </div>
                  <div className={styles.metric}>
                    <span className={styles.label}>💧 Humidity</span>
                    <span className={styles.value}>{station.humidity}%</span>
                  </div>
                  <div className={styles.metric}>
                    <span className={styles.label}>💨 Wind Speed</span>
                    <span className={styles.value}>{station.windSpeed} km/h</span>
                  </div>
                  <div className={styles.metric}>
                    <span className={styles.label}>🔋 Battery</span>
                    <span className={styles.value}>{station.batteryLevel}%</span>
                  </div>
                  <div className={styles.metric}>
                    <span className={styles.label}>📡 Signal</span>
                    <span className={styles.value}>{station.signalStrength}%</span>
                  </div>
                  <div className={styles.metric}>
                    <span className={styles.label}>⏰ Last Update</span>
                    <span className={styles.value}>{station.lastUpdated}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Sensors Section */}
        <section className={styles.sensorsSection}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={styles.sectionHeader}
          >
            <h2>Sensor Technologies</h2>
            <p>Advanced IoT sensors for precise climate monitoring</p>
          </motion.div>

          <div className={styles.sensorsGrid}>
            {sensors.map((sensor, idx) => (
              <motion.div
                key={idx}
                className={styles.sensorCard}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={styles.sensorIcon}>{sensor.icon}</div>
                <h3>{sensor.name}</h3>
                <p className={styles.sensorDesc}>{sensor.description}</p>
                <div className={styles.specs}>
                  <div>
                    <span className={styles.label}>Range:</span>
                    <span>{sensor.range}</span>
                  </div>
                  <div>
                    <span className={styles.label}>Accuracy:</span>
                    <span>{sensor.accuracy}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Map Section */}
        <section className={styles.mapSection}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={styles.sectionHeader}
          >
            <h2>Weather Station Coverage Map</h2>
            <p>Geographic distribution of our monitoring network</p>
          </motion.div>

          <motion.div
            className={styles.mapPlaceholder}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className={styles.mapContent}>
              <p>🗺️ India Map with Weather Station Markers</p>
              <p className={styles.mapSubtext}>Interactive map showing all 245+ active stations</p>
              <div className={styles.mapStats}>
                <div>📍 245 Stations</div>
                <div>🟢 240 Online</div>
                <div>🔴 5 Offline</div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className={styles.statsSection}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={styles.sectionHeader}
          >
            <h2>Network Statistics</h2>
          </motion.div>

          <div className={styles.statsGrid}>
            <motion.div
              className={styles.statCard}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className={styles.statValue}>245</p>
              <p className={styles.statLabel}>Total Stations</p>
            </motion.div>
            <motion.div
              className={styles.statCard}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className={styles.statValue}>98%</p>
              <p className={styles.statLabel}>Uptime</p>
            </motion.div>
            <motion.div
              className={styles.statCard}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className={styles.statValue}>5 min</p>
              <p className={styles.statLabel}>Update Frequency</p>
            </motion.div>
            <motion.div
              className={styles.statCard}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className={styles.statValue}>99.9%</p>
              <p className={styles.statLabel}>Accuracy</p>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
