const path = require('path');

module.exports = {
    entry: './assets/jsx/index.jsx',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                include: path.join(__dirname, 'assets'),
                test: /\.jsx?$/,
                use: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
};
