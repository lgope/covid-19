import casesImg from '../images/infected_cases.svg';
import deathsImg from '../images/deaths_cases.svg';
import recoveredImg from '../images/recoveries_from_covid.svg';
import criticalImg from '../images/criticalImg.png';
import activeCasesImg from '../images/activeCasesImg.svg';

export const globalEnglishData = (data) => {
  const modifiedData = [
    {
      id: 0,
      name: 'Cases',
      img: casesImg,
      endData: data.cases,
      textStyle: 'text-info',
      text: 'TOTAL CASES',
    },
    {
      id: 1,
      name: 'Active case',
      img: activeCasesImg,
      endData: data.active,
      textStyle: 'text-dark',
      text: 'ACTIVE CASES',
    },
    {
      id: 2,
      name: 'Deaths',
      img: deathsImg,
      endData: data.deaths,
      textStyle: 'text-danger',
      text: 'TOTAL DEATHS',
    },
    {
      id: 3,
      name: 'Recover',
      img: recoveredImg,
      endData: data.recovered,
      textStyle: 'text-success',
      text: 'TOTAL RECOVERIES',
    },
  ];

  return modifiedData;
};

export const globalBangliData = (data) => {
  const modifiedData = [
    {
      id: 0,
      name: 'Cases',
      img: casesImg,
      endData: data.cases,
      textStyle: 'text-info',
      smallText: 'জন',
      text: 'আক্রান্ত হয়েছে',
    },
    {
      id: 1,
      name: 'Active case',
      img: activeCasesImg,
      endData: data.active,
      textStyle: 'text-dark',
      smallText: 'জন',
      text: 'গুরুতর অবস্থা',
    },
    {
      id: 2,
      name: 'Deaths',
      img: deathsImg,
      endData: data.deaths,
      textStyle: 'text-danger',
      smallText: 'জন',
      text: 'মারা গিয়েছে',
    },
    {
      id: 3,
      name: 'Recover',
      img: recoveredImg,
      endData: data.recovered,
      textStyle: 'text-success',
      smallText: 'জন',
      text: 'সুস্থ্য হয়েছেন',
    },
  ];

  return modifiedData;
};

export const localBangliData = (localData) => {
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

  return [modifiedData, todaysData];
};

export const localEnglishData = (localData) => {
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

  return [modifiedData, todaysData];
};

// export default globalBangliData;
