import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { format, getHours, getMinutes } from 'date-fns';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const RangeChart = ({ sleep }) => {
  const [series, setSeries] = useState({
    series: [
      {
        data: sleep.map((x) => {
          let start = new Date(x.startTime).setDate(2);
          let end = new Date(x.endTime).setDate(3);
          if (new Date(x.startTime).getHours() > 12) {
            start = new Date(x.startTime).setDate(1);
            end = new Date(x.endTime).setDate(3);
          }
          console.log(x.startTime.toString(), x.endTime.toString());
          // we need a check to see if we go to bed the day before... this fucks it up
          return {
            x: x.dateOfSleep,
            y: [start, end],
          };
        }),
      },
    ],
    options: {
      chart: {
        type: 'rangeBar',
        background: '#fff',
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            hideOverflowingLabels: false,
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val, opts) {
          return (
            getHours(val[0]) +
            ':' +
            getMinutes(val[0]) +
            '-' +
            getHours(val[1]) +
            ':' +
            getMinutes(val[1])
          );
        },
      },
      xaxis: {
        type: 'datetime',
        labels: {
          format: 'HH:mm',
        },
      },
      yaxis: {
        type: 'datetime',
      },
      tooltip: {
        enabled: false,
      },
    },
  });
  return (
    <div id='chart'>
      <Chart
        options={series.options}
        series={series.series}
        type='rangeBar'
        height={800}
        width={600}
      />
      <p className='text-white'>Not as useful as I'd like...</p>
    </div>
  );
};

export default RangeChart;
