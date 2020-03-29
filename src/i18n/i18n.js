import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en_US from './en_US.json';
import de_DE from './de_DE.json';

i18n.use(initReactI18next).init({
    debug: true,
    fallbackLng: 'en_US',
    lng: 'de_DE',
    load: 'all',

    resources: { de_DE, en_US },

    react: { wait: true },

    interpolation: { escapeValue: false },
});

// eslint-disable-next-line
export const Translation = i18n;
