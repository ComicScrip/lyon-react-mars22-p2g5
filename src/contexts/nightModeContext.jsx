import React, {
  createContext,
  useState,
  useLocalStorage,
  useMemo,
} from 'react';
import nightBkg from '../assets/backdesktop-night.png';
import dayBkg from '../assets/backdesktop.png';

const NightModeContext = createContext();

export function NightModeContextProvider({ children }) {
  const pageDayStyle = {
    backgroundImage: `url(${dayBkg})`,
    backgroundSize: 'cover',
    backgroundRepaeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundAttachment: 'fixed',
  };
  const pageNightStyle = {
    backgroundImage: `url(${nightBkg})`,
    backgroundSize: 'cover',
    backgroundRepaeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundAttachment: 'fixed',
  };
  const [isNight, setIsNight] = useLocalStorage('isNight', false);
  const [pageStyle, setPageStyle] = useState(pageDayStyle);
  const nightModeRendering = useMemo(() => {
    setIsNight(isNight);
  }, [isNight]);
  const pageStyleRendering = useMemo(() => {
    setPageStyle(pageDayStyle);
  }, [pageStyle]);
  if (isNight) {
    setPageStyle(pageNightStyle);
  } else {
    setPageStyle(pageDayStyle);
  }

  return (
    <NightModeContext.Provider
      value={{
        isNight,
        setIsNight,
        pageStyle,
        setPageStyle,
        nightModeRendering,
        pageStyleRendering,
      }}
    >
      {children}
    </NightModeContext.Provider>
  );
}

export default NightModeContext;
