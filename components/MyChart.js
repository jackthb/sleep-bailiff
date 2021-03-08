import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const MyChart = ({ sleep }) => {
  const [options, setOptions] = useState({
    chart: {
      id: 'line-chart',
    },
    xaxis: {
      categories: sleep.map((x) => x.dateOfSleep).reverse(),
    },
  });
  const [series, setSeries] = useState([
    {
      name: 'Hours of Sleep',
      data: sleep.map((x) => (x.minutesAsleep / 60).toFixed(2)).reverse(),
    },
  ]);

  console.log(
    sleep.map((x) => {
      return { x: x.dateOfSleep, y: [x.startTime, x.endTime] };
    })
  );
  return (
    <div className='chart'>
      {series && <Chart options={options} series={series} type='bar' />}
      <style jsx>{`
        .chart {
          width: 1000px;
          margin: auto;
        }
      `}</style>
    </div>
  );
};

export default MyChart;
