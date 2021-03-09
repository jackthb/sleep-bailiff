import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { getHours } from 'date-fns';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const RangeChart = ({ sleep }) => {
  const [series, setSeries] = useState({
    series: [
      {
        data: sleep.map((x) => {
          return {
            x: x.dateOfSleep,
            y: [new Date(x.startTime).getTime(), new Date(x.endTime).getTime()],
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
          distributed: true,
          dataLabels: {
            hideOverflowingLabels: false,
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val, opts) {
          var label = opts.w.globals.labels[opts.dataPointIndex];
          // console.log(getHours(val[0]));
          // console.log(val[1]);
          // var diff = b.diff(a, 'days');
          // return label + ': ' + diff + (diff > 1 ? ' days' : ' day');
        },
        style: {
          colors: ['#f3f4f5', '#fff'],
        },
      },
      xaxis: {
        type: 'datetime',
      },
      yaxis: {
        type: 'datetime',
      },
    },
  });
  return (
    <div id='chart'>
      <Chart
        options={series.options}
        series={series.series}
        type='rangeBar'
        height={1000}
        width={1000}
      />
      <p>Not as useful as I'd like...</p>
    </div>
  );
};

export default RangeChart;
