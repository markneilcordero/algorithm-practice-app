// src/components/ChartByTags.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const ChartByTags = ({ data }) => {
  if (!data || !data.labels || !data.datasets) return null;

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'x',
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="card p-3 shadow-sm" style={{ minHeight: '350px' }}>
      <h5 className="mb-3">🏷️ Problems by Tag</h5>
      <div style={{ height: '280px' }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default ChartByTags;
