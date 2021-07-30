import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import EnglishLocales from './locales/en.json';
import ArabicLocales from './locales/ar.json';

import LocalStorage from './utils/service';

const { location } = window;
const { search } = location;
let selectedLang = 'en';
if (search.indexOf('?ln=') > -1) {
  const searchsplit = search.split('?ln=');
  const [, lnvalue] = searchsplit;
  if (lnvalue) selectedLang = lnvalue;
  else selectedLang = 'en';
}
// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: EnglishLocales
  },
  ar: {
    translation: ArabicLocales
  }
};

const selectedLanguage = localStorage.getItem('appLanguage');;
if (selectedLanguage && selectedLanguage !== 'null') {
  if (selectedLanguage === 'english') {
    selectedLang = 'en';
  } else {
    selectedLang = 'ar';
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: selectedLang,
  fallbackLng: 'en',
  keySeparator: false, // we do not use keys in form messages.welcome
  interpolation: {
    escapeValue: false // react already safes from xss
  }
});

export default i18n;
