import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React, { useState, useEffect } from 'react';
import { Bar, Line } from 'react-chartjs-2';

import FindDebt from '../components/FindDebt';

const data1 = {
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
let sleep = [
  {
    dateOfSleep: '2021-03-01',
    duration: 24360000,
    efficiency: 96,
    endTime: '2021-03-01T10:33:30.000',
    infoCode: 0,
    isMainSleep: true,
    levels: {
      data: [
        {
          dateTime: '2021-03-01T03:47:00.000',
          level: 'light',
          seconds: 2820,
        },
        {
          dateTime: '2021-03-01T04:34:00.000',
          level: 'deep',
          seconds: 300,
        },
        {
          dateTime: '2021-03-01T04:39:00.000',
          level: 'light',
          seconds: 1170,
        },
        {
          dateTime: '2021-03-01T04:58:30.000',
          level: 'deep',
          seconds: 1620,
        },
        {
          dateTime: '2021-03-01T05:25:30.000',
          level: 'light',
          seconds: 30,
        },
        {
          dateTime: '2021-03-01T05:26:00.000',
          level: 'rem',
          seconds: 1140,
        },
        {
          dateTime: '2021-03-01T05:45:00.000',
          level: 'light',
          seconds: 1230,
        },
        {
          dateTime: '2021-03-01T06:05:30.000',
          level: 'deep',
          seconds: 270,
        },
        {
          dateTime: '2021-03-01T06:10:00.000',
          level: 'light',
          seconds: 390,
        },
        {
          dateTime: '2021-03-01T06:16:30.000',
          level: 'deep',
          seconds: 2220,
        },
        {
          dateTime: '2021-03-01T06:53:30.000',
          level: 'wake',
          seconds: 330,
        },
        {
          dateTime: '2021-03-01T06:59:00.000',
          level: 'light',
          seconds: 60,
        },
        {
          dateTime: '2021-03-01T07:00:00.000',
          level: 'rem',
          seconds: 2400,
        },
        {
          dateTime: '2021-03-01T07:40:00.000',
          level: 'light',
          seconds: 90,
        },
        {
          dateTime: '2021-03-01T07:41:30.000',
          level: 'wake',
          seconds: 210,
        },
        {
          dateTime: '2021-03-01T07:45:00.000',
          level: 'light',
          seconds: 1080,
        },
        {
          dateTime: '2021-03-01T08:03:00.000',
          level: 'deep',
          seconds: 420,
        },
        {
          dateTime: '2021-03-01T08:10:00.000',
          level: 'light',
          seconds: 1410,
        },
        {
          dateTime: '2021-03-01T08:33:30.000',
          level: 'rem',
          seconds: 1500,
        },
        {
          dateTime: '2021-03-01T08:58:30.000',
          level: 'wake',
          seconds: 450,
        },
        {
          dateTime: '2021-03-01T09:06:00.000',
          level: 'light',
          seconds: 1440,
        },
        {
          dateTime: '2021-03-01T09:30:00.000',
          level: 'deep',
          seconds: 1200,
        },
        {
          dateTime: '2021-03-01T09:50:00.000',
          level: 'light',
          seconds: 1050,
        },
        {
          dateTime: '2021-03-01T10:07:30.000',
          level: 'rem',
          seconds: 1230,
        },
        {
          dateTime: '2021-03-01T10:28:00.000',
          level: 'wake',
          seconds: 330,
        },
      ],
      shortData: [
        {
          dateTime: '2021-03-01T04:01:30.000',
          level: 'wake',
          seconds: 120,
        },
        {
          dateTime: '2021-03-01T04:10:00.000',
          level: 'wake',
          seconds: 90,
        },
        {
          dateTime: '2021-03-01T04:22:30.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-03-01T04:41:00.000',
          level: 'wake',
          seconds: 90,
        },
        {
          dateTime: '2021-03-01T04:49:00.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-03-01T05:24:30.000',
          level: 'wake',
          seconds: 60,
        },
        {
          dateTime: '2021-03-01T05:46:30.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-03-01T05:53:30.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-03-01T06:10:00.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-03-01T07:10:00.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-03-01T07:14:30.000',
          level: 'wake',
          seconds: 60,
        },
        {
          dateTime: '2021-03-01T07:20:30.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-03-01T07:30:00.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-03-01T07:48:00.000',
          level: 'wake',
          seconds: 60,
        },
        {
          dateTime: '2021-03-01T08:30:30.000',
          level: 'wake',
          seconds: 60,
        },
        {
          dateTime: '2021-03-01T08:36:30.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-03-01T09:52:00.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-03-01T09:54:30.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-03-01T10:01:30.000',
          level: 'wake',
          seconds: 60,
        },
      ],
      summary: {
        deep: {
          count: 6,
          minutes: 100,
          thirtyDayAvgMinutes: 100,
        },
        light: {
          count: 23,
          minutes: 168,
          thirtyDayAvgMinutes: 288,
        },
        rem: {
          count: 9,
          minutes: 101,
          thirtyDayAvgMinutes: 96,
        },
        wake: {
          count: 23,
          minutes: 37,
          thirtyDayAvgMinutes: 69,
        },
      },
    },
    logId: 31132303299,
    minutesAfterWakeup: 0,
    minutesAsleep: 369,
    minutesAwake: 37,
    minutesToFallAsleep: 0,
    startTime: '2021-03-01T03:47:00.000',
    timeInBed: 406,
    type: 'stages',
  },
  {
    dateOfSleep: '2021-02-28',
    duration: 35100000,
    efficiency: 93,
    endTime: '2021-02-28T10:39:30.000',
    infoCode: 0,
    isMainSleep: true,
    levels: {
      data: [
        {
          dateTime: '2021-02-28T00:54:30.000',
          level: 'light',
          seconds: 180,
        },
        {
          dateTime: '2021-02-28T00:57:30.000',
          level: 'deep',
          seconds: 270,
        },
        {
          dateTime: '2021-02-28T01:02:00.000',
          level: 'wake',
          seconds: 1320,
        },
        {
          dateTime: '2021-02-28T01:24:00.000',
          level: 'light',
          seconds: 570,
        },
        {
          dateTime: '2021-02-28T01:33:30.000',
          level: 'wake',
          seconds: 450,
        },
        {
          dateTime: '2021-02-28T01:41:00.000',
          level: 'light',
          seconds: 2850,
        },
        {
          dateTime: '2021-02-28T02:28:30.000',
          level: 'deep',
          seconds: 780,
        },
        {
          dateTime: '2021-02-28T02:41:30.000',
          level: 'light',
          seconds: 690,
        },
        {
          dateTime: '2021-02-28T02:53:00.000',
          level: 'rem',
          seconds: 360,
        },
        {
          dateTime: '2021-02-28T02:59:00.000',
          level: 'light',
          seconds: 4980,
        },
        {
          dateTime: '2021-02-28T04:22:00.000',
          level: 'wake',
          seconds: 1170,
        },
        {
          dateTime: '2021-02-28T04:41:30.000',
          level: 'light',
          seconds: 240,
        },
        {
          dateTime: '2021-02-28T04:45:30.000',
          level: 'rem',
          seconds: 360,
        },
        {
          dateTime: '2021-02-28T04:51:30.000',
          level: 'light',
          seconds: 1470,
        },
        {
          dateTime: '2021-02-28T05:16:00.000',
          level: 'deep',
          seconds: 2610,
        },
        {
          dateTime: '2021-02-28T05:59:30.000',
          level: 'light',
          seconds: 1080,
        },
        {
          dateTime: '2021-02-28T06:17:30.000',
          level: 'deep',
          seconds: 930,
        },
        {
          dateTime: '2021-02-28T06:33:00.000',
          level: 'light',
          seconds: 660,
        },
        {
          dateTime: '2021-02-28T06:44:00.000',
          level: 'rem',
          seconds: 390,
        },
        {
          dateTime: '2021-02-28T06:50:30.000',
          level: 'light',
          seconds: 360,
        },
        {
          dateTime: '2021-02-28T06:56:30.000',
          level: 'rem',
          seconds: 1500,
        },
        {
          dateTime: '2021-02-28T07:21:30.000',
          level: 'light',
          seconds: 4650,
        },
        {
          dateTime: '2021-02-28T08:39:00.000',
          level: 'rem',
          seconds: 1860,
        },
        {
          dateTime: '2021-02-28T09:10:00.000',
          level: 'light',
          seconds: 2070,
        },
        {
          dateTime: '2021-02-28T09:44:30.000',
          level: 'deep',
          seconds: 360,
        },
        {
          dateTime: '2021-02-28T09:50:30.000',
          level: 'light',
          seconds: 2640,
        },
        {
          dateTime: '2021-02-28T10:34:30.000',
          level: 'wake',
          seconds: 300,
        },
      ],
      shortData: [
        {
          dateTime: '2021-02-28T01:58:00.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-28T02:07:30.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-28T02:17:30.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-28T02:40:30.000',
          level: 'wake',
          seconds: 60,
        },
        {
          dateTime: '2021-02-28T02:48:00.000',
          level: 'wake',
          seconds: 120,
        },
        {
          dateTime: '2021-02-28T02:58:30.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-28T03:04:00.000',
          level: 'wake',
          seconds: 60,
        },
        {
          dateTime: '2021-02-28T03:44:30.000',
          level: 'wake',
          seconds: 60,
        },
        {
          dateTime: '2021-02-28T04:03:30.000',
          level: 'wake',
          seconds: 120,
        },
        {
          dateTime: '2021-02-28T04:13:30.000',
          level: 'wake',
          seconds: 60,
        },
        {
          dateTime: '2021-02-28T04:55:30.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-28T05:05:30.000',
          level: 'wake',
          seconds: 60,
        },
        {
          dateTime: '2021-02-28T05:08:00.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-28T05:58:30.000',
          level: 'wake',
          seconds: 60,
        },
        {
          dateTime: '2021-02-28T06:32:30.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-28T06:40:00.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-28T06:53:30.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-28T07:06:30.000',
          level: 'wake',
          seconds: 150,
        },
        {
          dateTime: '2021-02-28T07:23:00.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-28T07:36:00.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-28T07:50:30.000',
          level: 'wake',
          seconds: 60,
        },
        {
          dateTime: '2021-02-28T08:22:30.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-28T08:31:00.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-28T08:48:30.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-28T08:58:30.000',
          level: 'wake',
          seconds: 120,
        },
        {
          dateTime: '2021-02-28T09:50:30.000',
          level: 'wake',
          seconds: 90,
        },
        {
          dateTime: '2021-02-28T10:00:00.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-28T10:15:00.000',
          level: 'wake',
          seconds: 30,
        },
      ],
      summary: {
        deep: {
          count: 5,
          minutes: 80,
          thirtyDayAvgMinutes: 104,
        },
        light: {
          count: 33,
          minutes: 357,
          thirtyDayAvgMinutes: 275,
        },
        rem: {
          count: 8,
          minutes: 69,
          thirtyDayAvgMinutes: 102,
        },
        wake: {
          count: 32,
          minutes: 79,
          thirtyDayAvgMinutes: 67,
        },
      },
    },
    logId: 31118360780,
    minutesAfterWakeup: 0,
    minutesAsleep: 506,
    minutesAwake: 79,
    minutesToFallAsleep: 0,
    startTime: '2021-02-28T00:54:30.000',
    timeInBed: 585,
    type: 'stages',
  },
  {
    dateOfSleep: '2021-02-27',
    duration: 33840000,
    efficiency: 95,
    endTime: '2021-02-27T10:21:30.000',
    infoCode: 0,
    isMainSleep: true,
    levels: {
      data: [
        {
          dateTime: '2021-02-27T00:57:30.000',
          level: 'wake',
          seconds: 360,
        },
        {
          dateTime: '2021-02-27T01:03:30.000',
          level: 'light',
          seconds: 3510,
        },
        {
          dateTime: '2021-02-27T02:02:00.000',
          level: 'deep',
          seconds: 1020,
        },
        {
          dateTime: '2021-02-27T02:19:00.000',
          level: 'wake',
          seconds: 360,
        },
        {
          dateTime: '2021-02-27T02:25:00.000',
          level: 'light',
          seconds: 2040,
        },
        {
          dateTime: '2021-02-27T02:59:00.000',
          level: 'rem',
          seconds: 1080,
        },
        {
          dateTime: '2021-02-27T03:17:00.000',
          level: 'light',
          seconds: 990,
        },
        {
          dateTime: '2021-02-27T03:33:30.000',
          level: 'deep',
          seconds: 480,
        },
        {
          dateTime: '2021-02-27T03:41:30.000',
          level: 'light',
          seconds: 2070,
        },
        {
          dateTime: '2021-02-27T04:16:00.000',
          level: 'deep',
          seconds: 420,
        },
        {
          dateTime: '2021-02-27T04:23:00.000',
          level: 'light',
          seconds: 1020,
        },
        {
          dateTime: '2021-02-27T04:40:00.000',
          level: 'wake',
          seconds: 480,
        },
        {
          dateTime: '2021-02-27T04:48:00.000',
          level: 'light',
          seconds: 30,
        },
        {
          dateTime: '2021-02-27T04:48:30.000',
          level: 'rem',
          seconds: 1110,
        },
        {
          dateTime: '2021-02-27T05:07:00.000',
          level: 'light',
          seconds: 2100,
        },
        {
          dateTime: '2021-02-27T05:42:00.000',
          level: 'deep',
          seconds: 270,
        },
        {
          dateTime: '2021-02-27T05:46:30.000',
          level: 'light',
          seconds: 1050,
        },
        {
          dateTime: '2021-02-27T06:04:00.000',
          level: 'deep',
          seconds: 480,
        },
        {
          dateTime: '2021-02-27T06:12:00.000',
          level: 'light',
          seconds: 30,
        },
        {
          dateTime: '2021-02-27T06:12:30.000',
          level: 'rem',
          seconds: 2850,
        },
        {
          dateTime: '2021-02-27T07:00:00.000',
          level: 'light',
          seconds: 1560,
        },
        {
          dateTime: '2021-02-27T07:26:00.000',
          level: 'deep',
          seconds: 960,
        },
        {
          dateTime: '2021-02-27T07:42:00.000',
          level: 'light',
          seconds: 720,
        },
        {
          dateTime: '2021-02-27T07:54:00.000',
          level: 'rem',
          seconds: 270,
        },
        {
          dateTime: '2021-02-27T07:58:30.000',
          level: 'light',
          seconds: 990,
        },
        {
          dateTime: '2021-02-27T08:15:00.000',
          level: 'deep',
          seconds: 1230,
        },
        {
          dateTime: '2021-02-27T08:35:30.000',
          level: 'wake',
          seconds: 690,
        },
        {
          dateTime: '2021-02-27T08:47:00.000',
          level: 'light',
          seconds: 120,
        },
        {
          dateTime: '2021-02-27T08:49:00.000',
          level: 'rem',
          seconds: 1440,
        },
        {
          dateTime: '2021-02-27T09:13:00.000',
          level: 'light',
          seconds: 990,
        },
        {
          dateTime: '2021-02-27T09:29:30.000',
          level: 'wake',
          seconds: 390,
        },
        {
          dateTime: '2021-02-27T09:36:00.000',
          level: 'light',
          seconds: 960,
        },
        {
          dateTime: '2021-02-27T09:52:00.000',
          level: 'deep',
          seconds: 1770,
        },
      ],
      shortData: [
        {
          dateTime: '2021-02-27T01:20:00.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-27T01:49:00.000',
          level: 'wake',
          seconds: 90,
        },
        {
          dateTime: '2021-02-27T02:38:00.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-27T02:55:30.000',
          level: 'wake',
          seconds: 60,
        },
        {
          dateTime: '2021-02-27T03:16:00.000',
          level: 'wake',
          seconds: 60,
        },
        {
          dateTime: '2021-02-27T03:26:00.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-27T03:44:30.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-27T03:53:00.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-27T04:23:30.000',
          level: 'wake',
          seconds: 150,
        },
        {
          dateTime: '2021-02-27T04:27:30.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-27T04:57:00.000',
          level: 'wake',
          seconds: 60,
        },
        {
          dateTime: '2021-02-27T06:12:30.000',
          level: 'wake',
          seconds: 120,
        },
        {
          dateTime: '2021-02-27T06:23:30.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-27T06:29:30.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-27T06:31:30.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-27T06:39:30.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-27T06:51:00.000',
          level: 'wake',
          seconds: 60,
        },
        {
          dateTime: '2021-02-27T06:57:30.000',
          level: 'wake',
          seconds: 150,
        },
        {
          dateTime: '2021-02-27T07:03:00.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-27T07:08:30.000',
          level: 'wake',
          seconds: 120,
        },
        {
          dateTime: '2021-02-27T07:40:30.000',
          level: 'wake',
          seconds: 90,
        },
        {
          dateTime: '2021-02-27T07:58:30.000',
          level: 'wake',
          seconds: 60,
        },
        {
          dateTime: '2021-02-27T08:49:00.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-27T08:53:00.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-27T09:01:00.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-27T09:11:30.000',
          level: 'wake',
          seconds: 90,
        },
        {
          dateTime: '2021-02-27T09:16:30.000',
          level: 'wake',
          seconds: 60,
        },
        {
          dateTime: '2021-02-27T09:38:00.000',
          level: 'wake',
          seconds: 60,
        },
        {
          dateTime: '2021-02-27T10:20:00.000',
          level: 'wake',
          seconds: 90,
        },
      ],
      summary: {
        deep: {
          count: 8,
          minutes: 108,
          thirtyDayAvgMinutes: 103,
        },
        light: {
          count: 28,
          minutes: 289,
          thirtyDayAvgMinutes: 271,
        },
        rem: {
          count: 13,
          minutes: 100,
          thirtyDayAvgMinutes: 102,
        },
        wake: {
          count: 34,
          minutes: 67,
          thirtyDayAvgMinutes: 67,
        },
      },
    },
    logId: 31105038363,
    minutesAfterWakeup: 1,
    minutesAsleep: 497,
    minutesAwake: 67,
    minutesToFallAsleep: 0,
    startTime: '2021-02-27T00:57:30.000',
    timeInBed: 564,
    type: 'stages',
  },
  {
    dateOfSleep: '2021-02-26',
    duration: 32940000,
    efficiency: 93,
    endTime: '2021-02-26T09:56:00.000',
    infoCode: 0,
    isMainSleep: true,
    levels: {
      data: [
        {
          dateTime: '2021-02-26T00:46:30.000',
          level: 'wake',
          seconds: 330,
        },
        {
          dateTime: '2021-02-26T00:52:00.000',
          level: 'light',
          seconds: 1650,
        },
        {
          dateTime: '2021-02-26T01:19:30.000',
          level: 'deep',
          seconds: 1020,
        },
        {
          dateTime: '2021-02-26T01:36:30.000',
          level: 'light',
          seconds: 690,
        },
        {
          dateTime: '2021-02-26T01:48:00.000',
          level: 'deep',
          seconds: 1110,
        },
        {
          dateTime: '2021-02-26T02:06:30.000',
          level: 'light',
          seconds: 630,
        },
        {
          dateTime: '2021-02-26T02:17:00.000',
          level: 'deep',
          seconds: 900,
        },
        {
          dateTime: '2021-02-26T02:32:00.000',
          level: 'light',
          seconds: 150,
        },
        {
          dateTime: '2021-02-26T02:34:30.000',
          level: 'rem',
          seconds: 840,
        },
        {
          dateTime: '2021-02-26T02:48:30.000',
          level: 'light',
          seconds: 5880,
        },
        {
          dateTime: '2021-02-26T04:26:30.000',
          level: 'rem',
          seconds: 780,
        },
        {
          dateTime: '2021-02-26T04:39:30.000',
          level: 'wake',
          seconds: 450,
        },
        {
          dateTime: '2021-02-26T04:47:00.000',
          level: 'rem',
          seconds: 1980,
        },
        {
          dateTime: '2021-02-26T05:20:00.000',
          level: 'light',
          seconds: 1830,
        },
        {
          dateTime: '2021-02-26T05:50:30.000',
          level: 'deep',
          seconds: 1110,
        },
        {
          dateTime: '2021-02-26T06:09:00.000',
          level: 'light',
          seconds: 510,
        },
        {
          dateTime: '2021-02-26T06:17:30.000',
          level: 'deep',
          seconds: 1950,
        },
        {
          dateTime: '2021-02-26T06:50:00.000',
          level: 'rem',
          seconds: 270,
        },
        {
          dateTime: '2021-02-26T06:54:30.000',
          level: 'wake',
          seconds: 660,
        },
        {
          dateTime: '2021-02-26T07:05:30.000',
          level: 'light',
          seconds: 450,
        },
        {
          dateTime: '2021-02-26T07:13:00.000',
          level: 'rem',
          seconds: 2910,
        },
        {
          dateTime: '2021-02-26T08:01:30.000',
          level: 'light',
          seconds: 1200,
        },
        {
          dateTime: '2021-02-26T08:21:30.000',
          level: 'deep',
          seconds: 930,
        },
        {
          dateTime: '2021-02-26T08:37:00.000',
          level: 'light',
          seconds: 4410,
        },
        {
          dateTime: '2021-02-26T09:50:30.000',
          level: 'wake',
          seconds: 330,
        },
      ],
      shortData: [
        {
          dateTime: '2021-02-26T01:02:00.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-26T01:11:00.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-26T01:40:00.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-26T01:42:00.000',
          level: 'wake',
          seconds: 60,
        },
        {
          dateTime: '2021-02-26T02:06:00.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-26T02:32:30.000',
          level: 'wake',
          seconds: 90,
        },
        {
          dateTime: '2021-02-26T02:46:00.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-26T02:48:30.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-26T03:09:00.000',
          level: 'wake',
          seconds: 60,
        },
        {
          dateTime: '2021-02-26T03:18:30.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-26T03:43:00.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-26T03:48:30.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-26T04:04:30.000',
          level: 'wake',
          seconds: 90,
        },
        {
          dateTime: '2021-02-26T04:13:00.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-26T04:24:00.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-26T04:58:30.000',
          level: 'wake',
          seconds: 120,
        },
        {
          dateTime: '2021-02-26T05:09:00.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-26T05:12:30.000',
          level: 'wake',
          seconds: 120,
        },
        {
          dateTime: '2021-02-26T05:19:30.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-26T05:23:00.000',
          level: 'wake',
          seconds: 60,
        },
        {
          dateTime: '2021-02-26T05:35:30.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-26T07:09:30.000',
          level: 'wake',
          seconds: 60,
        },
        {
          dateTime: '2021-02-26T07:19:00.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-26T07:21:30.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-26T07:25:30.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-26T07:31:00.000',
          level: 'wake',
          seconds: 120,
        },
        {
          dateTime: '2021-02-26T07:45:00.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-26T07:51:00.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-26T08:11:30.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-26T08:14:30.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-26T08:35:30.000',
          level: 'wake',
          seconds: 90,
        },
        {
          dateTime: '2021-02-26T08:40:30.000',
          level: 'wake',
          seconds: 90,
        },
        {
          dateTime: '2021-02-26T08:45:30.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-26T08:50:00.000',
          level: 'wake',
          seconds: 60,
        },
        {
          dateTime: '2021-02-26T08:53:30.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-26T09:01:00.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-26T09:09:00.000',
          level: 'wake',
          seconds: 60,
        },
        {
          dateTime: '2021-02-26T09:16:00.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-26T09:23:00.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-26T09:28:30.000',
          level: 'wake',
          seconds: 60,
        },
        {
          dateTime: '2021-02-26T09:43:30.000',
          level: 'wake',
          seconds: 30,
        },
      ],
      summary: {
        deep: {
          count: 6,
          minutes: 115,
          thirtyDayAvgMinutes: 99,
        },
        light: {
          count: 37,
          minutes: 269,
          thirtyDayAvgMinutes: 272,
        },
        rem: {
          count: 15,
          minutes: 103,
          thirtyDayAvgMinutes: 102,
        },
        wake: {
          count: 45,
          minutes: 62,
          thirtyDayAvgMinutes: 68,
        },
      },
    },
    logId: 31092758356,
    minutesAfterWakeup: 3,
    minutesAsleep: 487,
    minutesAwake: 62,
    minutesToFallAsleep: 0,
    startTime: '2021-02-26T00:46:30.000',
    timeInBed: 549,
    type: 'stages',
  },
  {
    dateOfSleep: '2021-02-25',
    duration: 35640000,
    efficiency: 94,
    endTime: '2021-02-25T10:31:30.000',
    infoCode: 0,
    isMainSleep: true,
    levels: {
      data: [
        {
          dateTime: '2021-02-25T00:37:30.000',
          level: 'light',
          seconds: 90,
        },
        {
          dateTime: '2021-02-25T00:39:00.000',
          level: 'wake',
          seconds: 1440,
        },
        {
          dateTime: '2021-02-25T01:03:00.000',
          level: 'light',
          seconds: 1140,
        },
        {
          dateTime: '2021-02-25T01:22:00.000',
          level: 'deep',
          seconds: 990,
        },
        {
          dateTime: '2021-02-25T01:38:30.000',
          level: 'light',
          seconds: 4650,
        },
        {
          dateTime: '2021-02-25T02:56:00.000',
          level: 'deep',
          seconds: 1860,
        },
        {
          dateTime: '2021-02-25T03:27:00.000',
          level: 'light',
          seconds: 1590,
        },
        {
          dateTime: '2021-02-25T03:53:30.000',
          level: 'deep',
          seconds: 600,
        },
        {
          dateTime: '2021-02-25T04:03:30.000',
          level: 'light',
          seconds: 330,
        },
        {
          dateTime: '2021-02-25T04:09:00.000',
          level: 'rem',
          seconds: 840,
        },
        {
          dateTime: '2021-02-25T04:23:00.000',
          level: 'light',
          seconds: 4500,
        },
        {
          dateTime: '2021-02-25T05:38:00.000',
          level: 'deep',
          seconds: 1290,
        },
        {
          dateTime: '2021-02-25T05:59:30.000',
          level: 'rem',
          seconds: 1230,
        },
        {
          dateTime: '2021-02-25T06:20:00.000',
          level: 'wake',
          seconds: 540,
        },
        {
          dateTime: '2021-02-25T06:29:00.000',
          level: 'light',
          seconds: 30,
        },
        {
          dateTime: '2021-02-25T06:29:30.000',
          level: 'rem',
          seconds: 2280,
        },
        {
          dateTime: '2021-02-25T07:07:30.000',
          level: 'light',
          seconds: 1620,
        },
        {
          dateTime: '2021-02-25T07:34:30.000',
          level: 'deep',
          seconds: 960,
        },
        {
          dateTime: '2021-02-25T07:50:30.000',
          level: 'light',
          seconds: 150,
        },
        {
          dateTime: '2021-02-25T07:53:00.000',
          level: 'rem',
          seconds: 270,
        },
        {
          dateTime: '2021-02-25T07:57:30.000',
          level: 'wake',
          seconds: 570,
        },
        {
          dateTime: '2021-02-25T08:07:00.000',
          level: 'light',
          seconds: 2280,
        },
        {
          dateTime: '2021-02-25T08:45:00.000',
          level: 'wake',
          seconds: 630,
        },
        {
          dateTime: '2021-02-25T08:55:30.000',
          level: 'light',
          seconds: 600,
        },
        {
          dateTime: '2021-02-25T09:05:30.000',
          level: 'rem',
          seconds: 330,
        },
        {
          dateTime: '2021-02-25T09:11:00.000',
          level: 'light',
          seconds: 4830,
        },
      ],
      shortData: [
        {
          dateTime: '2021-02-25T01:06:00.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-25T01:13:00.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-25T01:38:00.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-25T01:54:00.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-25T02:21:00.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-25T02:25:00.000',
          level: 'wake',
          seconds: 180,
        },
        {
          dateTime: '2021-02-25T04:04:00.000',
          level: 'wake',
          seconds: 90,
        },
        {
          dateTime: '2021-02-25T04:08:00.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-25T04:21:00.000',
          level: 'wake',
          seconds: 120,
        },
        {
          dateTime: '2021-02-25T04:25:00.000',
          level: 'wake',
          seconds: 60,
        },
        {
          dateTime: '2021-02-25T04:28:00.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-25T04:42:00.000',
          level: 'wake',
          seconds: 60,
        },
        {
          dateTime: '2021-02-25T05:05:30.000',
          level: 'wake',
          seconds: 180,
        },
        {
          dateTime: '2021-02-25T05:58:30.000',
          level: 'wake',
          seconds: 60,
        },
        {
          dateTime: '2021-02-25T06:07:30.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-25T06:10:30.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-25T06:49:00.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-25T07:03:00.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-25T07:05:30.000',
          level: 'wake',
          seconds: 120,
        },
        {
          dateTime: '2021-02-25T07:13:00.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-25T07:49:00.000',
          level: 'wake',
          seconds: 90,
        },
        {
          dateTime: '2021-02-25T08:59:30.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-25T09:10:00.000',
          level: 'wake',
          seconds: 60,
        },
        {
          dateTime: '2021-02-25T09:13:00.000',
          level: 'wake',
          seconds: 150,
        },
        {
          dateTime: '2021-02-25T09:21:30.000',
          level: 'wake',
          seconds: 60,
        },
        {
          dateTime: '2021-02-25T09:25:00.000',
          level: 'wake',
          seconds: 120,
        },
        {
          dateTime: '2021-02-25T09:39:00.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-25T09:59:30.000',
          level: 'wake',
          seconds: 90,
        },
        {
          dateTime: '2021-02-25T10:04:30.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-25T10:19:30.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-25T10:30:30.000',
          level: 'wake',
          seconds: 60,
        },
      ],
      summary: {
        deep: {
          count: 5,
          minutes: 92,
          thirtyDayAvgMinutes: 102,
        },
        light: {
          count: 32,
          minutes: 340,
          thirtyDayAvgMinutes: 238,
        },
        rem: {
          count: 9,
          minutes: 76,
          thirtyDayAvgMinutes: 115,
        },
        wake: {
          count: 35,
          minutes: 86,
          thirtyDayAvgMinutes: 60,
        },
      },
    },
    logId: 31081364285,
    minutesAfterWakeup: 0,
    minutesAsleep: 508,
    minutesAwake: 86,
    minutesToFallAsleep: 0,
    startTime: '2021-02-25T00:37:30.000',
    timeInBed: 594,
    type: 'stages',
  },
  {
    dateOfSleep: '2021-02-24',
    duration: 33420000,
    efficiency: 91,
    endTime: '2021-02-24T10:05:30.000',
    infoCode: 0,
    isMainSleep: true,
    levels: {
      data: [
        {
          dateTime: '2021-02-24T00:48:30.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-24T00:49:00.000',
          level: 'light',
          seconds: 1080,
        },
        {
          dateTime: '2021-02-24T01:07:00.000',
          level: 'deep',
          seconds: 330,
        },
        {
          dateTime: '2021-02-24T01:12:30.000',
          level: 'light',
          seconds: 120,
        },
        {
          dateTime: '2021-02-24T01:14:30.000',
          level: 'wake',
          seconds: 270,
        },
        {
          dateTime: '2021-02-24T01:19:00.000',
          level: 'light',
          seconds: 2640,
        },
        {
          dateTime: '2021-02-24T02:03:00.000',
          level: 'wake',
          seconds: 210,
        },
        {
          dateTime: '2021-02-24T02:06:30.000',
          level: 'light',
          seconds: 240,
        },
        {
          dateTime: '2021-02-24T02:10:30.000',
          level: 'rem',
          seconds: 540,
        },
        {
          dateTime: '2021-02-24T02:19:30.000',
          level: 'light',
          seconds: 1380,
        },
        {
          dateTime: '2021-02-24T02:42:30.000',
          level: 'deep',
          seconds: 1140,
        },
        {
          dateTime: '2021-02-24T03:01:30.000',
          level: 'light',
          seconds: 840,
        },
        {
          dateTime: '2021-02-24T03:15:30.000',
          level: 'deep',
          seconds: 480,
        },
        {
          dateTime: '2021-02-24T03:23:30.000',
          level: 'light',
          seconds: 510,
        },
        {
          dateTime: '2021-02-24T03:32:00.000',
          level: 'deep',
          seconds: 420,
        },
        {
          dateTime: '2021-02-24T03:39:00.000',
          level: 'light',
          seconds: 150,
        },
        {
          dateTime: '2021-02-24T03:41:30.000',
          level: 'rem',
          seconds: 510,
        },
        {
          dateTime: '2021-02-24T03:50:00.000',
          level: 'light',
          seconds: 450,
        },
        {
          dateTime: '2021-02-24T03:57:30.000',
          level: 'rem',
          seconds: 1530,
        },
        {
          dateTime: '2021-02-24T04:23:00.000',
          level: 'light',
          seconds: 810,
        },
        {
          dateTime: '2021-02-24T04:36:30.000',
          level: 'deep',
          seconds: 2220,
        },
        {
          dateTime: '2021-02-24T05:13:30.000',
          level: 'light',
          seconds: 630,
        },
        {
          dateTime: '2021-02-24T05:24:00.000',
          level: 'deep',
          seconds: 1200,
        },
        {
          dateTime: '2021-02-24T05:44:00.000',
          level: 'light',
          seconds: 750,
        },
        {
          dateTime: '2021-02-24T05:56:30.000',
          level: 'rem',
          seconds: 1410,
        },
        {
          dateTime: '2021-02-24T06:20:00.000',
          level: 'light',
          seconds: 1770,
        },
        {
          dateTime: '2021-02-24T06:49:30.000',
          level: 'deep',
          seconds: 270,
        },
        {
          dateTime: '2021-02-24T06:54:00.000',
          level: 'light',
          seconds: 1230,
        },
        {
          dateTime: '2021-02-24T07:14:30.000',
          level: 'rem',
          seconds: 2670,
        },
        {
          dateTime: '2021-02-24T07:59:00.000',
          level: 'wake',
          seconds: 690,
        },
        {
          dateTime: '2021-02-24T08:10:30.000',
          level: 'light',
          seconds: 2640,
        },
        {
          dateTime: '2021-02-24T08:54:30.000',
          level: 'rem',
          seconds: 1890,
        },
        {
          dateTime: '2021-02-24T09:26:00.000',
          level: 'light',
          seconds: 720,
        },
        {
          dateTime: '2021-02-24T09:38:00.000',
          level: 'rem',
          seconds: 330,
        },
        {
          dateTime: '2021-02-24T09:43:30.000',
          level: 'light',
          seconds: 360,
        },
        {
          dateTime: '2021-02-24T09:49:30.000',
          level: 'wake',
          seconds: 210,
        },
        {
          dateTime: '2021-02-24T09:53:00.000',
          level: 'light',
          seconds: 120,
        },
        {
          dateTime: '2021-02-24T09:55:00.000',
          level: 'wake',
          seconds: 630,
        },
      ],
      shortData: [
        {
          dateTime: '2021-02-24T00:48:30.000',
          level: 'wake',
          seconds: 90,
        },
        {
          dateTime: '2021-02-24T01:00:00.000',
          level: 'wake',
          seconds: 60,
        },
        {
          dateTime: '2021-02-24T01:20:30.000',
          level: 'wake',
          seconds: 90,
        },
        {
          dateTime: '2021-02-24T01:25:30.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-24T01:33:00.000',
          level: 'wake',
          seconds: 120,
        },
        {
          dateTime: '2021-02-24T01:44:00.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-24T01:54:30.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-24T02:27:30.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-24T02:36:00.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-24T03:37:30.000',
          level: 'wake',
          seconds: 90,
        },
        {
          dateTime: '2021-02-24T03:54:00.000',
          level: 'wake',
          seconds: 60,
        },
        {
          dateTime: '2021-02-24T04:04:30.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-24T04:22:30.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-24T04:33:00.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-24T05:14:00.000',
          level: 'wake',
          seconds: 90,
        },
        {
          dateTime: '2021-02-24T05:43:30.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-24T05:54:30.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-24T06:37:00.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-24T06:54:30.000',
          level: 'wake',
          seconds: 150,
        },
        {
          dateTime: '2021-02-24T06:59:00.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-24T07:06:00.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-24T07:08:00.000',
          level: 'wake',
          seconds: 60,
        },
        {
          dateTime: '2021-02-24T07:20:00.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-24T07:23:30.000',
          level: 'wake',
          seconds: 60,
        },
        {
          dateTime: '2021-02-24T07:36:00.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-24T07:38:30.000',
          level: 'wake',
          seconds: 60,
        },
        {
          dateTime: '2021-02-24T08:30:00.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-24T08:45:30.000',
          level: 'wake',
          seconds: 150,
        },
        {
          dateTime: '2021-02-24T09:08:00.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-24T09:17:00.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-24T09:34:00.000',
          level: 'wake',
          seconds: 30,
        },
      ],
      summary: {
        deep: {
          count: 7,
          minutes: 99,
          thirtyDayAvgMinutes: 105,
        },
        light: {
          count: 38,
          minutes: 254,
          thirtyDayAvgMinutes: 221,
        },
        rem: {
          count: 14,
          minutes: 143,
          thirtyDayAvgMinutes: 87,
        },
        wake: {
          count: 36,
          minutes: 61,
          thirtyDayAvgMinutes: 58,
        },
      },
    },
    logId: 31063698729,
    minutesAfterWakeup: 1,
    minutesAsleep: 496,
    minutesAwake: 61,
    minutesToFallAsleep: 0,
    startTime: '2021-02-24T00:48:30.000',
    timeInBed: 557,
    type: 'stages',
  },
  {
    dateOfSleep: '2021-02-23',
    duration: 28260000,
    efficiency: 92,
    endTime: '2021-02-23T10:00:30.000',
    infoCode: 0,
    isMainSleep: true,
    levels: {
      data: [
        {
          dateTime: '2021-02-23T02:09:30.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-23T02:10:00.000',
          level: 'light',
          seconds: 2910,
        },
        {
          dateTime: '2021-02-23T02:58:30.000',
          level: 'deep',
          seconds: 1740,
        },
        {
          dateTime: '2021-02-23T03:27:30.000',
          level: 'light',
          seconds: 840,
        },
        {
          dateTime: '2021-02-23T03:41:30.000',
          level: 'rem',
          seconds: 510,
        },
        {
          dateTime: '2021-02-23T03:50:00.000',
          level: 'light',
          seconds: 660,
        },
        {
          dateTime: '2021-02-23T04:01:00.000',
          level: 'deep',
          seconds: 3210,
        },
        {
          dateTime: '2021-02-23T04:54:30.000',
          level: 'light',
          seconds: 4290,
        },
        {
          dateTime: '2021-02-23T06:06:00.000',
          level: 'deep',
          seconds: 510,
        },
        {
          dateTime: '2021-02-23T06:14:30.000',
          level: 'light',
          seconds: 360,
        },
        {
          dateTime: '2021-02-23T06:20:30.000',
          level: 'rem',
          seconds: 3900,
        },
        {
          dateTime: '2021-02-23T07:25:30.000',
          level: 'light',
          seconds: 4980,
        },
        {
          dateTime: '2021-02-23T08:48:30.000',
          level: 'deep',
          seconds: 1050,
        },
        {
          dateTime: '2021-02-23T09:06:00.000',
          level: 'light',
          seconds: 270,
        },
        {
          dateTime: '2021-02-23T09:10:30.000',
          level: 'rem',
          seconds: 1140,
        },
        {
          dateTime: '2021-02-23T09:29:30.000',
          level: 'wake',
          seconds: 1860,
        },
      ],
      shortData: [
        {
          dateTime: '2021-02-23T02:16:30.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-23T02:40:00.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-23T02:47:30.000',
          level: 'wake',
          seconds: 90,
        },
        {
          dateTime: '2021-02-23T02:52:30.000',
          level: 'wake',
          seconds: 60,
        },
        {
          dateTime: '2021-02-23T03:26:00.000',
          level: 'wake',
          seconds: 90,
        },
        {
          dateTime: '2021-02-23T03:37:00.000',
          level: 'wake',
          seconds: 120,
        },
        {
          dateTime: '2021-02-23T03:41:00.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-23T03:52:00.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-23T04:53:30.000',
          level: 'wake',
          seconds: 60,
        },
        {
          dateTime: '2021-02-23T05:00:00.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-23T05:12:30.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-23T05:20:00.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-23T05:30:30.000',
          level: 'wake',
          seconds: 90,
        },
        {
          dateTime: '2021-02-23T05:53:00.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-23T06:16:00.000',
          level: 'wake',
          seconds: 120,
        },
        {
          dateTime: '2021-02-23T06:35:30.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-23T06:45:30.000',
          level: 'wake',
          seconds: 60,
        },
        {
          dateTime: '2021-02-23T06:58:30.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-23T07:06:30.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-23T07:09:30.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-23T07:13:00.000',
          level: 'wake',
          seconds: 120,
        },
        {
          dateTime: '2021-02-23T07:24:30.000',
          level: 'wake',
          seconds: 60,
        },
        {
          dateTime: '2021-02-23T07:42:00.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-23T08:07:30.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-23T08:27:30.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-23T08:39:00.000',
          level: 'wake',
          seconds: 30,
        },
        {
          dateTime: '2021-02-23T09:05:00.000',
          level: 'wake',
          seconds: 60,
        },
        {
          dateTime: '2021-02-23T09:09:30.000',
          level: 'wake',
          seconds: 30,
        },
      ],
      summary: {
        deep: {
          count: 4,
          minutes: 105,
          thirtyDayAvgMinutes: 0,
        },
        light: {
          count: 24,
          minutes: 221,
          thirtyDayAvgMinutes: 0,
        },
        rem: {
          count: 9,
          minutes: 87,
          thirtyDayAvgMinutes: 0,
        },
        wake: {
          count: 30,
          minutes: 58,
          thirtyDayAvgMinutes: 0,
        },
      },
    },
    logId: 31047925020,
    minutesAfterWakeup: 0,
    minutesAsleep: 413,
    minutesAwake: 58,
    minutesToFallAsleep: 0,
    startTime: '2021-02-23T02:09:30.000',
    timeInBed: 471,
    type: 'stages',
  },
];
export default function Home() {
  // const [sleep, setSleep] = useState({});
  useEffect(() => {
    const getData = async () => {
      const user_id = '8464BB';
      // dates in yyyy-mm-dd
      const startDate = '2021-02-22';
      const endDate = '2021-03-01';
      // const url = `https://api.fitbit.com/1.2/user/${user_id}/sleep/date/${endDate}.json`;
      const url = `https://api.fitbit.com/1.2/user/${user_id}/sleep/date/${startDate}/${endDate}.json`;
      const res = await fetch(url, {
        method: 'GET',
        // mode: 'no-cors',
        headers: new Headers({
          Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_FITBEARER,
        }),
      }).then((res) => res.json());
      console.log(JSON.stringify(res));
      setSleep(res);
      data = {
        // labels: sleep.sleep.m  ap((x) => '' + x.dateOfSleep),
        datasets: [
          {
            label: '# of Red Votes',
            data: [12, 19, 3],
            backgroundColor: 'rgb(255, 99, 132)',
          },
          {
            label: '# of Blue Votes',
            data: [2, 3, 20, 5, 1],
            backgroundColor: 'rgb(54, 162, 235)',
          },
          {
            label: '# of Green Votes',
            data: [3, 10, 13, 15],
            backgroundColor: 'rgb(75, 192, 192)',
          },
        ],
      };
    };
    // getData();
  }, []);

  function readSleep() {
    return sleep.map((sleep) => {
      label: sleep.levels.data.level;
    });
  }
  const data = {
    labels: sleep.map((x) => x.dateOfSleep).reverse(),
    datasets: [
      {
        label: 'wake',
        data: [
          {
            y: new Date(),
          },
        ],
        backgroundColor: 'rgb(255, 99, 132)',
      },
      {
        label: 'sleep',
        data: [],
        backgroundColor: 'rgb(75, 192, 192)',
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          stacked: true,
          type: 'time',
          time: {
            unit: 'hour',
          },
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      xAxes: [
        {
          stacked: true,
        },
      ],
    },
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {console.log(1614777171 - 1614733916)}
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href='https://nextjs.org'>Next.js!</a>
        </h1>
        <Bar data={data} options={options} />
      </main>
    </div>
  );
}
