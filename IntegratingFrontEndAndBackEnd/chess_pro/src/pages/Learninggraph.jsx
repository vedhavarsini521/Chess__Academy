import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import '../assets/css/Learninggraphpage.css';

const Learninggraph = () => {
  const chartRef = useRef(null);

  const destroyChart = () => {
    if (chartRef.current && chartRef.current.chartInstance) {
      chartRef.current.chartInstance.destroy();
    }
  };

  useEffect(() => {
    destroyChart(); // Destroy the previous chart before rendering a new one
  }, []);

  const data = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
    datasets: [
      {
        label: 'Learning Track Progress',
        data: [20, 40, 60, 80, 100],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  return (
    <div className="learning-track-graph">
      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default Learninggraph;
