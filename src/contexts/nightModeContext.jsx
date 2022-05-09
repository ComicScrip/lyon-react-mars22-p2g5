import React, { createContext, useState, useMemo } from 'react';
import nightBkg from '../assets/backdesktop-night.png';
import dayBkg from '../assets/backdesktop.png';

export const NightModeContext = createContext();

function NightModeContextProvider({ children }) {
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
    color: 'white',
  };
  const [isNight, setIsNight] = useState(false);
  const pageStyle = isNight ? pageNightStyle : pageDayStyle;

  const nightModeRendering = useMemo(
    () => ({ isNight, setIsNight, pageStyle }),
    [isNight, pageStyle]
  );
  return (
    <NightModeContext.Provider value={nightModeRendering}>
      {children}
    </NightModeContext.Provider>
  );
}

export default NightModeContextProvider;
