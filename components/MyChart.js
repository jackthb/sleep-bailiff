import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { sub } from 'date-fns';
import { setDayWithOptions } from 'date-fns/fp';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const MyChart = () => {
  const [options, setOptions] = useState({});
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const endDate = new Date().toISOString().substring(0, 10);
      const startDate = sub(new Date(), { weeks: 1 })
        .toISOString()
        .substring(0, 10);
      const user_id = '8464BB';
      // dates in yyyy-mm-dd
      // const url = `https://api.fitbit.com/1.2/user/${user_id}/sleep/date/${endDate}.json`;
      const url = `https://api.fitbit.com/1.2/user/${user_id}/sleep/date/${startDate}/${endDate}.json`;
      const res = await fetch(url, {
        method: 'GET',
        // mode: 'no-cors',
        headers: new Headers({
          Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_FITBEARER,
        }),
      }).then((res) => res.json());
      console.log(res.sleep);
      setOptions({
        chart: {
          id: 'line-chart',
        },
        xaxis: {
          categories: Object.keys(res.sleep).map((key, index) => {
            return res.sleep[key].dateOfSleep;
          }),
        },
      });
      setSeries([
        {
          name: 'Hours of Sleep',
          data: Object.keys(res.sleep).map((key, index) => {
            return (res.sleep[key].minutesAsleep / 60).toFixed(2);
          }),
        },
      ]);
    };
    getData();
  }, []);
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
