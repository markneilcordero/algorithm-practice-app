// src/pages/DashboardPage.jsx
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProgressSummary from '../components/ProgressSummary';
import ChartProblemsSolved from '../components/ChartProblemsSolved';
import ChartByDifficulty from '../components/ChartByDifficulty';
import ChartByTags from '../components/ChartByTags';
import ExportDataButton from '../components/ExportDataButton';
import DashboardHeader from '../components/DashboardHeader';

import { getDashboardStats, getUserStats } from '../utils/localStorage';
import { formatChartData } from '../utils/chartUtils';

const DashboardPage = () => {
  const [stats, setStats] = useState({});
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const dashboardData = getDashboardStats();     // contains submissions, totals for chart
    const userStats = getUserStats();              // contains lastSolved, sessionCount

    setStats({ ...dashboardData, ...userStats });  // merge both for ProgressSummary
    setChartData(formatChartData(dashboardData));  // only chart data needs dashboard structure
  }, []);

  return (
    <>
      <Navbar />
      <div className="container py-4">
        <DashboardHeader />

        <ProgressSummary stats={stats} />

        <div className="my-4 d-flex justify-content-end">
          <ExportDataButton />
        </div>

        <div className="row g-4">
          <div className="col-lg-6">
            <ChartProblemsSolved data={chartData.solvedOverTime} />
          </div>
          <div className="col-lg-6">
            <ChartByDifficulty data={chartData.byDifficulty} />
          </div>
          <div className="col-12">
            <ChartByTags data={chartData.byTags} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DashboardPage;
