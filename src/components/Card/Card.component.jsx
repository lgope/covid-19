import React, { Fragment } from 'react';
import CountData from '../CountData/CountData.component';

const Card = ({ data, language }) => (
  <div className='col-md-6 col-sm-12 col-lg-12 my-3 hvr-grow-shadow'>
    <div className='row shadow align-items-center justify-content-between no-gutters'>
      <div className='col-3'>
        <img src={data.img} alt='' className='img-fluid' />
      </div>
      <div className='col-8'>
        <h2 className={data.textStyle}>
          {data?.endData ? (
            <Fragment>
              <CountData data={data} lan={language} />
              <small className='text-dark'>{data.smallText}</small>
            </Fragment>
          ) : (
            <small className='en text-primary'>Loading . . .</small>
          )}
        </h2>
        {language === 'bn' ? (
          <h4 className='text-muted'>{data.text}</h4>
        ) : (
          <p className='text-muted'>{data.text}</p>
        )}
      </div>
    </div>
  </div>
);

export default Card;
