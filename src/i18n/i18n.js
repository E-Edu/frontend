import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en_US from "./en_US";
import de_DE from "./de_DE";

i18n.use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: "en_US",
        lng: "en_US",
        load: "all",

        resources: {
            de_DE: de_DE,
            en_US: en_US
        },

        react: {
            wait: true,
        },

        interpolation: {
            escapeValue: false
        }
    });

export const Translation = i18n;