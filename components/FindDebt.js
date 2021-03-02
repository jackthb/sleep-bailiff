import React, { useState, useContext, useEffect } from 'react';

let FindDebt = () => {
  let endDate = new Date().toISOString().substring(0, 10);
  var startDate = new Date(Date.now() - 12096e5).toISOString().substring(0, 10);
  const [sleep, setSleep] = useState({});
  useEffect(() => {
    const getData = async () => {
      const user_id = '8464BB';
      // dates in yyyy-mm-dd
      const url = `https://api.fitbit.com/1.2/user/${user_id}/sleep/date/${startDate}/${endDate}.json`;
      const res = await fetch(url, {
        method: 'GET',
        headers: new Headers({
          Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_FITBEARER,
        }),
      }).then((res) => res.json());
      setSleep(res);
    };
    getData();
  }, []);

  function calculateDebt() {
    // check if sleep
    let debt = 0;

    for (let i = 0; i < sleep.sleep.length; i++) {
      debt += 2.88e7 - sleep.sleep[i].duration;
      console.log('sleep time' + sleep.sleep[i].duration / 3.6e6);
      console.log('debt' + debt / 3.6e6);
    }

    // console.log(debt / 3.6e6);
    return debt;
  }
  return (
    <div>
      <h1>Your Sleep Debt</h1>
      <h2>
        The science: {sleep.sleep && (calculateDebt() / 3.6e6).toFixed(2)} hours
        of debt
      </h2>
    </div>
  );
};
export default FindDebt;
