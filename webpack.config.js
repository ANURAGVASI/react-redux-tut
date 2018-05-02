const path = require('path');



module.exports= (env) => {

    const isProduction = env === 'production';
    console.log("ENV",env);

    return {
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
        },
        devtool: isProduction? 'source-map' : 'cheap-module-eval-sourse-map'
    }
} 