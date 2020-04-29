import casesImg from '../images/infected_cases.svg';
import deathsImg from '../images/deaths_cases.svg';
import recoveredImg from '../images/recoveries_from_covid.svg';
import criticalImg from '../images/criticalImg.png';
import activeCasesImg from '../images/activeCasesImg.svg';

export const globalData = (data, lan) => {
  const modifiedData = [
    {
      id: 0,
      name: 'Cases',
      img: casesImg,
      endData: data.cases,
      textStyle: 'text-info',
      smallText: lan === 'bn' ? ' জন' : '',
      text: lan === 'bn' ? 'আক্রান্ত হয়েছে' : 'TOTAL CASES',
    },
    {
      id: 1,
      name: 'Active case',
      img: activeCasesImg,
      endData: data.active,
      textStyle: 'text-dark',
      smallText: lan === 'bn' ? ' জন' : '',
      text: lan === 'bn' ? 'গুরুতর অবস্থা' : 'ACTIVE CASES',
    },
    {
      id: 2,
      name: 'Deaths',
      img: deathsImg,
      endData: data.deaths,
      textStyle: 'text-danger',
      smallText: lan === 'bn' ? ' জন' : '',
      text: lan === 'bn' ? 'মারা গিয়েছে' : 'TOTAL DEATHS',
    },
    {
      id: 3,
      name: 'Recover',
      img: recoveredImg,
      endData: data.recovered,
      textStyle: 'text-success',
      smallText: lan === 'bn' ? ' জন' : '',
      text: lan === 'bn' ? 'সুস্থ্য হয়েছেন' : 'TOTAL RECOVERIES',
    },
  ];

  return modifiedData;
};

export const localData = (data, lan) => {
  const modifiedData = [
    {
      name: 'Confirmed',
      img: casesImg,
      endData: data.cases,
      textStyle: 'text-info',
      smallText: lan === 'bn' ? ' জন' : '',
      text: lan === 'bn' ? 'আক্রান্ত হয়েছে' : 'Confirmed',
    },
    {
      name: 'Deaths',
      img: deathsImg,
      endData: data.deaths,
      textStyle: 'text-danger',
      smallText: lan === 'bn' ? ' জন' : '',
      text: lan === 'bn' ? 'মারা গিয়েছে' : 'Deaths',
    },
    {
      name: 'Recovered',
      img: recoveredImg,
      endData: data.recovered,
      textStyle: 'text-success',
      smallText: lan === 'bn' ? ' জন' : '',
      text: lan === 'bn' ? 'সুস্থ্য হয়েছেন' : 'Recovered',
    },
  ];

  const todaysData = [
    {
      name: 'Confirmed',
      img: casesImg,
      imgClass: 'img-fluid',
      endData: data.todayCases,
      textStyle: 'text-info',
      smallText: lan === 'bn' ? ' জন' : '',
      text: lan === 'bn' ? 'আজ আক্রান্ত হয়েছে' : 'New Cases',
    },
    {
      name: 'Deaths',
      img: deathsImg,
      imgClass: 'img-fluid',
      endData: data.todayDeaths,
      textStyle: 'text-danger',
      smallText: lan === 'bn' ? ' জন' : '',
      text: lan === 'bn' ? 'আজ মারা গিয়েছে' : 'New Deaths',
    },
    {
      name: 'Recoverd',
      img: criticalImg,
      imgClass: 'img-fluid criticalImg',
      endData: data.critical,
      textStyle: 'text-warning',
      smallText: lan === 'bn' ? ' জনের' : '',
      text: lan === 'bn' ? 'গুরুতর অবস্থা' : 'Critical',
    },
  ];

  return [modifiedData, todaysData];
};

// export default globalBangliData;
