import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "University Task Manager": "University Task Manager",
      "Edit": "Edit",
      "Delete": "Delete",
      "Save": "Save",
      "Title": "Title",
      "Description": "Description",
      "Subject": "Subject",
      "Deadline": "Deadline",
      "Not ready": "Not ready",
      "Ready": "Ready",
      "Not Overdue": "Not Overdue",
      "Overdue": "Overdue",
      "Status": "Status",
      "Light mode": "Light mode",
      "Dark mode": "Dark mode",
      "Task Manager": "Task Manager",
      "Add assignment": "Add assignment",
      "Edit assignment": "Edit assignment",
      "Actions": "Actions",
      "Mark as Ready": "Mark as Ready",
      "Mark as Not Ready": "Mark as Not Ready",
    }
  },
  ru: {
    translation: {
      "University Task Manager": "Менеджер заданий университета",
      "Edit": "Редактировать",
      "Delete": "Удалить",
      "Save": "Сохранить",
      "Title": "Название",
      "Description": "Описание",
      "Subject": "Предмет",
      "Deadline": "Дедлайн",
      "Not ready": "Не готово",
      "Ready": "Готово",
      "Not Overdue": "Не просрочено",
      "Overdue": "Просрочено",
      "Status": "Статус",
      "Light mode": "Светлая тема",
      "Dark mode": "Темная тема",
      "Task Manager": "Менеджер заданий",
      "Add assignment": "Добавить задание",
      "Edit assignment": "Редактировать задание",
      "Actions": "Действия",
      "Mark as Ready": "Отметить как готово",
      "Mark as Not Ready": "Отметить как не готово",
    }
  },
  et: {
    translation: {
      "University Task Manager": "Ülikooli ülesannete haldur",
      "Edit": "Muuda",
      "Delete": "Kustuta",
      "Save": "Salvesta",
      "Title": "Pealkiri",
      "Description": "Kirjeldus",
      "Subject": "Teema",
      "Deadline": "Tähtaeg",
      "Not ready": "Pole valmis",
      "Ready": "Valmis",
      "Not Overdue": "Pole üle tähtaja",
      "Overdue": "Üle tähtaja",
      "Status": "Staatust",
      "Light mode": "Kerge teema",
      "Dark mode": "Tume teema",
      "Task Manager": "Ülesannete haldur",
      "Add assignment": "Lisa ülesanne",
      "Edit assignment": "Muuda ülesannet",
      "Actions": "Tegevused",
      "Mark as Ready": "Märkige kui Valmis",
      "Mark as Not Ready": "Märgi mittevalmis",
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('language') || 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
