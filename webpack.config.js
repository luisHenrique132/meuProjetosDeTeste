const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode : 'development',
    module : {
        rules : [
            {
                test : /\.(js|jsx)$/,
                exclude : /node_modules/,
                use : {
                    loader : 'babel-loader'
                }
            },
            {
                test : /\.html$/,
                use : [
                    {
                        loader : 'html-loader'
                    }
                ]
            }
        ]
    },
    plugins : [
        new htmlWebpackPlugin({
            template : './public/index.html',
            filename : './index.html'
        })
    ]
}