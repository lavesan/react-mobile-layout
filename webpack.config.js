var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/components/mobile-view/index.js',
    output: {
        path: path.resolve('lib'),
        filename: 'MobileView.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    }
}