import React, { useEffect, useState, Fragment } from 'react';
import { fetchCountryData } from '../../api/covid19.api';
import { Select } from 'antd';
import CountUp from 'react-countup';
import casesImg from '../../images/infected_cases.svg';
import deathsImg from '../../images/deaths_cases.svg';
import recoveredImg from '../../images/recoveries_from_covid.svg';
import criticalImg from '../../images/criticalImg.png';
import styles from './CountryPickerBD.module.css';
const { Option } = Select;

const CountryPicker = ({ handleCountryChange, localData, country }) => {
  const [fetchedCountryData, setFetchedCountryData] = useState([]);
  useEffect(() => {
    const fetchedAPI = async () => {
      setFetchedCountryData(await fetchCountryData());
    };
    fetchedAPI();
  }, [setFetchedCountryData]);

  const modifiedData = [
    {
      name: 'আক্রান্ত',
      img: casesImg,
      endData: localData.cases,
      textStyle: 'text-info',
      smallText: 'জন',
      text: 'আক্রান্ত হয়েছে',
    },
    {
      name: 'মারা গিয়েছে',
      img: deathsImg,
      endData: localData.deaths,
      textStyle: 'text-danger',
      smallText: 'জন',
      text: 'মারা গিয়েছে',
    },
    {
      name: 'সুস্থ্য হয়েছেন',
      img: recoveredImg,
      endData: localData.recovered,
      textStyle: 'text-success',
      smallText: 'জন',
      text: 'সুস্থ্য হয়েছেন',
    },
  ];

  const todaysData = [
    {
      name: 'আজ আক্রান্ত',
      img: casesImg,
      imgClass: 'img-fluid',
      endData: localData.todayCases,
      textStyle: 'text-info',
      smallText: 'জন',
      text: 'আজ আক্রান্ত হয়েছে',
    },
    {
      name: 'মারা গিয়েছে',
      img: deathsImg,
      imgClass: 'img-fluid',
      endData: localData.todayDeaths,
      textStyle: 'text-danger',
      smallText: 'জন',
      text: 'আজ মারা গিয়েছে',
    },
    {
      name: 'গুরুতর',
      img: criticalImg,
      imgClass: 'img-fluid criticalImg',
      endData: localData.critical,
      textStyle: 'text-warning',
      smallText: 'জনের',
      text: 'গুরুতর অবস্থা',
    },
  ];
  return (
    <div className={styles.bn}>
      <div className='row justify-content-between align-items-center p-3'>
        <div className='col-md-12 text-center'>
          <h2 className='mb-5'>
            আপনি দেখছেন <span className={styles.en}>{country}</span> এর তথ্য
          </h2>
        </div>
        <div className='my-3 d-flex align-items-center'>
          <h4 className={`${styles.en} mb-0`}>
            {localData?.country ? (
              localData.country
            ) : (
              <small className={`${styles.en} text-primary`}>
                Loading . . .
              </small>
            )}
          </h4>
          &nbsp; &nbsp;
          <div>
            {localData?.flag ? (
              <img
                src={localData.flag}
                style={{ width: '35px' }}
                alt='&nbsp;'
              />
            ) : null}
          </div>
        </div>
        <div className='my-3'>
          <div className={`${styles.en} form-row`}>
            <Select
              onChange={(country) => handleCountryChange(country)}
              showSearch
              size={'large'}
              style={{ width: 200 }}
              placeholder='Select a Country'
              optionFilterProp='children'
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value='bangladesh'>Bangladesh</Option>
              {fetchedCountryData?.map((data, i) => (
                <Option key={i} value={data.code}>
                  {data.country}
                </Option>
              ))}
            </Select>
          </div>
        </div>
      </div>

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
