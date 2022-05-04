const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'build'),
    },
    resolve: {
        extensions: ['.jsx', '.js', '.json'],
        fallback: {
            crypto: false,
            http: false,
            https: false,
            os: false,
            stream: require.resolve('stream-browserify'),
            Buffer: require.resolve('buffer'),
        },
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'swc-loader',
                exclude: /(node_modules)/,
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
        }),
    ],
}