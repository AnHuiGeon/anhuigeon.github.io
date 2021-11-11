import { useState, useCallback, useEffect } from 'react';

const UseTheme = () => {
  const [theme, setTheme] = useState(null);

  const themeHookCallback = useCallback(() => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    window.__setPreferredTheme(nextTheme);
  }, [theme]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setTheme(window.__theme);
    }

    window.__onThemeChange = (newTheme) => {
      setTheme(newTheme);
    };
  }, []);

  return [theme, themeHookCallback];
};

export default UseTheme;
