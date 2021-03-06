import React, { useEffect, useState } from 'react';

import FindDebt from '../components/FindDebt';
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const MyChart = ({ sleep }) => {
  const [options, setOptions] = useState({
    chart: {
      background: '#fff',
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

  return (
    <div className='chart'>
      {series && (
        <Chart
          className='w-full'
          options={options}
          series={series}
          type='bar'
          height={700}
        />
      )}
      <FindDebt sleep={sleep} />
    </div>
  );
};

export default MyChart;
