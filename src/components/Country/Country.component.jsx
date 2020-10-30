import React from 'react';

import CountryPicker from '../CountryPicker/CountryPicker.component';
import CountryLocalData from '../CountryLocalData/CountryLocalData.component';
import CountryTodaysData from '../CountryTodaysData/CountryTodaysData.component';
import { localData } from '../../Data/data';

import './Country.style.css';

const Country = ({
  handleCountryChange,
  data,
  country,
  language,
}) => {
  const [modifiedData, todaysData] = localData(data, language);

  return (
    <div className='bn'>
      <CountryPicker
        handleCountryChange={handleCountryChange}
        localData={data}
        country={country}
        lan={language}
      />

      <div className='row local'>
        {modifiedData.map((data, index) => (
          <CountryLocalData key={index} data={data} lan={language} />
        ))}
      </div>

      <div className='row local'>
        <div className='col-md-12 my-2 py-2 text-left'>
          {language === 'bn' ? (
            <h3>আজকের সর্বশেষ তথ্য : </h3>
          ) : (
            <h3>Today's Last Updates :</h3>
          )}
        </div>

        {todaysData.map((data, index) => (
          <CountryTodaysData key={index} data={data} lan={language} />
        ))}
      </div>
    </div>
  );
};

export default Country;
