import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

interface BarChartProps {
  data: {
    labels: Array<string>;
    values: Array<number>
  };
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart | null>(null);
  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }

        chartInstance.current = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: data.labels,
            datasets: [{
              label: 'Waterfall Chart',
              data: data.values,
              backgroundColor: data.values&&data.values.map(val => val < 0 ? 'rgba(255, 99, 132, 0.2)' : 'rgba(75, 192, 192, 0.2)'),
              borderColor: data.values&&data.values.map(val => val < 0 ? 'rgba(255, 99, 132, 1)' : 'rgba(75, 192, 192, 1)'),
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      }
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);


  return <canvas ref={chartRef} />;
};

export default BarChart;
