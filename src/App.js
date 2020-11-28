import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import { Navbar, Cards, Charts, Country, Notice, Footer } from './components';
import { fetchData, fetchLocalCountry } from './api/covid19.api';

const App = () => {
  const [data, setData] = useState({});
  const [localData, setLocalData] = useState({});
  const [country, setCountry] = useState('Bangladesh');

  useEffect(() => {
    const fetchFunc = async () => {
      const data = await fetchData();
      const localData = await fetchLocalCountry();

      setData(data);
      setLocalData(localData);
    };

    fetchFunc();
  },[]);

  const handleCountryChange = async countryName => {
    const localData = await fetchLocalCountry(countryName);
    const { country } = localData;
    setLocalData(localData);
    setCountry(country);
  };

  return (
    <Router>
      <div>
        <Switch>
          {/* Bangla UI */}
          <Route
            exact
            path='/'
            render={props => (
              <Fragment>
                <Navbar font='font-en' lan='bn' link='/en' nav='English' />
                <Cards data={data} lan='bn' />
                <div className='container'>
                  <Country
                    country={country}
                    data={localData}
                    handleCountryChange={handleCountryChange}
                    language='bn'
                  />
                  <Charts
                    font='font-bd'
                    msg={`${country} গত ৩০ দিনের তথ্য`}
                    country={country}
                    lan='bn'
                  />
                  <Notice lan='bn' />
                </div>
                <Footer font='font-bd' lan='bn' />
              </Fragment>
            )}
          />

          {/* English UI */}
          <Route
            exact
            path='/en'
            render={props => (
              <Fragment>
                <Navbar font='font-bd' lan='en' link='/' nav='বাংলা' />
                <Cards data={data} lan='en' />
                <div className='container'>
                  <Country
                    country={country}
                    data={localData}
                    handleCountryChange={handleCountryChange}
                    language='en'
                  />
                  <Charts
                    font='font-en'
                    msg={`Last 30 day's information of ${country}`}
                    country={country}
                    lan='en'
                  />
                  <Notice lan='en' />
                </div>
                <Footer font='font-en' lan='en' />
              </Fragment>
            )}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
