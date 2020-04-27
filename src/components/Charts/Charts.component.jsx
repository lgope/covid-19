import React, { useState, useEffect } from 'react';
import { fetchDaily } from '../../api/covid19.api';
import Chart from 'react-apexcharts';
import { Bar } from 'react-chartjs-2';
import Spinner from '../Spinner/Spinner.component';

const Charts = ({ msg, font, country, lan }) => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchAPI = async () => {
      let data = await fetchDaily(country);
      setDailyData(data);
    };
    fetchAPI();
  }, [country]);

  if (!dailyData) {
    return (
      <div className='text-center'>
        <Spinner />
      </div>
    );
  }

  const { confirmed, deaths, recovere, date } = dailyData;

  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ['Infected', 'Deaths', 'Recovered'],
        datasets: [
          {
            label: 'People',
            backgroundColor: [
              'rgba(0, 0, 255, 0.5)',
              'rgba(255, 0, 0, 0.5)',
              'rgba(0, 255, 0, 0.5)',
            ],
            data: [
              confirmed[confirmed.length - 1],
              deaths[deaths.length - 1],
              recovere[recovere.length - 1],
            ],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true },
      }}
    />
  ) : null;

  const lineChart = dailyData.confirmed ? (
    <Chart
      options={{
        xaxis: {
          type: 'datetime',
          categories: date.map((da) => da),
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy',
          },
        },
        stroke: {
          curve: 'smooth',
        },
        colors: ['#2E93fA', '#f36', 'green'],
        legend: {
          show: true,
          fontSize: '20px',
          itemMargin: {
            horizontal: 10,
            vertical: 25,
          },
        },
      }}
      series={[
        {
          name: 'Confirmed',
          data: confirmed.map((con) => con),
        },
        { name: 'Deaths', data: deaths.map((de) => de) },
        {
          name: 'Recoverd',
          data: recovere.map((re) => re),
        },
      ]}
      type='area'
    />
  ) : null;

  return (
    <div className='col-lg-12 col-md-12 col-sm-12 mb-4 mt-5'>
      <h4 className={`${font} text-secondary`}>{msg}</h4>
      <div>{lineChart}</div>
      <h5>
        {lan === 'bn'
          ? `${country} এর বর্তমান পরিস্থিতি`
          : `Current state in ${country}`}
      </h5>
      <div>{barChart}</div>
    </div>
  );
};

export default Charts;
