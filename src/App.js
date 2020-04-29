import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import { Navbar, Cards, Charts, Country, Notice, Footer } from './components';
import { fetchDate, fetchLocalCountry } from './api/covid19.api';

class App extends Component {
  state = { data: {}, localData: {}, country: 'Bangladesh' };

  async componentDidMount() {
    try {
      const data = await fetchDate();
      const localData = await fetchLocalCountry();
      this.setState({ data, localData });
    } catch (err) {
      console.log(err);
    }
  }
  handleCountryChange = async (countryName) => {
    const localData = await fetchLocalCountry(countryName);
    const { country } = localData;
    this.setState({ localData, country });
  };

  render() {
    const { data, localData, country } = this.state;
    return (
      <Router>
        <div>
          <Switch>
            {/* Bangla UI */}
            <Route
              exact
              path='/'
              render={(props) => (
                <Fragment>
                  <Navbar font='font-en' lan='bn' link='/en' nav='English' />
                  <Cards data={data} lan='bn' />
                  <div className='container'>
                    <Country
                      country={country}
                      data={localData}
                      handleCountryChange={this.handleCountryChange}
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
              render={(props) => (
                <Fragment>
                  <Navbar font='font-bd' lan='en' link='/' nav='বাংলা' />
                  <Cards data={data} lan='en' />
                  <div className='container'>
                    <Country
                      country={country}
                      data={localData}
                      handleCountryChange={this.handleCountryChange}
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
  }
}

export default App;
