// src/components/ChartProblemsSolved.jsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const ChartProblemsSolved = ({ data }) => {
  if (!data || !data.labels || !data.datasets) return null;

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: { stepSize: 1 },
      },
    },
  };

  return (
    <div className="card p-3 shadow-sm" style={{ minHeight: '300px' }}>
      <h5 className="mb-3">📈 Problems Solved Over Time</h5>
      <div style={{ height: '250px' }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default ChartProblemsSolved;
