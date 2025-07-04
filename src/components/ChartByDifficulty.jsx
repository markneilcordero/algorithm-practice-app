// src/components/ChartByDifficulty.jsx
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartByDifficulty = ({ data }) => {
  if (!data || !data.labels || !data.datasets) return null;

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

  return (
    <div className="card p-3 shadow-sm" style={{ minHeight: '300px' }}>
      <h5 className="mb-3">🧠 Problems by Difficulty</h5>
      <div style={{ height: '250px' }}>
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default ChartByDifficulty;
