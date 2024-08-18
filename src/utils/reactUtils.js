import { useState } from 'react';

function useThrottle(func, limit = 200) {
  const [inThrottle, setInThrottle] = useState(false);

  return (...args) => {
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      setInThrottle(true);
      setTimeout(() => {
        setInThrottle(false);
      }, limit);
    }
  };
}

const useDebounce = (func, timeout = 200) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    if (args[0]?.nativeEvent && args[0]?.persist) {
      args[0].persist();
    }
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
};

export { useDebounce, useThrottle };
