const path = require('path')

module.exports = {
    entry: './src/app.jsx',
    output: {
        path: path.resolve(__dirname, 'public/scripts'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]                        
                    }
                }
            }
        ]
    }
}