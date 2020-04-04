const fs = require('fs');
const Parser = require('i18next-scanner').Parser;

const customHandler = function(key) {
    parser.set(key, '__TRANSLATION__');
};

const parser = new Parser();
let content = '';

// Parse Translation Function
// i18next.t('key');
content = fs.readFileSync('src/App.js', 'utf-8');
parser
    .parseFuncFromString(content, customHandler) // pass a custom handler
    .parseFuncFromString(content, { list: ['i18next.t'] }) // override `func.list`
    .parseFuncFromString(content, { list: ['i18next.t'] }, customHandler)
    .parseFuncFromString(content); // use default options and handler

/*
// Parse Trans component
content = fs.readFileSync('/path/to/app.jsx', 'utf-8');
parser
    .parseTransFromString(content, customHandler) // pass a custom handler
    .parseTransFromString(content, { component: 'Trans', i18nKey: 'i18nKey', defaultsKey: 'defaults' })
    .parseTransFromString(content, { fallbackKey: true }) // Uses defaultValue as the fallback key when the i18nKey attribute is missing
    .parseTransFromString(content); // use default options and handler
*/

// Parse HTML Attribute
// <div data-i18n="key"></div>
content = fs.readFileSync('./public/index.html', 'utf-8');
parser
    .parseAttrFromString(content, customHandler) // pass a custom handler
    .parseAttrFromString(content, { list: ['data-i18n'] }) // override `attr.list`
    .parseAttrFromString(content, { list: ['data-i18n'] }, customHandler)
    .parseAttrFromString(content); // using default options and handler

console.log(parser.get());
console.log(parser.get({ sort: true }));
console.log(parser.get('translation:key', { lng: 'de' }));
