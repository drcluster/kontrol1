import React from 'react';
import { useTranslation } from 'react-i18next';

const ThemeSwitcher = ({ theme, setTheme }) => {
  const { t } = useTranslation();
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button className="btn btn-secondary ms-2" onClick={toggleTheme}>
      {theme === 'light' ? t('Dark mode') : t('Light mode')}
    </button>
  );
};

export default ThemeSwitcher;
