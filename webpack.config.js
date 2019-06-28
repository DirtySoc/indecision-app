// entry -> output

const path = require('path')

module.exports = {
    entry: './src/app.jsx',
    output: {
        path: path.resolve(__dirname, 'public/scripts'),
        filename: 'app.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            options: {
                presets: [
                    "@babel/preset-env",
                    "@babel/preset-react"
                ]
            },
            test: /\.jsx$/,
            exclude: /node_modules/
        }]
    }
}