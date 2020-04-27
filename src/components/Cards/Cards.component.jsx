import React from 'react';
import CountUp from 'react-countup';
import casesImg from '../../images/infected_cases.svg';
import deathsImg from '../../images/deaths_cases.svg';
import recoveredImg from '../../images/recoveries_from_covid.svg';
import activeCasesImg from '../../images/activeCasesImg.svg';
import LastUpdate from '../LastUpdateInfo/lastUpdateInfo.component';
import GlobalDataChart from '../Charts/GlobalDataChart.component';

const Cards = ({ data, lan }) => {
  let modifiedData = [
    {
      name: 'Cases',
      img: casesImg,
      endData: data.cases,
      textStyle: 'text-info',
      text: 'TOTAL CASES',
    },
    {
      name: 'Active case',
      img: activeCasesImg,
      endData: data.active,
      textStyle: 'text-dark',
      text: 'ACTIVE CASES',
    },
    {
      name: 'Deaths',
      img: deathsImg,
      endData: data.deaths,
      textStyle: 'text-danger',
      text: 'TOTAL DEATHS',
    },
    {
      name: 'Recover',
      img: recoveredImg,
      endData: data.recovered,
      textStyle: 'text-success',
      text: 'TOTAL RECOVERIES',
    },
  ];

  return (
    <div className='landingEn'>
      <div className='container'>
        <div className='row py-5 justify-content-between align-items-center global'>
          <div className='col-md-12'>
            <LastUpdate data={data} lan={lan} />
          </div>

          <div className='col-lg-4 my-3'>
            <div className='row'>
              {modifiedData.map((da) => (
                <div className='col-md-6 col-sm-12 col-lg-12 my-3 hvr-bob'>
                  <div className='row shadow align-items-center justify-content-between no-gutters'>
                    <div className='col-3'>
                      <img src={da.img} alt='Cases' className='img-fluid' />
                    </div>
                    <div className='col-8'>
                      <h2 className={da.textStyle}>
                        {da?.endData ? (
                          <CountUp
                            start={0}
                            end={da?.endData}
                            duration={2.3}
                            separator={','}
                          />
                        ) : (
                          <small className='text-primary'>Loading . . .</small>
                        )}
                      </h2>
                      <p className='text-muted'>{da.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='col-lg-8 text-center my-3'>
            <GlobalDataChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
