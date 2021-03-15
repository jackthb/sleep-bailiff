import Head from 'next/head';
import MyChart from '../components/MyChart';
import React, { useEffect, useState } from 'react';
import { sub } from 'date-fns';

import Background from '../components/Background';

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
    revalidate: 1,
  };
};

export default function Home({ sleep }) {
  return (
    <div>
      <Head>
        <title>Sleep Bailiff</title>
      </Head>
      <main className='h-full overflow-y-hidden overflow-x-hidden'>
        <Background>
          <h1 className='text-center text-white text-4xl'>
            Jack's Sleep over the last week
          </h1>
          {sleep && (
            <div className='grid-cols-2 grid gap-4'>
              <MyChart sleep={sleep} />
              <RangeChart sleep={sleep} />
            </div>
          )}
        </Background>
      </main>
    </div>
  );
}
