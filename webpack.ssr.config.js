const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './assets/components-entrypoint.jsx',
    target: 'node',
    externals: [nodeExternals()],
    output: {
        libraryTarget: 'commonjs',
        path: path.join(__dirname, 'ssr'),
        filename: 'ssr-bundle.js'
    },
    module: {
        rules: [
            {
                include: path.join(__dirname, 'assets'),
                test: /\.jsx?$/,
                use: 'babel-loader',
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
};
