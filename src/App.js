import React, { Component } from 'react';

import { Cards, Chart, CountryPicker, FooterPage } from './components';
import './App.styles.css';
import { fetchApiData } from './api/covid19.api';

import covid19Img from './images/image.png'

class App extends Component {

    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchApiData();

        this.setState({ data: fetchedData })
    }

    handleCountryChange = async country => {
        const fetchedData = await fetchApiData(country);

        this.setState({ data: fetchedData, country: country });
    }

    render() {
        const { data, country } = this.state;
        return (
            <div className='container'>
                <img className='image' src={covid19Img} alt='COVID-19' />
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
                <FooterPage />
            </div>
        )
    }
}

export default App;