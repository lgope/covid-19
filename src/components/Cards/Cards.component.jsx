import React from 'react';
import CountUp from 'react-countup';
import { globalEnglishData } from '../../Data/data';
import LastUpdate from '../LastUpdateInfo/lastUpdateInfo.component';
import GlobalDataChart from '../Charts/GlobalDataChart.component';

const Cards = ({ data, lan }) => {
  const modifiedData = globalEnglishData(data);

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
                      <img src={da.img} alt='' className='img-fluid' />
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

          <div className='col-lg-8 col-sm-10 col-md-10 text-center my-3'>
            <GlobalDataChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
