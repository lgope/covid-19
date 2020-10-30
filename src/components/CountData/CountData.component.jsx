import React from 'react';

import CountUp from 'react-countup';

const CountData = ({ data, lan }) => (
  <>
    {lan === 'bn' ? (
      <CountUp
        start={0}
        formattingFn={num => num.toLocaleString('bn-BD')}
        end={data.endData}
        duration={2.3}
        separator={','}
      />
    ) : (
      <CountUp
        start={0}
        formattingFn={num => num.toLocaleString('en-US')}
        end={data.endData}
        separator=','
      />
    )}
  </>
);

export default CountData;
