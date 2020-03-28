var path = require('path');

module.exports = {
    entry: [
        './src/index.ts'
    ],
    output: {
        filename: 'bundle.js',
        path:     path.resolve(__dirname, 'dist/js')
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    resolve: {
        extensions: [
            '.ts',
            '.js'
        ]
    }
};