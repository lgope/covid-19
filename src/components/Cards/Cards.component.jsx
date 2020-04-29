import React from 'react';
import GlobalDataChart from '../Charts/GlobalDataChart.component';
import LastUpdate from '../LastUpdateInfo/lastUpdateInfo.component';
import { globalData } from '../../Data/data';
import Card from '../Card/Card.component';
import './Cards.style.css';

const Cards = ({ data, lan }) => {
  const mainDivStyle = lan === 'bn' ? 'landingBn' : 'landingEn';

  const modifiedData = globalData(data, lan)

  return (
    <div className={`bn ${mainDivStyle}`}>
      <div className='container'>
        <div className='row py-5 justify-content-between align-items-center global'>
          <div className='col-md-12'>
            <LastUpdate data={data} lan={lan} />
          </div>

          <div className='col-lg-4 my-3'>
            <div className='row'>
              {modifiedData.map((data, id) => (
                <Card data={data} id={id} language={lan} />
              ))}
            </div>
          </div>

          <div className='col-lg-8 col-sm-10 col-md-10 text-center my-3'>
            <GlobalDataChart />
          </div>

          {/* 🦠 */}
        </div>
      </div>
    </div>
  );
};

export default Cards;
