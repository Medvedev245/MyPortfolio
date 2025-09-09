// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import en from '../locales/en/translation.json';
// import cs from '../locales/cs/translation.json';
// import uk from '../locales/uk/translation.json';

// i18n.use(initReactI18next).init({
//   resources: {
//     en: { translation: en },
//     cs: { translation: cs },
//     uk: { translation: uk },
//   },
//   lng: 'en',
//   fallbackLng: 'en',
//   interpolation: { escapeValue: false },
// });

// export default i18n;

import i18n from 'i18next'; // обязательно раскомментировать
import { initReactI18next } from 'react-i18next';
import en from '../locales/en/translation.json';
import cs from '../locales/cs/translation.json';
import uk from '../locales/uk/translation.json';
import ru from '../locales/ru/translation.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    cs: { translation: cs },
    uk: { translation: uk },
    ru: { translation: ru },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
