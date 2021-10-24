import { useState } from 'react';
import useInterval from './useInterval';
import moment from 'moment';

const useCurrentTime = (format = 'hh:mm:ss') => {
  const [time, setTime] = useState(moment());
  const updateTime = () => setTime(moment());

  useInterval(updateTime, 1000);

  return time.format(format);
  
};

export default useCurrentTime;
