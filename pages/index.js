import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

import FindDebt from '../components/FindDebt';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

function pastTwoWeeks() {
  let currentDate = new Date();
  var fortnightAway = new Date(Date.now() - 12096e5);
  return (
    <div>
      <p>{fortnightAway.toISOString().substring(0, 10)}</p>
      <p>{currentDate.toISOString().substring(0, 10)}</p>
    </div>
  );
}
export default function Home() {
  const [sleep, setSleep] = useState({});
  useEffect(() => {
    const getData = async () => {
      const user_id = '8464BB';
      // dates in yyyy-mm-dd
      const startDate = '2021-02-22';
      const endDate = '2021-03-01';
      const url = `https://api.fitbit.com/1.2/user/${user_id}/sleep/date/${endDate}.json`;
      // const url = `https://api.fitbit.com/1.2/user/${user_id}/sleep/date/${startDate}/${endDate}.json`;
      const res = await fetch(url, {
        method: 'GET',
        headers: new Headers({
          Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_FITBEARER,
        }),
      }).then((res) => res.json());
      // setSleep(res);
    };
    getData();
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          {pastTwoWeeks()}
          <FindDebt />
          Welcome to <a href='https://nextjs.org'>Next.js!</a>
        </h1>
        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>
        <Line data={data} />
      </main>
    </div>
  );
}
