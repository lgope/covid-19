import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import './Cards.styles.css';

const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading... 🔃';
  }

  const apiData = [
    {
      class_name: `card infected`,
      name: 'Infected',
      totalValue: confirmed,
      lastUpdate: lastUpdate,
      shortDes: `Number of active cases of COVID-19.`,
    },
    {
      class_name: `card recovered`,
      name: 'Recovered',
      totalValue: recovered,
      lastUpdate: lastUpdate,

      shortDes: `Number of recoveries from COVID-19.`,
    },
    {
      class_name: `card deaths`,
      name: 'Deaths',
      totalValue: deaths,
      lastUpdate: lastUpdate,
      shortDes: `Number of deaths caused by COVID-19.`,
    },
  ];

  return (
    <div className='container'>
      <Grid container spacing={3} justify='center'>
        {apiData.map((data, i) => {
          return (
            <Grid
              key={i}
              item
              xs={12}
              md={3}
              component={Card}
              className={data.class_name}
            >
              <CardContent>
                <Typography color='textSecondary' gutterBottom>
                  {data.name}
                </Typography>
                <Typography variant='h5' component='h2'>
                  <CountUp
                    start={0}
                    end={data.totalValue.value}
                    duration={2.75}
                    separator=','
                  />
                </Typography>
                <Typography color='textSecondary'>
                  {new Date(data.lastUpdate).toDateString()}
                </Typography>
                <Typography variant='body2' component='p'>
                  {data.shortDes}
                </Typography>
              </CardContent>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
export default Info;
