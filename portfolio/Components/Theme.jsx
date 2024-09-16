import { useEffect, useState } from 'react';

const themeList = ['light', 'dark', 'green', 'blue'];

const useTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || themeList[0]);

  const setThemeByName = (themeName) => {
    setTheme(themeName);
    localStorage.setItem('theme', themeName);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  return { theme, setThemeByName };
};

export { themeList, useTheme };