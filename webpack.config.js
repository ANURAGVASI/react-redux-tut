const path = require('path');

module.exports={
    mode: 'none',
    devServer: {
        contentBase: path.join(__dirname, "public"),
        host: "localhost",
        port: 8000,
        historyApiFallback: true
      },
    entry:'./src/app.js',
    output:{
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }]
    }
}