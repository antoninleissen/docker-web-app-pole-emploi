const ExtractTextPlugin = require("extract-text-webpack-plugin");

let extractLess = new ExtractTextPlugin('./static/css/[name].css');

let config = {
    entry: ['babel-polyfill', './master/main.js'],

    output: {
        publicPath: 'http://workshop.local/',
        path:'/var/www/workshop/front/public/',
        filename: 'index.js'
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.(less|css)/,
                use: extractLess.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        'less-loader'
                    ]
                })
            },
            {
                test: /\.(svg|jpeg|jpg|png)/,
                loader: "file-loader"
            }
        ]
    },

    plugins: [
        extractLess
    ]
};

module.exports = config;