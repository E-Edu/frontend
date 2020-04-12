import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import de from './de/resource.json';
import en from './en/resource.json';

i18n.use(initReactI18next).init({
    debug: true,
    fallbackLng: 'de',
    lng: 'en',
    load: 'all',
    ns: ['translation'],
    defaultNS: 'translation',
    resources: { de: { translation: de }, en: { translation: en } },
    react: { wait: true },
    interpolation: { escapeValue: false },
});

// eslint-disable-next-line
export const t = i18n;
