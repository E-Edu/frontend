import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import de from './de/resource.json';
import en from './en/resource.json';

i18n.use(initReactI18next).init({
    debug: false,
    defaultNS: 'translation',
    fallbackLng: ['en', 'de'],
    interpolation: { escapeValue: false },
    lng: localStorage.getItem('language'),
    load: 'all',
    ns: ['translation'],
    react: { wait: true },
    resources: { de: { translation: de }, en: { translation: en } },
});

export const t = i18n;
