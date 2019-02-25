const path = require('path');
const webpack = require('webpack');

let src = './source/js/';
module.exports = {
    mode:'none',
    entry: {
        home: `${src}pages/home.js`,
    },
    output: {
        path: path.resolve('./dist/js'),
        filename: '[name].js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            Popper:['popper.js', 'default']
        })
    ],
    // devServer: {
    //     contentBase: path.join(__dirname, 'dist'),
    //     compress: true,
    //     port: 9000
    // }
}