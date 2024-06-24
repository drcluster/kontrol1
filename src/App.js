import React, { useState, useEffect } from 'react';
import TaskManager from './components/TaskManager';
import LanguageSwitcher from './components/LanguageSwitcher';
import ThemeSwitcher from './components/ThemeSwitcher';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');

  useEffect(() => {
    localStorage.setItem('theme', theme);
    localStorage.setItem('language', language);
    document.body.className = theme;
    i18n.changeLanguage(language);
  }, [theme, language]);

  return (
    <I18nextProvider i18n={i18n}>
      <div className={`app ${theme}`}>
        <header className="d-flex justify-content-between align-items-center p-3 mb-4 border-bottom">
          <h1>{i18n.t('Task Manager')}</h1>
          <div className="d-flex align-items-center">
            <LanguageSwitcher language={language} setLanguage={setLanguage} />
            <ThemeSwitcher theme={theme} setTheme={setTheme} />
          </div>
        </header>
        <div className="container">
          <TaskManager />
        </div>
      </div>
    </I18nextProvider>
  );
}

export default App;
