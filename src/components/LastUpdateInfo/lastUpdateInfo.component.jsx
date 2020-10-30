import React from 'react';
import Moment from 'react-moment';

const lastUpdateInfo = ({ data, lan }) => (
  <div className='row justify-content-between align-items-center'>
    <div className='col-sm-6'>
      <h3> {lan === 'bn' ? 'বিশ্ব পরিসংখ্যান' : 'Global Information : '} </h3>
    </div>
    <div className='col-sm-6 text-sm-right'>
      <h5 className='en'>
        {data?.updated ? (
          <small className='text-muted'>
            Last updated <Moment fromNow>{data?.updated}</Moment>
          </small>
        ) : (
          <small className='en text-info'>Updating . . .</small>
        )}
      </h5>
    </div>
  </div>
);

export default lastUpdateInfo;
