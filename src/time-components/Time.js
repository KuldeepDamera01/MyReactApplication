import React, { useState } from 'react';
import useCurrentTime from './useCurrentTime';

const Time = (props) => {
  const time = useCurrentTime();

  return <h1 class="time">{time}</h1>;
};

export default Time;
