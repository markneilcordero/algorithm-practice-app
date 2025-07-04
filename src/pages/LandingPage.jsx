// src/pages/LandingPage.jsx
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import RecentActivityCard from '../components/RecentActivityCard';
import InfoHighlight from '../components/InfoHighlight';
import StartButton from '../components/StartButton';
import QuoteBox from '../components/QuoteBox';
import { getUserStats } from '../utils/localStorage';
import '../styles/landing.css';

const LandingPage = () => {
  const [stats, setStats] = useState({
    totalSolved: 0,
    lastSolved: null,
    sessionCount: 0,
  });

  useEffect(() => {
    setStats(getUserStats());
  }, []);

  const formatDate = (iso) => {
    if (!iso) return 'N/A';
    const date = new Date(iso);
    return date.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    });
  };

  return (
    <>
      <Navbar />
      <main className="container py-5 text-center">
        <HeroSection />
        <QuoteBox />
        <RecentActivityCard stats={stats} />
        <div className="row my-4">
          <InfoHighlight label="Solved" value={stats.totalSolved} />
          <InfoHighlight label="Sessions" value={stats.sessionCount} />
          <InfoHighlight label="Last Practice" value={formatDate(stats.lastSolved)} />
        </div>
        <StartButton />
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
