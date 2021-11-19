import { useState, useEffect } from 'react';

const UseTheme = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setTheme(window.__theme);
    }

    window.__onThemeChange = (newTheme) => {
      setTheme(newTheme);
    };
  }, []);

  return [theme];
};

export default UseTheme;
