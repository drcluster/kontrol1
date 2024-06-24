import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = ({ language, setLanguage }) => {
  const { i18n } = useTranslation();

  const handleChange = (e) => {
    const newLanguage = e.target.value;
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <select className="form-select me-2" value={language} onChange={handleChange}>
      <option value="en">English</option>
      <option value="ru">Русский</option>
      <option value="et">Eesti</option>
    </select>
  );
};

export default LanguageSwitcher;