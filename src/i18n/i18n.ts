import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import de from './de/resource.json';
import en from './en/resource.json';

i18n.use(initReactI18next).init({
    debug: true,
    defaultNS: 'translation',
    fallbackLng: 'de',
    interpolation: { escapeValue: false },
    lng: 'en',
    load: 'all',
    ns: ['translation'],
    react: { wait: true },
    resources: { de: { translation: de }, en: { translation: en } },
});

// eslint-disable-next-line
export const t = i18n;
