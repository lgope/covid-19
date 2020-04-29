import React from 'react';

import CountUp from 'react-countup';

function CountData({ data, lan }) {
  if (lan === 'bn') {
    return (
      <CountUp
        start={0}
        formattingFn={(num) => num.toLocaleString('bn-BD')}
        end={data.endData}
        duration={2.3}
        separator={','}
      />
    );
  }

  return <CountUp start={0} end={data.endData} separator=',' />;
}

export default CountData;
