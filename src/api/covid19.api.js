import axios from 'axios';

const api = 'https://corona.lmao.ninja/v2';

// Global Data
export const fetchDate = async () => {
  try {
    const {
      data: {
        cases,
        active,
        todayCases,
        recovered,
        deaths,
        todayDeaths,
        updated,
      },
    } = await axios.get(`${api}/all`);

    const modifiedData = {
      cases,
      active,
      todayCases,
      recovered,
      todayDeaths,
      deaths,
      updated,
    };
    return modifiedData;
  } catch (err) {
    console.log(err);
  }
};

// Local Country

export const fetchLocalCountry = async (countryName) => {
  let selectCountry = 'Bangladesh';
  if (countryName) {
    selectCountry = countryName;
  }
  try {
    const {
      data: {
        country,
        countryInfo,
        cases,
        todayCases,
        recovered,
        deaths,
        todayDeaths,
        critical,
        updated,
      },
    } = await axios.get(`${api}/countries/${selectCountry}`);

    const modifiedData = {
      country,
      flag: countryInfo.flag,
      cases,
      todayCases,
      recovered,
      todayDeaths,
      deaths,
      critical,
      updated,
    };

    return modifiedData;
  } catch (err) {
    console.log(err);
  }
};

// Select Country

export const fetchCountryData = async () => {
  try {
    const { data } = await axios.get(`${api}/countries`);
    return data.map((info) => ({
      country: info.country,
      code: info.countryInfo.iso2,
      flag: info.countryInfo.flag,
    }));
  } catch (err) {
    console.log(err);
  }
};

// Daily Data

export const fetchDaily = async (country) => {
  try {
    const { data } = await axios.get(`${api}/historical/${country}`);

    const { timeline } = data;

    const { cases, deaths, recovered } = timeline;

    let modifiedData = {
      confirmed: [],
      deaths: [],
      recovere: [],
      date: [],
    };

    for (let key in cases) {
      modifiedData.confirmed.push(cases[key]);
      modifiedData.date.push(key);
    }

    for (let key in deaths) {
      modifiedData.deaths.push(deaths[key]);
    }

    for (let key in recovered) {
      modifiedData.recovere.push(recovered[key]);
    }
    return modifiedData;
  } catch (err) {
    console.log(err);
  }
};
