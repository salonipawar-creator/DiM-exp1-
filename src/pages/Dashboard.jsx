import React from 'react';
import { motion } from 'framer-motion';
import { Line, Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import StatsCard from '../components/StatsCard';
import WeatherCard from '../components/WeatherCard';
import AlertCard from '../components/AlertCard';
import {
  temperatureTrendData,
  regionTemperatureData,
  heatwaveSeverityData,
  citiesWeather,
  alerts,
} from '../data/dummyData';
import styles from './Dashboard.module.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
  Filler
);

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: {
        font: { family: "'Inter', sans-serif", size: 12 },
        color: '#64748b',
        padding: 15,
      },
    },
  },
  scales: {
    y: {
      ticks: { color: '#64748b', font: { size: 12 } },
      grid: { color: 'rgba(14, 165, 233, 0.1)' },
    },
    x: {
      ticks: { color: '#64748b', font: { size: 12 } },
      grid: { color: 'rgba(14, 165, 233, 0.1)' },
    },
  },
};

export default function Dashboard() {
  const stats = [
    { value: '38.5', label: 'Current Temperature', icon: '🌡️', unit: '°C' },
    { value: 'High', label: 'Heatwave Severity', icon: '🔴', unit: null },
    { value: '65', label: 'Humidity', icon: '💧', unit: '%' },
    { value: '18', label: 'Wind Speed', icon: '💨', unit: 'km/h' },
  ];

  return (
    <div>
      <section className={styles.dashboardHeader}>
        <div className={styles.container}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1>Climate Intelligence Dashboard</h1>
            <p>Real-time monitoring and analytics of heatwave conditions</p>
          </motion.div>
        </div>
      </section>

      <div className={styles.container}>
        {/* Stats Cards */}
        <motion.section className={styles.statsSection} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <div className={styles.statsGrid}>
            {stats.map((stat, idx) => (
              <StatsCard key={idx} {...stat} />
            ))}
          </div>
        </motion.section>

        {/* Charts Section */}
        <section className={styles.chartsSection}>
          <div className={styles.chartContainer}>
            <motion.div
              className={styles.chartWrapper}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3>Temperature Trend (24 Hours)</h3>
              <Line data={temperatureTrendData} options={chartOptions} height={300} />
            </motion.div>

            <motion.div
              className={styles.chartWrapper}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3>Region-wise Temperature</h3>
              <Bar data={regionTemperatureData} options={chartOptions} height={300} />
            </motion.div>
          </div>

          <motion.div
            className={styles.chartWrapper}
            style={{ maxWidth: '500px', margin: '0 auto' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Heatwave Severity Distribution</h3>
            <Pie data={heatwaveSeverityData} options={{ ...chartOptions, maintainAspectRatio: true }} height={300} />
          </motion.div>
        </section>

        {/* Weather Overview */}
        <motion.section
          className={styles.weatherSection}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Weather Overview - Major Cities</h2>
          <div className={styles.weatherGrid}>
            {citiesWeather.map((weather, idx) => (
              <WeatherCard key={idx} weather={weather} />
            ))}
          </div>
        </motion.section>

        {/* Recent Alerts */}
        <motion.section
          className={styles.alertsSection}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Recent Alerts</h2>
          <div className={styles.alertsGrid}>
            {alerts.map((alert) => (
              <AlertCard key={alert.id} alert={alert} />
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
