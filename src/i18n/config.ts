import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: "Welcome to Your Blank App",
      subtitle: "Start building your amazing project here!",
      language: "Language"
    }
  },
  pl: {
    translation: {
      welcome: "Witamy w Twojej Pustej Aplikacji",
      subtitle: "Zacznij budować swój niesamowity projekt tutaj!",
      language: "Język"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pl', // default to Polish
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;