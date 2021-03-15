import React, { useEffect, useState } from 'react';

import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const StackedBar = ({ sleep }) => {
  const [options, setOptions] = useState({
    chart: {
      type: 'rangeBar',
      background: '#fff',
    },
    plotOptions: {
      bar: {
        rangeBarGroupRows: true,
      },
    },
    colors: [
      '#D4526E',
      '#8D5B4C',
      '#F86624',
      '#D7263D',
      '#1B998B',
      '#2E294E',
      '#F46036',
      '#E2C044',
    ],
    fill: {
      type: 'solid',
    },
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      type: 'datetime',
    },
    legend: {
      position: 'right',
    },
  });
  const [series, setSeries] = useState([
    {
      name: 'George Washington',
      data: [
        {
          x: 'President',
          y: [new Date(1789, 3, 30).getTime(), new Date(1797, 2, 4).getTime()],
        },
      ],
    },
    // John Adams
    {
      name: 'John Adams',
      data: [
        {
          x: 'President',
          y: [new Date(1797, 2, 4).getTime(), new Date(1801, 2, 4).getTime()],
        },
        {
          x: 'Vice President',
          y: [new Date(1789, 3, 21).getTime(), new Date(1797, 2, 4).getTime()],
        },
      ],
    },
    // Thomas Jefferson
    {
      name: 'Thomas Jefferson',
      data: [
        {
          x: 'President',
          y: [new Date(1801, 2, 4).getTime(), new Date(1809, 2, 4).getTime()],
        },
        {
          x: 'Vice President',
          y: [new Date(1797, 2, 4).getTime(), new Date(1801, 2, 4).getTime()],
        },
        {
          x: 'Secretary of State',
          y: [
            new Date(1790, 2, 22).getTime(),
            new Date(1793, 11, 31).getTime(),
          ],
        },
      ],
    },
    // Aaron Burr
    {
      name: 'Aaron Burr',
      data: [
        {
          x: 'Vice President',
          y: [new Date(1801, 2, 4).getTime(), new Date(1805, 2, 4).getTime()],
        },
      ],
    },
    // George Clinton
    {
      name: 'George Clinton',
      data: [
        {
          x: 'Vice President',
          y: [new Date(1805, 2, 4).getTime(), new Date(1812, 3, 20).getTime()],
        },
      ],
    },
    // John Jay
    {
      name: 'John Jay',
      data: [
        {
          x: 'Secretary of State',
          y: [new Date(1789, 8, 25).getTime(), new Date(1790, 2, 22).getTime()],
        },
      ],
    },
    // Edmund Randolph
    {
      name: 'Edmund Randolph',
      data: [
        {
          x: 'Secretary of State',
          y: [new Date(1794, 0, 2).getTime(), new Date(1795, 7, 20).getTime()],
        },
      ],
    },
    // Timothy Pickering
    {
      name: 'Timothy Pickering',
      data: [
        {
          x: 'Secretary of State',
          y: [new Date(1795, 7, 20).getTime(), new Date(1800, 4, 12).getTime()],
        },
      ],
    },
    // Charles Lee
    {
      name: 'Charles Lee',
      data: [
        {
          x: 'Secretary of State',
          y: [new Date(1800, 4, 13).getTime(), new Date(1800, 5, 5).getTime()],
        },
      ],
    },
    // John Marshall
    {
      name: 'John Marshall',
      data: [
        {
          x: 'Secretary of State',
          y: [new Date(1800, 5, 13).getTime(), new Date(1801, 2, 4).getTime()],
        },
      ],
    },
    // Levi Lincoln
    {
      name: 'Levi Lincoln',
      data: [
        {
          x: 'Secretary of State',
          y: [new Date(1801, 2, 5).getTime(), new Date(1801, 4, 1).getTime()],
        },
      ],
    },
    // James Madison
    {
      name: 'James Madison',
      data: [
        {
          x: 'Secretary of State',
          y: [new Date(1801, 4, 2).getTime(), new Date(1809, 2, 3).getTime()],
        },
      ],
    },
  ]);
  return (
    <div className='chart'>
      {/* {series && <Chart className='w-full' options={options} height={700} />}
       */}
      <Chart options={options} height={800} type='bar' series={series} />
    </div>
  );
};

export default StackedBar;
