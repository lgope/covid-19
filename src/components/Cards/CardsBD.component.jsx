import React, { Fragment } from 'react';
import CountUp from 'react-countup';
import GlobalDataChart from '../Charts/GlobalDataChart.component';
import LastUpdate from '../LastUpdateInfo/lastUpdateInfo.component';
import { globalBangliData } from '../../Data/data';
import styles from './CardsBD.module.css';

const Cards = ({ data, lan }) => {
  const mainDivStyle = lan === 'bn' ? 'landingBn' : 'landingEn';
  const modifiedData = globalBangliData(data);

  return (
    <div className={`${styles.bn} ${mainDivStyle}`}>
      <div className='container'>
        <div className='row py-5 justify-content-between align-items-center global'>
          <div className='col-md-12'>
            <LastUpdate data={data} lan={lan} />
          </div>

          <div className='col-lg-4 my-3'>
            <div className='row'>
              {modifiedData.map((da, id) => (
                <div className='col-md-6 col-sm-12 col-lg-12 my-3 hvr-grow-shadow'>
                  <div className='row shadow align-items-center justify-content-between no-gutters'>
                    <div className='col-3'>
                      <img key={id} src={da.img} alt='' className='img-fluid' />
                    </div>
                    <div className='col-8'>
                      <h2 key={id} className={da.textStyle}>
                        {da?.endData ? (
                          <Fragment>
                            {lan === 'bn' ? (
                              <CountUp
                                start={0}
                                formattingFn={(num) =>
                                  num.toLocaleString('bn-BD')
                                }
                                end={da?.endData}
                                duration={2.3}
                                separator={','}
                              />
                            ) : (
                              <CountUp
                                start={0}
                                end={da?.endData}
                                duration={2.3}
                                separator={','}
                              />
                            )}{' '}
                            <small className='text-dark'>{da.smallText}</small>
                          </Fragment>
                        ) : (
                          <small className={`${styles.en} text-primary`}>
                            Loading . . .
                          </small>
                        )}
                      </h2>
                      <h4 className='text-muted'>{da.text}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='col-lg-8 col-sm-10 col-md-10 text-center my-3'>
            <GlobalDataChart />
          </div>

          {/* 🦠 */}
        </div>
      </div>
    </div>
  );
};

export default Cards;
