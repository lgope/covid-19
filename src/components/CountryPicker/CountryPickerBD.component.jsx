import React, { Fragment } from 'react';
import CountUp from 'react-countup';

import Country from './Country.component';
import { localBangliData } from '../../Data/data';

import styles from './CountryPickerBD.module.css';


const CountryPicker = ({ handleCountryChange, localData, country }) => {
  const [modifiedData, todaysData] = localBangliData(localData);

  return (
    <div className={styles.bn}>
      <Country
        handleCountryChange={handleCountryChange}
        localData={localData}
        country={country}
        lan='bn'
      />

      <div className='row local'>
        {modifiedData.map((data) => (
          <div className='col-md-4 my-3 hvr-bob'>
            <div className='row shadow align-items-center justify-content-between no-gutters'>
              <div className='col-3'>
                <img src={data.img} alt='&nbsp;' className='img-fluid' />
              </div>
              <div className='col-8'>
                <h2 className={data.textStyle}>
                  {data?.endData >= 0 ? (
                    <Fragment>
                      <CountUp
                        formattingFn={(num) => num.toLocaleString('bn-BD')}
                        start={0}
                        end={data.endData}
                        duration={2.3}
                        separator={','}
                      />{' '}
                      <small className='text-dark'>{data.smallText}</small>
                    </Fragment>
                  ) : (
                    <small className={`${styles.en} text-primary`}>
                      Loading . . .
                    </small>
                  )}
                </h2>
                <h4 className='text-muted'>{data.text}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='row local'>
        <div className='col-md-12 my-3 py-3 text-left'>
          <h3>আজকের সর্বশেষ তথ্য : </h3>
        </div>

        {todaysData.map((data) => (
          <div className='col-md-4 my-3 hvr-wobble-vertical'>
            <div className='row shadow align-items-center justify-content-between no-gutters'>
              <div className='col-3'>
                <img src={data.img} alt='&nbsp;' className={data.imgClass} />
              </div>
              <div className='col-8'>
                <h2 className={data.textStyle}>
                  {data?.endData >= 0 ? (
                    <Fragment>
                      <CountUp
                        formattingFn={(num) => num.toLocaleString('bn-BD')}
                        start={0}
                        end={data.endData}
                        duration={2.3}
                        separator={','}
                      />{' '}
                      <small className='text-dark'>{data.smallText}</small>
                    </Fragment>
                  ) : (
                    <small className={`${styles.en} text-primary`}>
                      Loading . . .
                    </small>
                  )}
                </h2>
                <h4 className='text-muted'>{data.text}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryPicker;
