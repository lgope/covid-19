import React, { useState, useEffect } from 'react';
import { fetchData } from '../../api/covid19.api';
import { Polar } from 'react-chartjs-2';
import Spinner from '../Spinner/Spinner.component';

const GlobalDataChart = () => {
  const [globalData, setGlobalData] = useState({});
  useEffect(() => {
    const fetchDataAPI = async () => {
      setGlobalData(await fetchData());
    };
    fetchDataAPI();
  }, []);
  if (!globalData?.cases) return <Spinner />;
  const polar = globalData?.cases ? (
    <Polar 
    data={{
      labels: ['Confirmed', 'Deaths', 'Recovered'],
      datasets: [
        {
          label: 'COVID-19',
          backgroundColor: [
            'rgba(26, 16, 83, 0.603)',
            'rgb(255, 99, 132)',
            'rgb(29, 209, 161)',
          ],
          borderColor: '#fff',
          data: [
            globalData?.cases,
            globalData?.deaths,
            globalData?.recovered,
          ],
        },
      ],
    }}
     />
  ) : null;

  return polar;
};

export default GlobalDataChart;
