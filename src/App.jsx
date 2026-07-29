import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Prediction from './pages/Prediction';
import WeatherStations from './pages/WeatherStations';
import Advisory from './pages/Advisory';
import About from './pages/About';
import './styles/globals.css';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/prediction" element={<Prediction />} />
        <Route path="/weather-stations" element={<WeatherStations />} />
        <Route path="/advisory" element={<Advisory />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}
