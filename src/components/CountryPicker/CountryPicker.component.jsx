import React from 'react';
import CountUp from 'react-countup';

import { localEnglishData } from '../../Data/data';
import Country from './Country.component';

const CountryPicker = ({ handleCountryChange, localData, country }) => {
  const [modifiedData, todaysData] = localEnglishData(localData);

  return (
    <div>
      <Country
        handleCountryChange={handleCountryChange}
        localData={localData}
        country={country}
        lan='en'
      />

      <div className='row local'>
        {modifiedData.map((data) => (
          <div className='col-md-4 my-3 hvr-grow-shadow'>
            <div className='row shadow align-items-center justify-content-between no-gutters'>
              <div className='col-3'>
                <img src={data.img} alt='&nbsp;' className='img-fluid' />
              </div>
              <div className='col-8'>
                <h2 className={data.textStyle}>
                  {data?.endData >= 0 ? (
                    <CountUp
                      start={0}
                      end={data.endData}
                      duration={2.3}
                      separator={','}
                    />
                  ) : (
                    <small className='text-primary'>Loading . . .</small>
                  )}
                </h2>
                <p className='text-muted'>{data.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='row local'>
        <div className='col-md-12 my-3 py-3 text-left'>
          <h3>Today's Last Updates :</h3>
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
                    <CountUp
                      start={0}
                      end={data.endData}
                      duration={2.3}
                      separator={','}
                    />
                  ) : (
                    <small className='text-primary'>Loading . . .</small>
                  )}
                </h2>
                <p className='text-muted'>{data.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryPicker;
