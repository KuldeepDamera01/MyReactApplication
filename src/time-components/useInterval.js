import { useEffect, useRef } from 'react';

const useInterval = (callback, interval) => {
  const savedCallback = useRef();

  savedCallback.current = callback;

  useEffect(() => {
    const tick = () => savedCallback.current();
    const id = setInterval(tick, interval);
    return () => clearInterval(id);
  }, [interval]);
};

export default useInterval;
