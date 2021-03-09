import React, { useState, useContext, useEffect } from 'react';

let FindDebt = ({ sleep }) => {
  function calculateDebt() {
    let debt = 0;
    for (let i = 0; i < sleep.length; i++) {
      debt += 8 * 60 - sleep[i].minutesAsleep;
      if (debt < 0) {
        debt = 0;
      }
    }
    return debt;
  }
  return (
    <div className='font-mono text-5xl text-center'>
      <h1>My Sleep Debt</h1>
      <h2>{(calculateDebt() / 60).toFixed(2)} hours of debt</h2>
    </div>
  );
};
export default FindDebt;
