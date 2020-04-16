const fs = require('fs');
const chalk = require('chalk');

module.exports = {
    input: [
        'app/**/*.{ts,tsx}',
        // Use ! to filter out files or directories
        '!app/**/*.spec.{ts,tsx}',
        '!app/i18n/**',
        '!**/node_modules/**',
        '!app/**/*.store.{ts,tsx}',
    ],
    output: './',
    options: {
        debug: true,
        sort: true,
        func: {
            list: ['i18next.t', 'i18n.t','t.t'],
            extensions: ['.ts', '.tsx']
        },
        trans: {
            component: 'Trans',
            i18nKey: 'i18nKey',
            defaultsKey: 'defaults',
            extensions: ['.ts', '.tsx'],
            fallbackKey: function(ns, value) {
                return value;
            },
            acorn: {
                ecmaVersion: 10, // defaults to 10
                sourceType: 'module', // defaults to 'module'
                // Check out https://github.com/acornjs/acorn/tree/master/acorn#interface for additional options
            }
        },
        lngs: ['en','de'],
        ns: [
            'locale',
            'resource'
        ],

        defaultLng: 'en',
        defaultNs: 'resource',
        defaultValue: '__STRING_NOT_TRANSLATED__',
        resource: {
            loadPath: 'src/i18n/{{lng}}/{{ns}}.json',
            savePath: 'src/i18n/{{lng}}/{{ns}}.json',
            jsonIndent: 2,
            lineEnding: '\n'
        },
        /*nsSeparator: true, // namespace separator
        keySeparator: true, // key separator*/
        nsSeparator: ':',
        keySeparator: '.',
        interpolation: {
            prefix: '{{',
            suffix: '}}'
        }
    },
    transform: function customTransform(file, enc, done) {
        "use strict";
        const parser = this.parser;
        const content = fs.readFileSync(file.path, enc);
        let count = 0;

        parser.parseFuncFromString(content, { list: ['i18next._', 'i18next.__'] }, (key, options) => {
            parser.set(key, Object.assign({}, options, {
                nsSeparator: ':',
                keySeparator: '.',
            }));
            ++count;
        });

        if (count > 0) {
            console.log(`i18next-scanner: count=${chalk.cyan(count)}, file=${chalk.yellow(JSON.stringify(file.relative))}`);
        }

        done();
    }
};
