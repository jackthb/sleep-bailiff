import Head from 'next/head';
import MyChart from '../components/MyChart';
import React, { useEffect, useState } from 'react';
import { sub } from 'date-fns';
import FindDebt from '../components/FindDebt';
import RangeChart from '../components/RangeChart';

const fetchData = async (url) => {
  const query = await fetch(url, {
    method: 'GET',
    // mode: 'no-cors',
    headers: new Headers({
      Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_FITBEARER,
    }),
  });
  return await query.json();
};

export const getStaticProps = async () => {
  const endDate = new Date().toISOString().substring(0, 10);
  const startDate = sub(new Date(), { weeks: 1 })
    .toISOString()
    .substring(0, 10);
  const user_id = '8464BB';
  // dates in yyyy-mm-dd
  // const url = `https://api.fitbit.com/1.2/user/${user_id}/sleep/date/${endDate}.json`;
  const url = `https://api.fitbit.com/1.2/user/${user_id}/sleep/date/${startDate}/${endDate}.json`;
  const data = await fetchData(url);
  return {
    props: {
      sleep: data.sleep,
    },
  };
};

export default function Home({ sleep }) {
  return (
    <div className='container'>
      <Head>
        <title>Sleep Bailiff</title>
      </Head>
      <main>
        <h1 className='title'>Jack's Sleep over the last week</h1>
        {sleep && <MyChart sleep={sleep} />}
        {sleep && <FindDebt sleep={sleep} />}
        {sleep && <RangeChart sleep={sleep} />}
      </main>
      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        a {
          color: inherit;
          text-decoration: none;
        }
        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
          text-align: center;
        }
      `}</style>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
