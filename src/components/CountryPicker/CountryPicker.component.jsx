import React, { useEffect, useState } from 'react';
import { fetchCountryData } from '../../api/covid19.api';
import { Select } from 'antd';
import CountUp from 'react-countup';
import casesImg from '../../images/infected_cases.svg';
import deathsImg from '../../images/deaths_cases.svg';
import recoveredImg from '../../images/recoveries_from_covid.svg';
import criticalImg from '../../images/criticalImg.png';
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
      name: 'Confirmed',
      img: casesImg,
      endData: localData.cases,
      textStyle: 'text-info',
      text: 'Confirmed',
    },
    {
      name: 'Deaths',
      img: deathsImg,
      endData: localData.deaths,
      textStyle: 'text-danger',
      text: 'Deaths',
    },
    {
      name: 'Recoverd',
      img: recoveredImg,
      endData: localData.recovered,
      textStyle: 'text-success',
      text: 'Recoverd',
    },
  ];

  const todaysData = [
    {
      name: 'New Cases',
      img: casesImg,
      imgClass: 'img-fluid',
      endData: localData.todayCases,
      textStyle: 'text-info',
      text: 'New Cases',
    },
    {
      name: 'New Deaths',
      img: deathsImg,
      imgClass: 'img-fluid',
      endData: localData.todayDeaths,
      textStyle: 'text-danger',
      text: 'New Deaths',
    },
    {
      name: 'Critical',
      img: criticalImg,
      imgClass: 'img-fluid criticalImg',
      endData: localData.critical,
      textStyle: 'text-warning',
      text: 'Critical',
    },
  ];

  return (
    <div>
      <div className='row justify-content-between align-items-center p-3'>
        <div className='col-md-12 text-center'>
          <h1 className='mb-5'>You are viewing {country} data</h1>
        </div>
        <div className='my-3 d-flex align-items-center'>
          <h4 className='mb-0'>
            {localData?.country ? (
              localData.country
            ) : (
              <small className='text-primary'>Loading . . .</small>
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
          <div className='form-row'>
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
