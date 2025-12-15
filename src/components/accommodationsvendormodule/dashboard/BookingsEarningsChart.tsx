import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
// import { color } from 'chart.js/helpers';

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: [
    '09:00', '09:15', '09:30', '09:45', '10:00', '10:15',
    '10:30', '10:40', '10:45', '11:00', '11:15', '11:30'
  ],
  datasets: [
    {
      label: 'Bookings',
      data: [60, 80, 85, 90, 95, 100, 105, 110, 115, 117, 118, 120],
      borderColor: '#6C3483',
      backgroundColor: '#6C3483',
      yAxisID: 'y',
    },
    {
      label: 'Earnings',
      data: [130, 145, 150, 160, 170, 180, 260, 345, 290, 320, 350, 345],
      borderColor: '#229954',
      backgroundColor: '#229954',
      yAxisID: 'y',
    },
    {
      label: 'Threshold Line (450)',
      data: new Array(12).fill(450),
      borderColor: 'red',
      borderDash: [5, 5],
      pointRadius: 0,
      type: 'line',
      yAxisID: 'y',
    }
  ]
};

const options = {
  responsive: true,
  plugins: {
    legend: {
        position: 'bottom',
        align: 'start',
        labels: {
            usePointStyle: true,
            pointStyle: '',
            boxWidth: 25,
            boxHeight: 25,
            font: {
            size: 14,
            weight: '600',
            },
            padding: 16,
        },
    },
    tooltip: {
      mode: 'index',
      intersect: false,
    },
  },
  interaction: {
    mode: 'nearest',
    axis: 'x',
    intersect: false
  },
  scales: {
    x: {
      title: {
        display: false,
      }
    },
    y: {
      beginAtZero: true,
      suggestedMax: 500,
      title: {
        display: false,
      }
    }
  }
};

const BookingsEarningsChart = () => {
  return (
    <div className="card-box chart-box-dashboard">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5>Bookings Vs Earnings</h5>
        <select className="form-select w-auto">
          <option>Daily</option>
          <option>Weekly</option>
          <option>Monthly</option>
        </select>
      </div>
      <div className="chart-container-dashboard">
        <Line data={data} options={options} />
      </div>
    </div>
  )
}

export default BookingsEarningsChart